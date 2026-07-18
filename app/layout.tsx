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
  metadataBase: new URL('https://logicwaretech.com'),
  title: "LogicWare Tech | AI Automations, ERP Solutions & Custom Web Applications",
  description: "LogicWare Tech is a premier IT firm specializing in business workflow automations, custom AI integrations, CRM/ERP solutions, and robust web/mobile applications.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "LogicWare Tech | AI Automations, ERP Solutions & Custom Web Applications",
    description: "LogicWare Tech is a premier IT firm specializing in business workflow automations, custom AI integrations, CRM/ERP solutions, and robust web/mobile applications.",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "LogicWare Tech Hero",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicWare Tech | AI Automations, ERP Solutions & Custom Web Applications",
    description: "LogicWare Tech is a premier IT firm specializing in business workflow automations, custom AI integrations, CRM/ERP solutions, and robust web/mobile applications.",
    images: ["/hero.jpeg"],
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
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${playfair.variable} h-full antialiased light`}
      style={{ colorScheme: 'light' }}
    >
      <body className="min-h-full flex flex-col text-[#0a2540] selection:bg-[#1a8d5f] selection:text-white relative font-sans">
        <SmoothScrolling>
          {/* Clean Corporate Background */}
          <div className="fixed inset-0 pointer-events-none -z-10 bg-transparent" />
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
