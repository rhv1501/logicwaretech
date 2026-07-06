"use client";

import { motion } from "framer-motion";
import { CheckCircle, Robot, Database, Desktop, DeviceMobile, Code, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const ARCHITECTURES = [
  {
    id: "ai-systems",
    title: "AI Agentic Systems",
    desc: "We deploy autonomous AI workers designed to reason, decide, and execute complex tasks 24/7 without human intervention, dramatically reducing operational overhead.",
    icon: <Robot weight="fill" size={40} />,
    color: "bg-pastel-blue",
    textColor: "text-[#4F46E5]",
    deliverables: ["Custom LLM Architecture & Fine-tuning", "Autonomous Task-Execution Agents", "Intelligent Conversational Workflows", "Data Analysis & Reporting Bots"]
  },
  {
    id: "erp-crm",
    title: "ERP & CRM Workflows",
    desc: "Automated pipelines moving leads from capture to close with zero friction. We architect databases and operational flows that scale endlessly.",
    icon: <Database weight="fill" size={40} />,
    color: "bg-pastel-purple",
    textColor: "text-[#9333EA]",
    deliverables: ["Odoo Architecture & Implementation", "HubSpot Ecosystem Automation", "Salesforce Advanced Integrations", "Secure Enterprise Data Migration"]
  },
  {
    id: "web-apps",
    title: "Web Applications",
    desc: "High-performance, scalable web applications built for enterprise ecosystems. We deliver award-winning, consumer-grade interfaces.",
    icon: <Desktop weight="fill" size={40} />,
    color: "bg-pastel-mint",
    textColor: "text-[#059669]",
    deliverables: ["Next.js & React Ecosystems", "Headless Commerce Solutions", "Custom Executive Dashboards", "Scalable SaaS Portals"]
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile applications engineered for seamless user experiences and massive data payloads.",
    icon: <DeviceMobile weight="fill" size={40} />,
    color: "bg-pastel-peach",
    textColor: "text-[#EA580C]",
    deliverables: ["iOS & Android Native Development", "React Native Cross-Platform Apps", "Mobile ERP/CRM Interfaces", "Real-time Data Synchronization"]
  },
  {
    id: "custom-software",
    title: "Custom Software",
    desc: "Bespoke operational software tailored exactly to your unique organizational requirements. No off-the-shelf compromises.",
    icon: <Code weight="fill" size={40} />,
    color: "bg-slate-200",
    textColor: "text-slate-700",
    deliverables: ["Legacy System Modernization", "Custom API Middleware", "Logistics & Routing Algorithms", "Internal Tooling & Admin Panels"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800 overflow-hidden font-sans">
      
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Architectures</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Comprehensive <br/>
            <span className="text-gradient-corporate">Digital Solutions.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            We don't sell hours. We engineer leverage. Explore the core architectures we deploy to make your organization untouchable.
          </motion.p>
        </div>
      </section>

      {/* 2. THE SERVICES ARCHITECTURES */}
      <section className="w-full py-24 bg-slate-50 relative">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-16">
          
          {ARCHITECTURES.map((arch, idx) => (
            <motion.div 
              key={arch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Left: Icon & Title */}
              <div className="w-full md:w-1/3 flex flex-col items-start shrink-0">
                <div className={`w-20 h-20 rounded-[1.5rem] ${arch.color} ${arch.textColor} flex items-center justify-center mb-6`}>
                  {arch.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">{arch.title}</h2>
              </div>

              {/* Right: Desc & Deliverables */}
              <div className="w-full md:w-2/3 flex flex-col gap-6">
                <p className="text-lg text-slate-600 leading-relaxed">{arch.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Key Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {arch.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle weight="fill" className={arch.textColor} size={20} />
                        <span className="text-slate-800 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      
      {/* CTA */}
      <section className="w-full py-24 bg-white text-center px-6 border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Deploy Systems.</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">Ready to upgrade your operational infrastructure? Let's build your competitive advantage.</p>
        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 flex mx-auto w-max items-center justify-center gap-2 shadow-pastel-soft">
          Contact Us <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
