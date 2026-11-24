import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tamurdates.com"),
  title: "TAMUR (تمور) — প্রিমিয়াম জাম্বো মেডজুল খেজুর | ১০০% প্রাকৃতিক",
  description:
    "মরূদ্যানের রোদ-পাকা খাঁটি জাম্বো মেডজুল খেজুর। বাছাইকৃত প্রিমিয়াম সাইজ, মুখে মিলিয়ে যাওয়া নরম ক্যারামেল স্বাদ ও এয়ারটাইট সিল্ড ফ্রেশনেস। সারা দেশে ক্যাশ অন ডেলিভারি।",
  keywords: ["TAMUR", "মেডজুল খেজুর", "জাম্বো খেজুর", "খেজুর বাংলাদেশ", "খাঁটি খেজুর", "تمور", "Medjoul Dates"],
  openGraph: {
    title: "TAMUR (تمور) — প্রিমিয়াম জাম্বো মেডজুল খেজুর",
    description: "মরূদ্যানের রোদ-পাকা খাঁটি জাম্বো মেডজুল খেজুর। ১০০% প্রাকৃতিক ও প্রিজারভেটিভমুক্ত।",
    images: [{ url: "/assets/tamur-product-original.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Anek+Bangla:wght@300;400;500;600;700;800&family=Aref+Ruqaa:wght@400;700&family=Baloo+Da+2:wght@500;600;700;800&family=Cinzel+Decorative:wght@700&family=Cinzel:wght@500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&family=Tiro+Bangla:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#493326" />
      </head>
      <body className="min-h-screen bg-[#EDE2D0] text-[#493326] antialiased selection:bg-[#E0CFBA] selection:text-[#493326]">
        {children}
      </body>
    </html>
  );
}
