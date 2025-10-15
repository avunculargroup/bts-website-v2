import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Mailjet API configuration
    const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
    const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
    const MAILJET_LIST_ID = process.env.MAILJET_LIST_ID;

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !MAILJET_LIST_ID) {
      console.error('Mailjet environment variables not configured');
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Create base64 encoded credentials for Mailjet
    const credentials = Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64');

    // Add contact to Mailjet list
    const mailjetResponse = await fetch('https://api.mailjet.com/v3/REST/contact', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        IsExcludedFromCampaigns: false,
        Name: '',
      }),
    });

    if (!mailjetResponse.ok) {
      const errorData = await mailjetResponse.json();
      console.error('Mailjet API error:', errorData);
      
      // If contact already exists, try to add to list
      if (mailjetResponse.status === 400 && errorData.ErrorMessage?.includes('already exists')) {
        return await addExistingContactToList(email, credentials, MAILJET_LIST_ID);
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    const contactData = await mailjetResponse.json();
    const contactId = contactData.Data[0].ID;

    // Add contact to the newsletter list
    const listResponse = await fetch(`https://api.mailjet.com/v3/REST/listrecipient`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IsUnsubscribed: false,
        ContactID: contactId,
        ListID: parseInt(MAILJET_LIST_ID),
      }),
    });

    if (!listResponse.ok) {
      const errorData = await listResponse.json();
      console.error('Mailjet list subscription error:', errorData);
      return NextResponse.json(
        { error: 'Failed to add to newsletter list' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function addExistingContactToList(email: string, credentials: string, listId: string) {
  try {
    // Get existing contact
    const contactResponse = await fetch(`https://api.mailjet.com/v3/REST/contact/${email}`, {
      headers: {
        'Authorization': `Basic ${credentials}`,
      },
    });

    if (!contactResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to find existing contact' },
        { status: 500 }
      );
    }

    const contactData = await contactResponse.json();
    const contactId = contactData.Data[0].ID;

    // Add to list
    const listResponse = await fetch(`https://api.mailjet.com/v3/REST/listrecipient`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IsUnsubscribed: false,
        ContactID: contactId,
        ListID: parseInt(listId),
      }),
    });

    if (!listResponse.ok) {
      const errorData = await listResponse.json();
      console.error('Mailjet list subscription error:', errorData);
      return NextResponse.json(
        { error: 'Failed to add to newsletter list' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error adding existing contact to list:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
