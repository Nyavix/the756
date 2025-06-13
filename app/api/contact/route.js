import { Resend } from 'resend';
import { NextResponse } from 'next/server';


// Initialize Resend with the API key from your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Server-side validation
    if (!name || !email || !email.includes('@') || !message) {
      return NextResponse.json({ message: 'Validation failed.' }, { status: 400 });
    }

    // The magic happens here: sending the email with Resend
    const { data, error: emailError } = await resend.emails.send({
      // The "from" address must be a verified domain on your Resend account.
      // For development, Resend provides a default "onboarding@resend.dev" address. Ensure this is a verified domain email in production.
      from: process.env.RESEND_FROM_EMAIL || 'Contact Form <onboarding@resend.dev>', 
      to: [process.env.CONTACT_FORM_TO_EMAIL], // The email address where you want to receive messages
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
    if (emailError) {
      console.error({ emailError });
      return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
    }

    // Send a success response back to the form
    return NextResponse.json({ message: 'Message sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}