import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/inquiry-supabase';
import { generateClientConfirmationEmail, generateAdminNotificationEmail } from '@/lib/email-templates';

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

    // Save inquiry to JSON file and get reference number
    const referenceNumber = await saveInquiry({
      name,
      email,
      phone,
      eventDate,
      guestCount,
      experienceType,
      additionalNotes,
    });

    const emailData = {
      name,
      email,
      eventDate,
      guestCount,
      experienceType,
      referenceNumber,
      phone,
      additionalNotes,
    };

    // Generate email templates
    const clientEmailHtml = generateClientConfirmationEmail(emailData);
    const adminEmailHtml = generateAdminNotificationEmail(emailData);

    // Send email to admin
    const adminEmailPromise = resend.emails.send({
      from: 'noreply@privatetablebysanjay.com',
      to: 'info@privatetablebysanjay.com',
      subject: `New Inquiry - Ref: ${referenceNumber}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to client
    const clientEmailPromise = resend.emails.send({
      from: 'noreply@privatetablebysanjay.com',
      to: email,
      subject: 'Your Private Table Inquiry - Thank You',
      html: clientEmailHtml,
    });

    // Wait for both emails to be sent
    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      referenceNumber,
    });
  } catch (error) {
    console.error('Inquiry processing error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
