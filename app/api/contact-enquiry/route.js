import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const strapiBaseUrl = process.env.STRAPI_BACKEND_BASE_URL;
        const strapiApiToken = process.env.STRAPI_API_TOKEN;

        if (!strapiBaseUrl || !strapiApiToken) {
            return NextResponse.json(
                { error: "Contact form is not configured on server. Missing Strapi env vars." },
                { status: 500 }
            );
        }

        const res = await fetch(`${strapiBaseUrl}/contact-enquiries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${strapiApiToken}`
            },
            body: JSON.stringify({ data: body })
        });

        if (!res.ok) {
            const raw = await res.text();
            let errorMessage = "Failed to submit";

            try {
                const parsed = JSON.parse(raw);
                errorMessage =
                    parsed?.error?.message ||
                    parsed?.message ||
                    errorMessage;
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
