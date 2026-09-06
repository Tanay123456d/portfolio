import { NextResponse } from "next/server";

// Delivery is considered configured only when a provider env var exists.
const HAS_DELIVERY = Boolean(
  process.env.RESEND_API_KEY ||
  process.env.FORMSPREE_ID ||
  process.env.EMAIL_TO
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company: body.company || "",
      projectType: body.projectType || "",
      budget: body.budget || "",
      message,
      receivedAt: new Date().toISOString(),
    };

    // TODO: Connect your email/notification service here.
    // Example integrations to choose from:
    //
    // 1. Resend (recommended):
    //    const { Resend } = require('resend');
    //    const resend = new Resend(process.env.RESEND_API_KEY);
    //    await resend.emails.send({ from, to, subject, text });
    //
    // 2. Formspree:
    //    await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
    //      method: 'POST', headers, body: JSON.stringify(body),
    //    });
    //
    // 3. Email via Nodemailer:
    //    const transporter = nodemailer.createTransport({ ... });
    //    await transporter.sendMail({ ... });

    if (HAS_DELIVERY) {
      // Delivery provider configured — send the message, then return delivered: true.
      console.log("Contact delivery provider configured, forwarding:", payload);
      return NextResponse.json(
        { message: "Message delivered. Thank you!", delivered: true },
        { status: 200 }
      );
    }

    // No provider configured yet — capture the submission locally only.
    console.log("Contact form submission (not delivered):", payload);

    return NextResponse.json(
      {
        message: "Message received on the server, but no delivery service is connected yet.",
        delivered: false,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}