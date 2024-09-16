const express = require('express');
const cors = require('cors'); // Import the cors middleware
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Import dotenv to load environment variables

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'https://your-frontend-domain.com', // Update with your actual frontend URL
  methods: ['GET', 'POST', 'OPTIONS'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Email sending handler
app.post('/send-email', async (req, res) => {
  const { name, phone, address, additionalPhone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use environment variable
    to: 'assemmahmoudegy1991@gmail.com, omar.poudii1997@gmail.com',
    subject: 'Hp 4525 Order',
    html: `
      <h2>Order Details</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <th style="border: 1px solid black; padding: 8px;">Field</th>
          <th style="border: 1px solid black; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Name</td>
          <td style="border: 1px solid black; padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Phone</td>
          <td style="border: 1px solid black; padding: 8px;">${phone}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Address</td>
          <td style="border: 1px solid black; padding: 8px;">${address}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 8px;">Additional Phone</td>
          <td style="border: 1px solid black; padding: 8px;">${additionalPhone || 'Not provided'}</td>
        </tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).json({ error: 'Error sending email', details: error });
  }
});

// Handle preflight requests (OPTIONS)
app.options('*', cors()); // Allow preflight across all routes

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// zbguqzflpfshtagn