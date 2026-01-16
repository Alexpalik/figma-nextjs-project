import type { Metadata } from "next";
import { Kode_Mono, Roboto_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import ManifestSection from "@/components/section2";
import TechnicalCoreSection from "@/components/section3";
import SelectivitySection from "@/components/section4";

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Core36",
  description: "Core36",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodeMono.variable} ${robotoMono.variable} ${notoSans.variable} antialiased`}
      >
        {children}
        <ManifestSection />
        <TechnicalCoreSection />
        <SelectivitySection />
      </body>
    </html>
  );
}
