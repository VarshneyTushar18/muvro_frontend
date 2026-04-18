import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || 1;
        const pageSize = searchParams.get("pageSize") || 25;

        const strapiRes = await fetch(
            `${process.env.STRAPI_BACKEND_BASE_URL}/events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        );

        if (!strapiRes.ok) {
            return NextResponse.json({ error: "Failed to fetch from Strapi" }, { status: strapiRes.status });
        }

        const data = await strapiRes.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
