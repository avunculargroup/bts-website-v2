import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, interests } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Please fill in your name and email address' },
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
        { error: 'Waitlist service not configured' },
        { status: 500 }
      );
    }

    // Create base64 encoded credentials for Mailjet
    const credentials = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64');

    // Prepare email content
    const emailContent = `
      <h2>New Waitlist Signup</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${interests ? `<p><strong>Interests:</strong> ${interests}</p>` : ''}
      <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-AU', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</p>
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
            Subject: 'New Waitlist Signup - Events',
            HTMLPart: emailContent,
            TextPart: `
              New Waitlist Signup
              
              Name: ${name}
              Email: ${email}
              ${phone ? `Phone: ${phone}` : ''}
              ${interests ? `Interests: ${interests}` : ''}
              
              Date: ${new Date().toLocaleDateString('en-AU', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            `
          }
        ]
      }),
    });

    if (!mailjetResponse.ok) {
      const errorData = await mailjetResponse.json();
      console.error('Mailjet API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
