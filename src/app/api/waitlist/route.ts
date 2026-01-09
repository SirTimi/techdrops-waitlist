// app/api/waitlist/route.ts

import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Initialize Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email template
const getConfirmationEmail = (firstName: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0D9488;">Welcome to TechDrops!</h1>
      
      <p>Hi ${firstName},</p>
      
      <p>You're on the waitlist! Here's what's happening next:</p>
      
      <p>We're building TechDrops to help non-technical founders understand tech without coding. Your personalized path will cover the exact concepts you need for your business.</p>
      
      <h3 style="color: #0D9488;">In the meantime:</h3>
      <ul>
        <li>Follow us on X <a href="https://twitter.com">@techdrops</a> for founder tips on tech concepts</li>
        <li>We'll email you the day we launch</li>
        <li>Early access users get 50% off premium forever</li>
      </ul>
      
      <p>Excited to see you on the other side,<br/>
      <strong>The TechDrops Team</strong></p>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
      
      <p style="color: #6b7280; font-size: 12px;">
        Questions? Reply to this email. We read every message.
      </p>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { email, firstName, role, source = 'direct' } = body;

    // Validate required fields
    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Email already on waitlist' },
        { status: 409 }
      );
    }

    // Insert into Supabase
    const { data, error: dbError } = await supabase
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase(),
          first_name: firstName,
          role: role || null,
          source,
          status: 'pending',
        },
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save to waitlist' },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: 'Welcome to TechDrops! 🚀',
        html: getConfirmationEmail(firstName),
      });
    } catch (emailError) {
      console.error('Email send error:', emailError);
      // Don't fail the request if email fails, user is still added to waitlist
      // You'll be notified and can resend later
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist!',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check if email is on waitlist
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter required' },
        { status: 400 }
      );
    }

    const { data } = await supabase
      .from('waitlist')
      .select('*')
      .eq('email', email.toLowerCase())
      .single();

    if (!data) {
      return NextResponse.json({ exists: false }, { status: 200 });
    }

    return NextResponse.json({ exists: true, data }, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}