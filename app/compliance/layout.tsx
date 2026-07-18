import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Compliance | LogicWare Tech",
  description: "Explore LogicWare Tech's commitment to security and compliance, including ISO 27001 ISMS implementation, DPDPA adherence, and rigorous data privacy governance.",
  openGraph: {
    title: "Security & Compliance | LogicWare Tech",
    description: "Explore LogicWare Tech's commitment to security and compliance, including ISO 27001 ISMS and DPDPA.",
    url: "https://logicwaretech.com/compliance",
  }
};

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
