import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import { Analytics } from "@vercel/analytics/react";
import Spotlight from "@/components/ui/Spotlight";

export const metadata = {
  metadataBase: new URL("https://lubannoor.com"),

  title: {
    default: "Luban Noor",
    template: "%s | Luban Noor",
  },

  description:
  "Entrepreneur and Software Developer building scalable AI-powered web and mobile applications.",

  keywords: [
    "Luban Noor",
    "Software Developer",
    "Entrepreneur",
    "AI Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Mobile Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Portfolio",
    "Projects",
    "Open Source",
  ],

  openGraph: {
    title: "Luban Noor",
    description:
     "Entrepreneur and Software Developer building scalable AI-powered web and mobile applications.",
    url: "https://lubannoor.com",
    siteName: "Luban Noor",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luban Noor",
    description:
  "Entrepreneur and Software Developer building scalable AI-powered web and mobile applications.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <PageLoader />

        <BackgroundGlow />

        <Navbar />

        <Spotlight />

        {children}

        <Analytics />

        <Footer />

      </body>
    </html>
  );
}