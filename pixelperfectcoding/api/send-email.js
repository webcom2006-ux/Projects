import nodemailer from 'nodemailer'

function buildTransporter() {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpSecure = process.env.SMTP_SECURE

  const baseAuth = {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }

  // Custom SMTP
  if (smtpHost && smtpPort) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpSecure === 'true',
      auth: baseAuth,
    })
  }

  // Default Yahoo SMTP
  return nodemailer.createTransport({
    service: 'yahoo',
    auth: baseAuth,
  })
}

export default async function handler(req, res) {
  console.log('API HIT')

  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    console.log('BODY:', req.body)

    const { name, email, mobile, message } = req.body || {}

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, message',
      })
    }

    const transporter = buildTransporter()

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `Pixel Perfect Coding Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${mobile ? `<p><strong>Mobile Number:</strong> ${mobile}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Email sent!',
    })
  } catch (error) {
    console.error('FULL ERROR:', error)

    return res.status(500).json({
      success: false,
      message: error?.message || 'Failed to send email',
    })
  }
}