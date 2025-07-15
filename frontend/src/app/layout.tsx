import type { Metadata } from "next";
import "./globals.css";

// Tajawal font is loaded via Google Fonts in globals.css and <head> below

export const metadata: Metadata = {
  title: "GlowChat - واجهة دردشة تفاعلية",
  description: "منصة تواصل مبتكرة مصممة لتعزيز تفاعلاتك الرقمية.",
  // Add more metadata as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Tajawal font fallback for Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-[#F8F9FA] text-[#343A40] antialiased overflow-x-hidden"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
