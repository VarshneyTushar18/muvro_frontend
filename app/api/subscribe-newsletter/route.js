export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400 }
      );
    }

    const backendUrl = `${process.env.STRAPI_BACKEND_BASE_URL}/newsletter-subscribers`;

    const checkRes = await fetch(
      `${backendUrl}?filters[emailAddress][$eq]=${encodeURIComponent(email)}`
    );
    const checkData = await checkRes.json();
    const existing = checkData?.data?.[0];

    if (existing) {
      const status = existing.subscriberStatus;
      if (status === "unsubscribed") {
        const updateRes = await fetch(`${backendUrl}/${existing.documentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
          body: JSON.stringify({
            data: {
              subscriberStatus: "subscribed",
            },
          }),
        });

        if (!updateRes.ok) {
          return new Response(
            JSON.stringify({ error: "Failed to subscribe. Please try again." }),
            { status: 500 }
          );
        }

        return new Response(
          JSON.stringify({ message: "You have been subscribed successfully!" }),
          { status: 200 }
        );
      }

      return new Response(
        JSON.stringify({ message: "You are already subscribed." }),
        { status: 200 }
      );
    }

    const res = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          emailAddress: email,
          subscriberStatus: "subscribed",
        },
      }),
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to subscribe. Please try again." }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Thank you for subscribing!" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500 }
    );
  }
}
