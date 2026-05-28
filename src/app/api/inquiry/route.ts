import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, guestCount, experienceType, additionalNotes } = body;

    // Validate required fields
    if (!name || !email || !eventDate || !guestCount || !experienceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support directly.' },
        { status: 503 }
      );
    }

    // Format experience type display name
    const experienceMap: Record<string, string> = {
      intimate: 'The Intimate Table',
      soiree: 'The Private Soirée',
      grand: 'The Grand Event',
      outdoor: 'Outdoor Events',
    };

    const experienceDisplay = experienceMap[experienceType] || experienceType;

    // Send email to admin
    const adminEmailPromise = resend.emails.send({
      from: 'noreply@privatetablebysanjay.com',
      to: 'info@privatetablebysanjay.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #C9A84C;">New Private Table Inquiry</h2>
          <hr style="border: none; border-top: 1px solid #C9A84C;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p><strong>Event Details:</strong></p>
          <p><strong>Date:</strong> ${eventDate}</p>
          <p><strong>Guest Count:</strong> ${guestCount}</p>
          <p><strong>Experience Type:</strong> ${experienceDisplay}</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p><strong>Additional Notes:</strong></p>
          <p>${additionalNotes || 'None'}</p>
        </div>
      `,
    });

    // Send confirmation email to client
    const clientEmailPromise = resend.emails.send({
      from: 'noreply@privatetablebysanjay.com',
      to: email,
      subject: 'Your Private Table Inquiry - Thank You',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #C9A84C;">Thank You for Your Inquiry</h2>
          <p>Dear ${name},</p>
          <p>We have received your inquiry for <strong>${experienceDisplay}</strong> at The Private Table by Sanjay.</p>
          <p>Our team will review your details and get back to you within 24 hours to discuss your perfect culinary experience.</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p><strong>Your Inquiry Details:</strong></p>
          <p>Event Date: ${eventDate}</p>
          <p>Guest Count: ${guestCount}</p>
          <p style="margin-top: 20px; font-style: italic;">Best regards,<br/><strong>The Private Table by Sanjay</strong></p>
        </div>
      `,
    });

    // Wait for both emails to be sent
    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
