export async function verifyTurnstileToken(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured in environment variables.");
    return {
      success: false,
      error: "CAPTCHA is not properly configured on the server.",
    };
  }

  if (!token || typeof token !== "string" || !token.trim()) {
    return {
      success: false,
      error: "Please complete the CAPTCHA verification.",
    };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token.trim());

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    const data = await res.json();

    if (!data.success) {
      console.warn("Turnstile verification failed:", data["error-codes"]);
      return {
        success: false,
        error: "Security verification failed. Please try again.",
        errorCodes: data["error-codes"],
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Error verifying Turnstile token:", err);
    return {
      success: false,
      error: "Security verification service temporarily unavailable. Please try again.",
    };
  }
}
