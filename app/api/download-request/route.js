import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, catalogueTitle, catalogueFileName, catalogueUrl } = body || {};

    if (!email || !String(email).trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!catalogueUrl || !catalogueTitle) {
      return NextResponse.json(
        { error: "Catalogue information is missing." },
        { status: 400 }
      );
    }

    const strapiBaseUrl = process.env.STRAPI_BACKEND_BASE_URL;
    const strapiApiToken = process.env.STRAPI_API_TOKEN;

    if (!strapiBaseUrl || !strapiApiToken) {
      return NextResponse.json(
        { error: "Download form is not configured on server. Missing Strapi env vars." },
        { status: 500 }
      );
    }

    const res = await fetch(`${strapiBaseUrl}/download-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${strapiApiToken}`,
      },
      body: JSON.stringify({
        data: {
          email: String(email).trim(),
          catalogueTitle,
          catalogueFileName: catalogueFileName || catalogueTitle,
          catalogueUrl,
        },
      }),
    });

    if (!res.ok) {
      const raw = await res.text();
      let errorMessage = "Failed to submit download request";

      try {
        const parsed = JSON.parse(raw);
        errorMessage =
          parsed?.error?.message || parsed?.message || errorMessage;
      } catch {
        // Keep default fallback when response is non-JSON.
      }

      return NextResponse.json(
        { error: `${errorMessage} (status ${res.status})` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
