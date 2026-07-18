import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | LogicWare Tech",
  description: "Learn about LogicWare Tech, our ethos, engineering excellence, and the elite architecture board driving digital transformation for enterprises.",
  openGraph: {
    title: "About Us | LogicWare Tech",
    description: "Learn about LogicWare Tech, our ethos, and the elite architecture board driving digital transformation for enterprises.",
    url: "https://logicwaretech.com/about",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
