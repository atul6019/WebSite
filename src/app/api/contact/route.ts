import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(7),
  country: z.string().min(2),
  productInterest: z.string().min(2),
  requirement: z.string().min(10),
  budget: z.string().min(2),
  timeline: z.string().min(2)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid inquiry", issues: parsed.error.flatten() }, { status: 400 });

  const payload = parsed.data;
  if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Utkranti Yantra <onboarding@resend.dev>",
        to: [process.env.CONTACT_EMAIL],
        subject: `New inquiry: ${payload.productInterest}`,
        text: Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join("\n")
      })
    });
  }

  console.info("New Utkranti Yantra inquiry", payload);
  return NextResponse.json({ ok: true });
}
