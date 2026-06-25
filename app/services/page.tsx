"use client";

import { motion } from "framer-motion";
import { ArrowRight, Robot, Database, Cpu, AppWindow, Lightning, DeviceMobile } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    icon: <Lightning weight="duotone" size={64} className="text-primary" />,
    title: "AI Agentic Systems",
    desc: "Autonomous AI workers deployed to reason, decide, and execute complex tasks 24/7 without human intervention.",
    deliverables: ["Custom LLM Integration", "Autonomous Agents", "Conversational Workflows"],
  },
  {
    num: "02",
    icon: <Database weight="duotone" size={64} className="text-[#a855f7]" />,
    title: "ERP & CRM Workflows",
    desc: "Automated pipelines moving leads from capture to close with zero friction. We architect databases that scale endlessly.",
    deliverables: ["Odoo Architecture", "HubSpot Automation", "Salesforce Integrations"],
  },
  {
    num: "03",
    icon: <AppWindow weight="duotone" size={64} className="text-[#38C7D2]" />,
    title: "Web Applications",
    desc: "High-performance, scalable web apps built for enterprise ecosystems. Award-winning, consumer-grade interfaces.",
    deliverables: ["Next.js React Ecosystems", "Headless Commerce", "Custom Dashboards"],
  },
  {
    num: "04",
    icon: <DeviceMobile weight="duotone" size={64} className="text-primary" />,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps designed for seamless user experiences and massive data payloads.",
    deliverables: ["React Native", "iOS & Android", "API Driven Apps"],
  },
  {
    num: "05",
    icon: <Cpu weight="duotone" size={64} className="text-[#a855f7]" />,
    title: "Custom Software",
    desc: "Bespoke operational software tailored exactly to your unique organizational quirks. No off-the-shelf compromises.",
    deliverables: ["Manufacturing Automations", "Hardware Integration", "Legacy System Ports"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white text-text-main selection:bg-secondary selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-end px-6 pb-24 pt-40 bg-[#141624] text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest font-semibold">Our Capabilities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-8">Arsenal.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-2xl ml-auto mt-12 md:mt-0"
          >
            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed border-l-2 border-primary/40 pl-6">
              We don't sell hours. We engineer leverage. Here are the core architectures we deploy to make your organization untouchable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="w-full bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-32">
          {SERVICES.map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={i} 
              className="flex flex-col lg:flex-row gap-12 lg:gap-24 group"
            >
              <div className="lg:w-1/3 flex flex-col gap-8">
                <span className="text-3xl font-mono text-primary/30 group-hover:text-primary transition-colors duration-500">{service.num}</span>
                <div className="w-24 h-24 rounded-[2rem] bg-[#F0F6F9] flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                  {service.icon}
                </div>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-8 justify-center border-t border-text-main/10 pt-12 lg:pt-0 lg:border-t-0">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-main leading-tight group-hover:text-primary transition-colors duration-500">{service.title}</h2>
                <p className="text-xl md:text-2xl text-text-main/60 max-w-2xl leading-relaxed font-medium">{service.desc}</p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  {service.deliverables.map((item, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-white border border-primary/20 text-text-main/80 font-semibold text-sm tracking-widest uppercase shadow-sm group-hover:border-primary/50 group-hover:bg-[#F0F6F9] transition-colors duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="w-full py-40 bg-white flex justify-center px-4 border-t border-primary/10">
        <div className="w-full max-w-6xl bg-[#F0F6F9] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center border border-primary/10 shadow-xl overflow-hidden relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-secondary/10 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <h2 className="text-[10vw] md:text-[8rem] font-bold tracking-tighter text-text-main leading-[0.8] mb-8 uppercase relative z-10">
            Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-6">Systems.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-main/60 max-w-xl mb-12 relative z-10 font-medium">
            Ready to upgrade your operational infrastructure? Let's build your competitive advantage.
          </p>
          
          <Link href="/contact" className="relative z-10 px-10 py-6 bg-text-main text-white rounded-2xl font-bold text-xl md:text-2xl uppercase tracking-widest hover:bg-primary transition-colors duration-500 shadow-2xl shadow-primary/20 flex items-center gap-4 group/btn">
            <span>Contact Us</span>
            <ArrowRight weight="bold" className="group-hover/btn:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
