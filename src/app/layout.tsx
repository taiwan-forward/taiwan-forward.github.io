import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://taiwan-forward.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Taiwan Forward 台灣向前 — Understand Today. Improve Tomorrow.",
    template: "%s · Taiwan Forward 台灣向前",
  },
  description:
    "An independent, nonpartisan, non-commercial, evidence-based examination of Taiwan's societal conditions — strengths, challenges, structural conditions and long-term trends, contextualized through international comparison. 獨立、非黨派、非商業，以證據為基礎的台灣社會整體檢視。",
  keywords: [
    "Taiwan",
    "台灣",
    "society",
    "社會",
    "evidence-based research",
    "demographics",
    "人口",
    "international comparison",
    "public interest",
  ],
  authors: [{ name: "Taiwan Forward 台灣向前" }],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "zh-TW": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Taiwan Forward 台灣向前",
    description:
      "An independent, evidence-based examination of Taiwan's societal conditions. Understand Today. Improve Tomorrow.",
    url: SITE_URL,
    siteName: "Taiwan Forward",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_TW",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Taiwan Forward — 台灣向前 · Understand Today. Improve Tomorrow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiwan Forward 台灣向前",
    description:
      "An independent, evidence-based examination of Taiwan's societal conditions.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F141A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
