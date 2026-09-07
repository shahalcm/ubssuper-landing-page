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
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "UBS Super Taxi | Fast & Convenient Ride Booking",
  description:
    "Discover UBS Super Taxi, a convenient ride-booking app designed to make your everyday journeys easier. Download the app from Google Play.",
  keywords: [
    "UBS Super Taxi",
    "taxi booking app",
    "ride booking",
    "fast pickup",
    "UBSSuper",
    "super app",
    "food delivery",
    "grocery delivery",
    "hotel booking",
    "doctor booking",
    "jobs",
    "real estate",
  ],
  authors: [{ name: "UBS" }],
  creator: "UBS",
  publisher: "UBS",
  metadataBase: new URL("https://ubssupertaxi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UBS Super Taxi | Fast & Convenient Ride Booking",
    description:
      "Discover UBS Super Taxi, a convenient ride-booking app designed to make your everyday journeys easier. Download the app from Google Play.",
    url: "https://ubssupertaxi.com",
    siteName: "UBS Super Taxi & UBSSuper",
    images: [
      {
        url: "/logos/ubs-super-taxi-logo.png",
        width: 1024,
        height: 1024,
        alt: "UBS Super Taxi Official Logo",
      },
      {
        url: "/logos/ubssuper-logo.png",
        width: 1024,
        height: 1024,
        alt: "UBSSuper Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBS Super Taxi | Fast & Convenient Ride Booking",
    description:
      "Discover UBS Super Taxi, a convenient ride-booking app designed to make your everyday journeys easier. Download the app from Google Play.",
    images: ["/logos/ubs-super-taxi-logo.png"],
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
    icon: "/logos/ubs-super-taxi-logo.png",
    apple: "/logos/ubs-super-taxi-logo.png",
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
      <body className="min-h-screen flex flex-col bg-[#111827] text-white">
        {children}
      </body>
    </html>
  );
}
