// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sendEmail = require('./functions/mailgun');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    const result = await sendEmail(email);
    res.status(200).json({ message: 'Email sent', result });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
