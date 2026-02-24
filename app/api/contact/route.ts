import { NextRequest, NextResponse } from "next/server";
import type { ApiResponse, ContactFormData } from "@/types";

// ─── Validation ───────────────────────────────────────────────────────────────
function validatePayload(body: unknown): { valid: boolean; error?: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body." };
  }
  const { name, email, service, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2)
    return { valid: false, error: "Invalid name." };
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { valid: false, error: "Invalid email address." };
  if (typeof service !== "string" || !service.trim())
    return { valid: false, error: "Please select a service." };
  if (typeof message !== "string" || message.trim().length < 20)
    return { valid: false, error: "Message is too short." };

  return { valid: true };
}

// ─── POST /api/contact ────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    const { valid, error } = validatePayload(body);
    if (!valid) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Validation failed.", error },
        { status: 400 },
      );
    }

    const data = body as ContactFormData;

    // ── TODO: Persist to MongoDB ─────────────────────────────────────────────
    // When ready, install mongoose / mongodb and replace the console.log below.
    //
    // import dbConnect from '@/lib/db';
    // import ContactSubmission from '@/models/ContactSubmission';
    // await dbConnect();
    // await ContactSubmission.create({ ...data, createdAt: new Date() });
    // ─────────────────────────────────────────────────────────────────────────

    // ── TODO: Send email notification ────────────────────────────────────────
    // Use nodemailer or Resend SDK here.
    // await sendNotificationEmail(data);
    // ─────────────────────────────────────────────────────────────────────────

    // Temporary: log submission (replace in production)
    console.log("[ResearchForge] New contact submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      time: new Date().toISOString(),
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message:
          "Thank you for reaching out! Our team will connect with you within 24 hours.",
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("[ResearchForge] Contact API error:", err);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Internal server error.",
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// ─── Method not allowed ───────────────────────────────────────────────────────
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
