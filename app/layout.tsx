import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogicWare Tech | AI Automations, ERP Solutions & Custom Web Applications",
  description: "LogicWare Tech is a premier IT firm specializing in business workflow automations, custom AI integrations, CRM/ERP solutions, and robust web/mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${playfair.variable} h-full antialiased light`}
      style={{ colorScheme: 'light' }}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#111111] selection:bg-[#0B2447] selection:text-white relative">
        <SmoothScrolling>
          {/* Clean Corporate Background */}
          <div className="fixed inset-0 pointer-events-none -z-10 bg-white" />
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 flex flex-col relative z-0">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
