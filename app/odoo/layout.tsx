import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Odoo ERP Partner | Custom Implementation & Migration | LogicWare Tech",
  description: "LogicWare Tech is an Official Odoo Partner. We customize and implement Odoo ERP for Indian and global enterprises. Compare Odoo vs Tally, Zoho, and SAP. Fast-track your business operations today.",
  openGraph: {
    title: "Official Odoo ERP Partner | LogicWare Tech",
    description: "Replace disconnected software with one unified, customized Odoo ERP. Compare Odoo vs Tally, Zoho, and legacy ERPs. Official Odoo Partner services by LogicWare Tech.",
    url: "https://logicwaretech.com/odoo",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "LogicWare Tech Odoo ERP Partner",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Odoo ERP Partner | LogicWare Tech",
    description: "One single platform to run your entire business. Discover how LogicWare Tech customizes Odoo ERP for your industry.",
    images: ["/hero.jpeg"],
  }
};

export default function OdooLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

