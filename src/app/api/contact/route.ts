import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Email service not configured. Add WEB3FORMS_ACCESS_KEY to your environment variables.",
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        replyto: email.trim(),
        from_name: "GABRIEL TABLET Portfolio",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
