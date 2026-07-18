"use client";

import { motion } from "framer-motion";
import { CheckCircle, Robot, Database, Desktop, DeviceMobile, Code, ArrowRight, ArrowsMerge, ShieldCheck, Stack, Bank } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

const ARCHITECTURES = [
  {
    id: "dt",
    title: "Business Process Automations",
    desc: "Modernization, automation, and process optimization to streamline your business operations.",
    icon: <ArrowsMerge weight="fill" size={40} />,
    color: "bg-pastel-blue",
    textColor: "text-[#4F46E5]",
    image: "/images/services/dt.png",
    deliverables: ["Workflow Modernization", "Process Automation", "System Integrations", "Operational Efficiency"]
  },
  {
    id: "es",
    title: "Enterprise Solutions",
    desc: "Custom ERP, CRM, HRMS platforms, portals, mobile apps, and custom software tailored to your needs.",
    icon: <Database weight="fill" size={40} />,
    color: "bg-pastel-purple",
    textColor: "text-[#9333EA]",
    image: "/images/services/es.png",
    deliverables: ["Custom ERPs", "CRM Implementations", "HRMS Platforms", "Enterprise Portals"]
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    desc: "AI integrations, intelligent automation, and custom LLM routing designed for 24/7 autonomous operations.",
    icon: <Robot weight="fill" size={40} />,
    color: "bg-pastel-mint",
    textColor: "text-[#059669]",
    image: "/images/services/ai.png",
    deliverables: ["Custom AI Chatbots", "Automated Task Helpers", "Smart Data Organization", "24/7 Support Bots"]
  },
  {
    id: "is",
    title: "Information Security",
    desc: "ISO 27001 consulting and ISMS implementation built with a secure-by-design philosophy.",
    icon: <ShieldCheck weight="fill" size={40} />,
    color: "bg-pastel-peach",
    textColor: "text-[#EA580C]",
    image: "/images/services/is.png",
    deliverables: ["ISO 27001 Consulting", "ISMS Implementation", "Security Architecture", "Vulnerability Management"]
  },
  {
    id: "comp",
    title: "Compliance",
    desc: "End-to-end DPDPA implementation, consent management, and data privacy governance.",
    icon: <Stack weight="fill" size={40} />,
    color: "bg-slate-200",
    textColor: "text-slate-700",
    image: "/images/services/comp.png",
    deliverables: ["DPDPA Implementation", "Consent Management", "Data Privacy Governance", "Compliance Audits"]
  },
  {
    id: "gr",
    title: "Governance & Risk",
    desc: "Comprehensive risk assessments and governance frameworks for enterprise assurance.",
    icon: <Bank weight="fill" size={40} />,
    color: "bg-pastel-blue",
    textColor: "text-[#4F46E5]",
    image: "/images/services/gr.png",
    deliverables: ["Risk Assessments", "Governance Frameworks", "Enterprise Assurance", "Policy Development"]
  },
  {
    id: "web",
    title: "Web Applications",
    desc: "Fast, beautiful, and highly-optimized websites. We use modern frameworks to deliver sub-second load times.",
    icon: <Desktop weight="fill" size={40} />,
    color: "bg-pastel-purple",
    textColor: "text-[#9333EA]",
    image: "/images/services/web.png",
    deliverables: ["Fast Loading Websites", "E-Commerce Stores", "Custom Dashboards", "Customer Portals"]
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    desc: "Build your own branded mobile app for a premium experience right on their phones. Native performance with elegant UI.",
    icon: <DeviceMobile weight="fill" size={40} />,
    color: "bg-pastel-mint",
    textColor: "text-[#059669]",
    image: "/images/services/mobile.png",
    deliverables: ["iPhone App Development", "Android App Development", "Mobile Payment Setup", "Real-Time Updates"]
  },
  {
    id: "custom",
    title: "Custom Software",
    desc: "Exact solutions for unique business needs. No cookie-cutter software. From logic algorithms to supply chain tools.",
    icon: <Code weight="fill" size={40} />,
    color: "bg-pastel-peach",
    textColor: "text-[#EA580C]",
    image: "/images/services/custom.png",
    deliverables: ["Updating Legacy Systems", "API Integrations", "Custom Internal Tools", "Automating Daily Tasks"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-slate-800 overflow-hidden font-sans">
      
      {/* 1. HERO */}
      <section className="relative w-full pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center border-b border-slate-100 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-mint blur-[120px] rounded-full opacity-30 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-1.5 bg-white rounded-full border border-slate-100 inline-flex mx-auto items-center gap-2 mb-4 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Our Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Everything You Need <br/>
            <span className="text-gradient-corporate">To Grow.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            We build software that actually saves you time and makes you money. Explore our core services below to see how we can help your business.
          </motion.p>
        </div>
      </section>

      {/* 2. THE SERVICES ARCHITECTURES */}
      <section className="w-full py-24 bg-transparent relative">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-16">
          
          {ARCHITECTURES.map((arch, idx) => (
            <motion.div 
              key={arch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/services/${arch.id}`}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row overflow-hidden group hover:shadow-pastel-float hover:-translate-y-1 transition-all duration-500 block"
              >
                {/* Image Side - Alternating */}
                <div className={`w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] bg-slate-100 overflow-hidden ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image 
                    src={arch.image}
                    alt={arch.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center bg-white">
                  <div className={`w-16 h-16 rounded-2xl ${arch.color} ${arch.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {arch.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">{arch.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{arch.desc}</p>
                  
                  <div className="w-full pt-6 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Key Deliverables</h3>
                    <div className="flex flex-col gap-4">
                      {arch.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle weight="fill" className={`${arch.textColor} shrink-0 mt-1`} size={20} />
                          <span className="text-slate-800 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-10 inline-flex items-center gap-2 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    View full details <ArrowRight weight="bold" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>
      
      {/* CTA */}
      <section className="w-full py-24 bg-transparent text-center px-6 border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Grow?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">Stop struggling with bad software and endless manual tasks. Let's build something great.</p>
        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 flex mx-auto w-max items-center justify-center gap-2 shadow-pastel-soft">
          Contact Us <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
