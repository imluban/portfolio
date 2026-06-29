import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export const metadata = {
  title: "Luban Noor",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <BackgroundGlow />

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}