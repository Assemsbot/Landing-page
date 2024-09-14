const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, address, additionalPhone } = req.body;

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'assemmahmoudegy1991@gmail.com',
        pass: 'zbguqzflpfshtagn', // Use an app-specific password
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'assemmahmoudegy1991@gmail.com',
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

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).json({ error: 'Error sending email', details: error });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
