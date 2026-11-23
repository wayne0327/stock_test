import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParallaxBlobs from "./components/ParallaxBlobs";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "基本面選股 — 股票基本面分析指南",
  description: "從財報數字看懂企業體質，建立屬於你的選股邏輯",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSansTC.variable} ${notoSerifTC.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="relative flex flex-1 flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
          <ParallaxBlobs />
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
