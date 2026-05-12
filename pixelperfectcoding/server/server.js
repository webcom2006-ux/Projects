import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
  console.error('Missing SMTP_USER, SMTP_PASS, or EMAIL_TO in .env file')
  process.exit(1)
}

function buildTransporter() {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpSecure = process.env.SMTP_SECURE

  const baseAuth = {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }

  // If host/port is provided, use that.
  if (smtpHost && smtpPort) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpSecure === 'true',
      auth: baseAuth,
    })
  }

  // Otherwise default to Gmail.
  return nodemailer.createTransport({
    service: 'yahoo',
    auth: baseAuth,
  })
}

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

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
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent!' })
  } catch (error) {
    console.error('Email error:', error)

    const msg =
      (error && error.responseCode && error.response) ?
        `${error.responseCode} ${error.response}` :
        (error?.message || 'Failed to send email')

    return res.status(500).json({ success: false, message: msg })
  }
})

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`)
})

