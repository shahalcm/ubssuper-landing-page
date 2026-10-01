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
  title: "UBS | One Ecosystem. Four Powerful Apps.",
  description:
    "Explore the UBS ecosystem — UBSSuper, UBS Super Taxi, UBS Partner and UBS Delivery. Connect customers, businesses, taxi operators and delivery partners on one platform.",
  keywords: [
    "UBS",
    "UBS Ecosystem",
    "UBSSuper",
    "UBS Super Taxi",
    "UBS Partner",
    "UBS Delivery",
    "super app",
    "taxi booking app",
    "ride booking",
    "merchant app",
    "delivery partner app",
    "courier app",
    "food delivery",
    "grocery delivery",
    "hotel booking",
    "logistics",
    "doctor booking",
    "marketplace",
    "appliances",
  ],
  authors: [{ name: "UBS" }],
  creator: "UBS",
  publisher: "UBS",
  metadataBase: new URL("https://ubssuper.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UBS | One Ecosystem. Four Powerful Apps.",
    description:
      "Explore the UBS ecosystem — UBSSuper, UBS Super Taxi, UBS Partner and UBS Delivery.",
    url: "https://ubssuper.com",
    siteName: "UBS Ecosystem",
    images: [
      {
        url: "/logos/ubssuper-logo.png",
        width: 1024,
        height: 1024,
        alt: "UBSSuper Official Logo",
      },
      {
        url: "/logos/ubs-super-taxi-logo.png",
        width: 1024,
        height: 1024,
        alt: "UBS Super Taxi Official Logo",
      },
      {
        url: "/logos/ubs-partner-logo.png",
        width: 512,
        height: 512,
        alt: "UBS Partner Official Logo",
      },
      {
        url: "/logos/ubs-delivery-logo.png",
        width: 512,
        height: 512,
        alt: "UBS Delivery Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBS | One Ecosystem. Four Powerful Apps.",
    description:
      "Explore the UBS ecosystem — UBSSuper, UBS Super Taxi, UBS Partner and UBS Delivery.",
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
      <body className="min-h-screen flex flex-col bg-[#111827] text-white">
        {children}
      </body>
    </html>
  );
}
