import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO"
] as const;

const missingEnv = () =>
  REQUIRED_ENV.filter((key) => !process.env[key]);

const transporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const missing = missingEnv();
  if (missing.length) {
    console.error("[CONTACT_API_MISSING_ENV]", missing);
    return NextResponse.json(
      {
        error:
          "Contact service is not configured yet. Please add SMTP credentials."
      },
      { status: 503 }
    );
  }

  try {
    // 📌 1. Email TO YOU (Portfolio Owner)
    await transporter().sendMail({
      from: `"Pushpesh Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 12px;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `
    });

    // 📌 2. AUTO-REPLY Email TO USER
    await transporter().sendMail({
      from: `"Pushpesh Kumar" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2 style="color: #0070f3;">Hi ${name},</h2>
          <p>
            Thank you for reaching out! I have received your message and I will
            personally get back to you soon.
          </p>
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <br/>
          <p>Warm regards,</p>
          <p><strong>Pushpesh Kumar</strong></p>
          <p>Portfolio Website</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json({ error: "Unable to send message right now." }, { status: 500 });
  }
};
