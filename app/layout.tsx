import type { Metadata } from "next";
import { Inter, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import "./brandicom-overrides.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollChrome from "@/components/ScrollChrome";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandicom.com"),
  title: "Brandicom — Social Media Growth Agency",
  description:
    "Brandicom helps brands grow through content, social media management, and paid media that drive results.",
  openGraph: {
    title: "Brandicom — Social Media Growth Agency",
    description:
      "Brandicom helps brands grow through content, social media management, and paid media that drive results.",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
      },
      {
        url: "/logo.png",
        sizes: "48x48",
      },
    ],
    apple: [
      {
        url: "/logo.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="virallhub.webflow.io"
      data-wf-page="69e08be4846b1167331e54d3"
      data-wf-site="69e08be4846b1167331e54ef"
      data-wf-status="1"
      className={`${inter.variable} ${dmSans.variable} ${manrope.variable} w-mod-js w-mod-ix3`}
    >
      <body className="body">
        <SmoothScroll>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <ScrollChrome />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
