import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, guestCount, experienceType, additionalNotes } = body;

    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    // Send email to admin
    await resend.emails.send({
      from: 'inquiry@privatetablebysanjay.com',
      to: 'info@privatetablebysanjay.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Private Table Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Guest Count:</strong> ${guestCount}</p>
        <p><strong>Experience Type:</strong> ${experienceType}</p>
        <p><strong>Additional Notes:</strong></p>
        <p>${additionalNotes || 'None'}</p>
      `,
    });

    // Send confirmation email to client
    await resend.emails.send({
      from: 'inquiry@privatetablebysanjay.com',
      to: email,
      subject: 'Your Private Table Inquiry',
      html: `
        <h2>Thank you for your inquiry</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry for The Private Table by Sanjay. We will get back to you within 24 hours to discuss your perfect culinary experience.</p>
        <p>Best regards,<br/>The Private Table by Sanjay</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
