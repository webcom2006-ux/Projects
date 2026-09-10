import nodemailer from 'nodemailer'

function buildTransporter() {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpSecure = process.env.SMTP_SECURE
  const auth = { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }

  if (smtpHost && smtpPort) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpSecure === 'true',
      auth,
    })
  }

  return nodemailer.createTransport({ service: 'yahoo', auth })
}

export async function POST(request) {
  try {
    const { name, email, mobile, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Missing required fields: name, email, message' },
        { status: 400 },
      )
    }

    await buildTransporter().sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `Pixel Perfect Coding Contact Form: Message from ${name}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>${mobile ? `<p><strong>Mobile Number:</strong> ${mobile}</p>` : ''}<p><strong>Message:</strong></p><p>${String(message).replace(/\n/g, '<br>')}</p>`,
    })

    return Response.json({ success: true, message: 'Email sent!' })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { success: false, message: error?.message || 'Failed to send email' },
      { status: 500 },
    )
  }
}
