import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, globalGraph } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Water Management Solution Provider in India | Kothari Group",
  description:
    "India's leading water management solution provider. Kothari Group offers pipes, fittings & irrigation systems that save water and cut costs. Explore now.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={
          "min-h-full bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] selection:bg-[#1575B3] selection:text-white"
        }
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6D67VN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6D67VN');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Schema.txt Template 1: Organization + 2 divisions + WebSite, on every page. */}
        <JsonLd data={globalGraph()} />
        {children}
      </body>
    </html>
  );
}