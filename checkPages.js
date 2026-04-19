const BASE_URL = "http://localhost:3000";

const pages = [
  "/",
  "/about-us",
  "/blogs",
  "/careers",
  "/contact",
  "/conveyor",
  "/downloads",
  "/events",
  "/industries",
  "/secondary-sorting",
  "/solutions",
  "/technologies",
  "/thank-you",

  // ✅ valid company routes
  "/company/our-history",
  "/company/our-values",
  "/company/quality-policy",
  "/company/why-muvro",
];

async function checkPages() {
  console.log("Checking pages...\n");

  let failed = [];

  for (const path of pages) {
    try {
      const res = await fetch(`${BASE_URL}${path}`);

      if (res.status === 200) {
        console.log(`✅ ${path}`);
      } else {
        console.log(`❌ ${path} → ${res.status}`);
        failed.push({ page: path, status: res.status });
      }

    } catch (err) {
      console.log(`🚨 ${path} → ERROR`);
      failed.push({ page: path, error: err.message });
    }
  }

  console.log("\n========================");
  console.log("FAILED PAGES:");
  console.table(failed);
}

checkPages();