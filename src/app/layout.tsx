import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "Ikechukwu Amajuoyi — Agripreneur & Food Safety Advocate",
  description:
    "Co-founder of KR Foods. Building agro-processing systems that feed Africa safely. Nigerian agripreneur, food safety advocate, and African Food Changemaker.",
  keywords: ["Ikechukwu Amajuoyi", "KR Foods", "palm oil Nigeria", "food safety", "agripreneur"],
  openGraph: {
    title: "Ikechukwu Amajuoyi — Agripreneur & Food Safety Advocate",
    description: "Building the systems that feed Africa right.",
    url: "https://ikechukwuamajuoyi.com",
    siteName: "Ikechukwu Amajuoyi",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
