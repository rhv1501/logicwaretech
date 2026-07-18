import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise IT Services | LogicWare Tech",
  description: "Discover our comprehensive digital capabilities: Business Process Automation, Custom Enterprise Software, AI Integrations, Web/Mobile Apps, and Cyber Security.",
  openGraph: {
    title: "Enterprise IT Services | LogicWare Tech",
    description: "Discover our comprehensive digital capabilities: Process Automation, Custom Enterprise Software, and AI Integrations.",
    url: "https://logicwaretech.com/services",
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
