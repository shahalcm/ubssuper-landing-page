import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "UBSSuper – Book Food, Hotels, Taxis & More in One App",
  description:
    "UBSSuper brings food, groceries, taxis, hotels, doctor bookings, jobs, real estate and more together in one convenient app.",
  keywords: [
    "UBSSuper",
    "UBS Super Taxi",
    "super app",
    "food delivery",
    "grocery delivery",
    "taxi booking",
    "hotel booking",
    "doctor booking",
    "real estate",
    "jobs",
  ],
  authors: [{ name: "UBS" }],
  creator: "UBS",
  publisher: "UBS",
  metadataBase: new URL("https://ubssuper.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UBSSuper – Book Food, Hotels, Taxis & More in One App",
    description:
      "UBSSuper brings food, groceries, taxis, hotels, doctor bookings, jobs, real estate and more together in one convenient app.",
    url: "https://ubssuper.com",
    siteName: "UBSSuper",
    images: [
      {
        url: "/logos/ubssuper-logo.png",
        width: 1024,
        height: 1024,
        alt: "UBSSuper App Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBSSuper – Book Food, Hotels, Taxis & More in One App",
    description:
      "UBSSuper brings food, groceries, taxis, hotels, doctor bookings, jobs, real estate and more together in one convenient app.",
    images: ["/logos/ubssuper-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/ubssuper-logo.png",
    apple: "/logos/ubssuper-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
