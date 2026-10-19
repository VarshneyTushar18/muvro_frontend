const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Free / consumer email domains blocked for catalogue downloads */
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "yahoo.fr",
  "yahoo.de",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "hotmail.fr",
  "outlook.com",
  "outlook.in",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "zoho.com",
  "zohomail.com",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "email.com",
  "inbox.com",
  "rediffmail.com",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "qq.com",
  "163.com",
  "126.com",
  "fastmail.com",
  "tutanota.com",
  "hey.com",
  "pm.me",
]);

export function getEmailDomain(email) {
  const trimmed = String(email || "").trim().toLowerCase();
  const at = trimmed.lastIndexOf("@");
  if (at < 0) return "";
  return trimmed.slice(at + 1);
}

/**
 * Returns an error message if invalid / free email, otherwise null.
 */
export function validateBusinessEmail(email) {
  const value = String(email || "").trim();

  if (!value) {
    return "Please enter your company email address.";
  }

  if (!EMAIL_REGEX.test(value)) {
    return "Please enter a valid email address.";
  }

  const domain = getEmailDomain(value);
  if (!domain || FREE_EMAIL_DOMAINS.has(domain)) {
    return "Please use your company email address. Free email providers (Gmail, Yahoo, Outlook, etc.) are not allowed.";
  }

  return null;
}
