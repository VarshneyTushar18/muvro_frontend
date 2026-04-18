// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/utilities/BootstrapClient";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header";
import Cursor from "./components/layout/Cursor";
import Footer from "./components/layout/footer/Footer";
import AOSInitializer from "./utilities/AOSInitializer";
import QuickContactCTA from "./components/layout/QuickContactCTA/QuickContactCTA";
import LightboxInitializer from "./utilities/LightboxInitializer";
import Script from "next/script";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const frontendBaseUrl =
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  title: "MUVRO | Warehouse & Logistics Automation Solutions",
  description:
    "MUVRO delivers advanced warehouse automation systems — including Tilt Tray Sorters, conveyors, and intralogistics solutions — designed for high-speed, precise, and scalable operations in e-commerce, retail, and logistics centers.",
  keywords: [
    "MUVRO",
    "warehouse automation",
    "tilt tray sorter",
    "conveyor systems",
    "intralogistics",
    "sorting technology",
    "logistics automation",
    "material handling",
    "e-commerce fulfillment",
    "distribution center solutions",
  ],
  authors: [{ name: "MUVRO", url: frontendBaseUrl }],
  creator: "MUVRO",
  publisher: "MUVRO",
  metadataBase: new URL(frontendBaseUrl),
  openGraph: {
    title: "MUVRO | Warehouse & Logistics Automation Solutions",
    description:
      "Discover MUVRO's precision-engineered automation systems that power the future of smart warehouses and logistics efficiency.",
    url: frontendBaseUrl,
    siteName: "MUVRO",
    images: [
      {
        url: frontendBaseUrl + `/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "MUVRO Warehouse Automation Systems",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUVRO | Warehouse & Logistics Automation Solutions",
    description:
      "Leading provider of high-speed, modular warehouse automation and intralogistics systems.",
    images: [frontendBaseUrl + `/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: frontendBaseUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              function googleTranslateElementInit() {
                  new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'ar,en,fr,de,it,ja,ko,pt,ru,es',
                    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                  },
                  'google_translate_element'
                );
              }
            `,
        }}
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <body>
        <AOSInitializer />
        <LightboxInitializer />
        {/* <Cursor /> */}
        <div id="google_translate_element" className="translator-floating"></div>

        <Header />
        <QuickContactCTA />
        {children}
        <BootstrapClient />
        <Footer />
        <ScrollToTop />
        <Script src="/typingEffect.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
