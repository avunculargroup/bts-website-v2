import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, role, sessionType, preferredDate, attendees, notes } = await request.json();

    if (!name || !email || !sessionType) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 });
    }
    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
    const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY) {
      console.error('Mailjet env not configured');
      return NextResponse.json({ error: 'Service not configured' }, { status: 500 });
    }

    const credentials = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64');

    const subject = `New ${sessionType} booking request`;
    const html = `
      <h2>New Session Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
      <p><strong>Session Type:</strong> ${sessionType}</p>
      ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
      ${attendees ? `<p><strong>Estimated Attendees:</strong> ${attendees}</p>` : ''}
      ${notes ? `<p><strong>Notes:</strong><br/> ${String(notes).replace(/\n/g, '<br>')}</p>` : ''}
    `;

    const mj = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: 'noreply@btreasury.com.au', Name: 'BTS Website' },
            To: [ { Email: 'bookings@btreasury.com.au', Name: 'BTS Bookings' } ],
            Subject: subject,
            HTMLPart: html,
            TextPart: `New Session Booking Request\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${company ? `Company: ${company}\n` : ''}${role ? `Role: ${role}\n` : ''}Session Type: ${sessionType}\n${preferredDate ? `Preferred Date: ${preferredDate}\n` : ''}${attendees ? `Estimated Attendees: ${attendees}\n` : ''}${notes ? `\nNotes:\n${notes}` : ''}`
          }
        ]
      })
    });

    if (!mj.ok) {
      const errorData = await mj.json();
      console.error('Mailjet error:', errorData);
      return NextResponse.json({ error: 'Failed to send request' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('book-session error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


