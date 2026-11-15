import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tramco.vercel.app"),
  title: "TRAMCO | Houston Real Estate and Property Management",
  description:
    "Texas Realty and Management Company has served the greater Houston area with real estate and property management expertise since 1979.",
  openGraph: {
    title: "TRAMCO | Houston Real Estate and Property Management",
    description: "Consistency. Expertise. Longevity.",
    images: ["/images/enhanced/hero-modern-1.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
