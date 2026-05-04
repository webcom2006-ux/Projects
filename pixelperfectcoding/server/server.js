require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// SMTP transporter (Gmail example)
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 587,
  secure: false, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/email', async (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_TO || process.env.SMTP_USER,
    subject: `Pixel Perfect Coding Contact Form: Message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Email sent!' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ success: false, message: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`)
})
