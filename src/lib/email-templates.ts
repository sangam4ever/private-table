export interface EmailTemplateData {
  name: string;
  email: string;
  eventDate: string;
  guestCount: string;
  experienceType: string;
  referenceNumber: string;
  phone?: string;
  additionalNotes?: string;
}

const experienceMap: Record<string, string> = {
  intimate: 'The Intimate Table',
  soiree: 'The Private Soirée',
  grand: 'The Grand Event',
  outdoor: 'Outdoor Events',
};

export function generateClientConfirmationEmail(data: EmailTemplateData): string {
  const experienceDisplay = experienceMap[data.experienceType] || data.experienceType;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Private Table Inquiry</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Cormorant Garamond', Georgia, serif;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      color: #f5f0e8;
      line-height: 1.6;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #0a0a0a;
      border: 2px solid #c9a84c;
      box-shadow: 0 20px 60px rgba(201, 168, 76, 0.1);
    }

    .header {
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      padding: 60px 40px;
      text-align: center;
      border-bottom: 2px solid #c9a84c;
    }

    .header h1 {
      font-size: 36px;
      font-weight: 300;
      letter-spacing: 2px;
      color: #c9a84c;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .header-subtitle {
      font-size: 14px;
      letter-spacing: 3px;
      color: #c9a84c;
      text-transform: uppercase;
      font-family: 'Jost', sans-serif;
    }

    .reference-section {
      background: rgba(201, 168, 76, 0.05);
      padding: 40px;
      text-align: center;
      border-bottom: 1px solid #c9a84c;
    }

    .reference-label {
      font-size: 12px;
      letter-spacing: 3px;
      color: #c9a84c;
      text-transform: uppercase;
      margin-bottom: 15px;
      font-family: 'Jost', sans-serif;
    }

    .reference-number {
      font-size: 32px;
      font-weight: 300;
      color: #c9a84c;
      letter-spacing: 2px;
      margin-bottom: 15px;
      font-family: 'Jost', sans-serif;
    }

    .reference-note {
      font-size: 12px;
      color: #a89968;
      font-family: 'Jost', sans-serif;
    }

    .content {
      padding: 50px 40px;
    }

    .greeting {
      font-size: 18px;
      margin-bottom: 30px;
      color: #f5f0e8;
    }

    .message-section {
      margin-bottom: 40px;
      border-left: 2px solid #c9a84c;
      padding-left: 20px;
    }

    .message-section p {
      margin-bottom: 15px;
      color: #f5f0e8;
      font-size: 14px;
      line-height: 1.8;
    }

    .details {
      background: rgba(201, 168, 76, 0.05);
      padding: 30px;
      border: 1px solid #c9a84c;
      margin: 30px 0;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid rgba(201, 168, 76, 0.2);
      font-size: 13px;
    }

    .detail-row:last-child {
      border-bottom: none;
    }

    .detail-label {
      color: #c9a84c;
      font-family: 'Jost', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 11px;
    }

    .detail-value {
      color: #f5f0e8;
      text-align: right;
    }

    .divider {
      height: 1px;
      background: #c9a84c;
      margin: 40px 0;
      opacity: 0.3;
    }

    .next-steps {
      margin-top: 40px;
    }

    .next-steps h3 {
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c9a84c;
      margin-bottom: 20px;
      font-weight: 300;
      font-family: 'Jost', sans-serif;
    }

    .steps-list {
      list-style: none;
    }

    .steps-list li {
      padding: 12px 0;
      padding-left: 25px;
      position: relative;
      color: #f5f0e8;
      font-size: 13px;
      line-height: 1.6;
    }

    .steps-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #c9a84c;
      font-weight: bold;
    }

    .footer {
      background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
      padding: 40px;
      text-align: center;
      border-top: 2px solid #c9a84c;
      font-size: 12px;
      color: #a89968;
    }

    .footer-brand {
      font-size: 16px;
      color: #c9a84c;
      margin-bottom: 15px;
      letter-spacing: 1px;
      font-family: 'Jost', sans-serif;
    }

    .footer-contact {
      margin: 15px 0;
      font-size: 12px;
    }

    .footer-contact a {
      color: #c9a84c;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      .container {
        border: none;
      }

      .header {
        padding: 40px 20px;
      }

      .content {
        padding: 30px 20px;
      }

      .reference-number {
        font-size: 24px;
      }

      .detail-row {
        flex-direction: column;
      }

      .detail-value {
        text-align: left;
        margin-top: 5px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="header-subtitle">The Private Table</div>
      <h1>Thank You</h1>
      <div class="header-subtitle">Your Inquiry Has Been Received</div>
    </div>

    <!-- Reference Number Section -->
    <div class="reference-section">
      <div class="reference-label">Your Reference Number</div>
      <div class="reference-number">${data.referenceNumber}</div>
      <div class="reference-note">Please save this for your records</div>
    </div>

    <!-- Content -->
    <div class="content">
      <p class="greeting">Dear ${data.name},</p>

      <div class="message-section">
        <p>Thank you for choosing The Private Table by Sanjay for your culinary experience.</p>
        <p>We have received your inquiry and are excited to create something extraordinary for you. Our team will carefully review your vision and reach out within 24 hours to discuss every detail of your perfect event.</p>
      </div>

      <!-- Your Details -->
      <div class="details">
        <div class="detail-row">
          <span class="detail-label">Experience</span>
          <span class="detail-value">${experienceDisplay}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Date</span>
          <span class="detail-value">${new Date(data.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Guest Count</span>
          <span class="detail-value">${data.guestCount}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Contact Email</span>
          <span class="detail-value">${data.email}</span>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Next Steps -->
      <div class="next-steps">
        <h3>What Happens Next</h3>
        <ul class="steps-list">
          <li>Our team reviews your inquiry and event details</li>
          <li>We prepare a bespoke proposal tailored to your vision</li>
          <li>You receive a call within 24 hours to discuss</li>
          <li>Together we craft your perfect culinary experience</li>
        </ul>
      </div>

      <div class="divider"></div>

      <p style="margin-top: 30px; color: #f5f0e8; font-size: 13px; line-height: 1.8;">
        If you have any questions before we contact you, please don't hesitate to reach out. We're here to make your experience unforgettable.
      </p>

      <p style="margin-top: 20px; color: #f5f0e8; font-size: 13px;">
        Best regards,<br>
        <strong>The Private Table by Sanjay</strong>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-brand">The Private Table by Sanjay</div>
      <div class="footer-contact">
        <p><a href="mailto:info@privatetablebysanjay.com">info@privatetablebysanjay.com</a></p>
      </div>
      <p style="margin-top: 20px; color: #8b8b8b;">Luxury Private Chef Services</p>
      <p style="margin-top: 15px; font-size: 11px; color: #696969;">We respect your privacy. Your information will only be used to contact you about your inquiry.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateAdminNotificationEmail(data: EmailTemplateData): string {
  const experienceDisplay = experienceMap[data.experienceType] || data.experienceType;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Private Table Inquiry</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Cormorant Garamond', Georgia, serif;
      background: #f5f0e8;
      color: #0a0a0a;
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
      background: #ffffff;
      border-left: 4px solid #c9a84c;
    }

    .header {
      background: #0a0a0a;
      color: #c9a84c;
      padding: 30px 40px;
      text-align: center;
    }

    .header h1 {
      font-size: 28px;
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 5px;
    }

    .header p {
      font-size: 13px;
      letter-spacing: 2px;
      font-family: 'Jost', sans-serif;
    }

    .reference-badge {
      display: inline-block;
      background: #c9a84c;
      color: #0a0a0a;
      padding: 12px 25px;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
      font-family: 'Jost', sans-serif;
    }

    .content {
      padding: 40px;
    }

    .section {
      margin-bottom: 30px;
    }

    .section h2 {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #c9a84c;
      margin-bottom: 20px;
      font-weight: 300;
      font-family: 'Jost', sans-serif;
      border-bottom: 1px solid #c9a84c;
      padding-bottom: 10px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .info-item {
      padding: 15px;
      background: #f9f9f9;
      border-left: 2px solid #c9a84c;
    }

    .info-label {
      font-size: 11px;
      text-transform: uppercase;
      color: #c9a84c;
      letter-spacing: 1px;
      margin-bottom: 8px;
      font-family: 'Jost', sans-serif;
    }

    .info-value {
      font-size: 14px;
      color: #0a0a0a;
    }

    .notes-section {
      background: #f9f9f9;
      padding: 20px;
      border-left: 2px solid #c9a84c;
      margin-top: 20px;
    }

    .footer {
      background: #f5f0e8;
      padding: 20px 40px;
      font-size: 12px;
      color: #696969;
      border-top: 1px solid #e0e0e0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry</h1>
      <p>The Private Table</p>
      <div class="reference-badge">${data.referenceNumber}</div>
    </div>

    <div class="content">
      <!-- Client Details -->
      <div class="section">
        <h2>Client Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Name</div>
            <div class="info-value">${data.name}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone</div>
            <div class="info-value">${data.phone || 'Not provided'}</div>
          </div>
        </div>
      </div>

      <!-- Event Details -->
      <div class="section">
        <h2>Event Details</h2>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Experience Type</div>
            <div class="info-value">${experienceDisplay}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Preferred Date</div>
            <div class="info-value">${new Date(data.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Guest Count</div>
            <div class="info-value">${data.guestCount}</div>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="section">
        <h2>Additional Notes</h2>
        <div class="notes-section">
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${data.additionalNotes || 'No additional notes provided'}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>Reference: ${data.referenceNumber}</p>
      <p style="margin-top: 10px;">Reply to: ${data.email}</p>
    </div>
  </div>
</body>
</html>
  `;
}
