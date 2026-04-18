import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const ctc = formData.get("ctc");
    const experience = formData.get("experience");
    const location = formData.get("location");
    const applyingFor = formData.get("applyingFor");
    const resumeFile = formData.get("resume");

    let resumeId = null;

    if (resumeFile) {
      const uploadForm = new FormData();
      uploadForm.append("files", resumeFile, resumeFile.name);

      const uploadRes = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        const err = await uploadRes.text();
        console.error("File upload failed:", err);
        return NextResponse.json({ error: "File upload failed" }, { status: 500 });
      }

      const uploadData = await uploadRes.json();
      resumeId = uploadData[0].id; 
    }

    const entryPayload = {
      data: {
        fullName:name,
        email,
        phoneNumber:phone,
        currentCTC:ctc,
        experience,
        currentLocation:location,
        applyingFor,
        resume: resumeId, 
      },
    };

    const entryRes = await fetch(`${process.env.STRAPI_BACKEND_BASE_URL}/career-enquiries`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryPayload),
    });

    if (!entryRes.ok) {
      const err = await entryRes.text();
      console.error("Entry creation failed:", err);
      return NextResponse.json({ error: "Failed to create entry" }, { status: 500 });
    }

    const entryData = await entryRes.json();
    return NextResponse.json({ success: true, data: entryData });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
