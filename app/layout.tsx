import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RevealRuntime } from "./components/reveal-runtime";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://visioitsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Visio IT Solutions — Enterprise IT Support, NOC & SOC",
    template: "%s · Visio IT Solutions",
  },
  description:
    "24/7 enterprise IT support, desktop support, network engineering, NOC and SOC services. Visio IT Solutions keeps your infrastructure resilient, secure, and always on.",
  keywords: [
    "IT support",
    "desktop support",
    "network support",
    "NOC services",
    "SOC services",
    "managed IT services",
    "enterprise IT",
    "cybersecurity operations",
    "network operations center",
    "security operations center",
    "Visio IT Solutions",
  ],
  authors: [{ name: "Visio IT Solutions" }],
  creator: "Visio IT Solutions",
  publisher: "Visio IT Solutions",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Visio IT Solutions",
    title: "Visio IT Solutions — Enterprise IT Support, NOC & SOC",
    description:
      "24/7 enterprise IT support, desktop support, network engineering, NOC and SOC services. Built for uptime, built for scale.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visio IT Solutions — Enterprise IT Support, NOC & SOC",
    description:
      "24/7 enterprise IT support, desktop support, network engineering, NOC and SOC services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-[#f5f5f7] antialiased">
        {children}
        <RevealRuntime />
      </body>
    </html>
  );
}
