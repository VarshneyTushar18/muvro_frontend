import ContactUs from "./ContactUs";

async function getGlobalPresenceLocations() {
  const backendBaseUrl = process.env.STRAPI_BACKEND_BASE_URL;
  if (!backendBaseUrl) {
    console.error("Missing environment variable STRAPI_BACKEND_BASE_URL");
    return [];
  }

  try {
    const url = new URL("footer?populate=*", `${backendBaseUrl}/`).toString();
    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Failed to fetch footer locations (${res.status})`);
      return [];
    }

    const data = await res.json();
    return data?.data?.location || [];
  } catch (error) {
    console.error("Global presence locations load failed:", error);
    return [];
  }
}

export default async function ContactPage() {
  const locations = await getGlobalPresenceLocations();
  return <ContactUs locations={locations} />;
}
