import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const res = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/contact-enquiries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`
            },
            body: JSON.stringify({ data: body })
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json({ error: error.message || 'Failed to submit' }, { status: 500 });
        }

        const data = await res.json();
        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
