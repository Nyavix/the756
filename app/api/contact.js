// File: /pages/api/contact.js

import { Resend } from 'resend';

// Initialize Resend with the API key from your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // We only want to handle POST requests
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !email.includes('@') || !message) {
      return res.status(400).json({ message: 'Validation failed.' });
    }

    try {
      // The magic happens here: sending the email with Resend
      const { data, error } = await resend.emails.send({
        // The "from" address must be a verified domain on your Resend account.
        // For development, Resend provides a default "onboarding@resend.dev" address.
        from: 'Contact Form <onboarding@resend.dev>', 
        to: ['your-personal-email@example.com'], // The email address where you want to receive messages
        subject: `New Message from ${name}`,
        reply_to: email, // Set the sender's email as the reply-to address
        // You can use simple text or create a more complex React component for the email body
        html: `<p>You have a new contact form submission:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>`,
      });

      // If Resend returns an error
      if (error) {
        console.error({ error });
        return res.status(500).json({ message: 'Error sending email.' });
      }

      // Send a success response back to the form
      res.status(200).json({ message: 'Message sent successfully!', data });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An unexpected error occurred.' });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}