const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();

app.use(cors()); // Enable CORS for frontend communication
app.use(bodyParser.json()); // Parse incoming JSON requests

// Define the email route
app.post('/send-email', (req, res) => {
  const { name, phone, address, additionalPhone } = req.body;

  // Set up the nodemailer transport (using Gmail SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'assemmahmoudegy1991@gmail.com', // Your Gmail account
      pass: 'zbguqzflpfshtagn', // Your generated app password from Google
    },
  });

  // Define the email details with HTML content
  const mailOptions = {
    from: 'assemmahmoudegy1991@gmail.com', // Sender's email
    to: 'assemmahmoudegy1991@gmail.com, omar.poudii1997@gmail.com', // Receiver's email (your own)
    subject: 'Hp 4525 Order',
    // Use HTML to send the email as a table
    html: `
      <h2>Order Details</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Field</th>
          <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Value</th>
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

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send email');
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
