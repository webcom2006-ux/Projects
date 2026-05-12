# TODO

- [ ] Fix backend HTTP 500 handling in `server/server.js`
  - [x] Add try/catch around `transporter.sendMail`
  - [x] Log nodemailer error details
  - [x] Return JSON error with proper HTTP status
  - [x] Make transporter config more robust for Gmail/SMTP host settings
- [ ] Restart server and re-test contact form


