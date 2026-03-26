import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Resend provides this for testing
      to: ['thisila100@gmail.com'], // YOUR GMAIL HERE
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}