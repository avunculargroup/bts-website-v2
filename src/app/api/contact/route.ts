import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Mailjet API configuration
    const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
    const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY) {
      console.error('Mailjet environment variables not configured');
      return NextResponse.json(
        { error: 'Contact service not configured' },
        { status: 500 }
      );
    }

    // Create base64 encoded credentials for Mailjet
    const credentials = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64');

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Mailjet
    const mailjetResponse = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: 'noreply@btreasury.com.au',
              Name: 'BTreasury Website'
            },
            To: [
              {
                Email: 'enquiry@btreasury.com.au',
                Name: 'BTreasury Team'
              }
            ],
            Subject: `New Contact Form: ${subject}`,
            HTMLPart: emailContent,
            TextPart: `
              New Contact Form Submission
              
              Name: ${name}
              Email: ${email}
              ${phone ? `Phone: ${phone}` : ''}
              ${company ? `Company: ${company}` : ''}
              Subject: ${subject}
              
              Message:
              ${message}
            `
          }
        ]
      }),
    });

    if (!mailjetResponse.ok) {
      const errorData = await mailjetResponse.json();
      console.error('Mailjet API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
