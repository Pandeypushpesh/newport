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
    await transporter().sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

${message}
      `.trim()
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json({ error: "Unable to send message right now." }, { status: 500 });
  }
};

