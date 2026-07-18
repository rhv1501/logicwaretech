import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LogicWare Tech",
  description: "Get in touch with LogicWare Tech for enterprise IT solutions, automation audits, and custom software development. Request a consultation today.",
  openGraph: {
    title: "Contact Us | LogicWare Tech",
    description: "Get in touch with LogicWare Tech for enterprise IT solutions, automation audits, and custom software development.",
    url: "https://logicwaretech.com/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
