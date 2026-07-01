"use client";

import { motion } from "framer-motion";
import { ArrowRight, Robot, Database, Cpu, AppWindow, Lightning, DeviceMobile, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SERVICES = [
  {
    icon: <Lightning weight="duotone" size={48} className="text-primary" />,
    title: "AI Agentic Systems",
    desc: "We deploy autonomous AI workers designed to reason, decide, and execute complex tasks 24/7 without human intervention, dramatically reducing operational overhead.",
    deliverables: ["Custom LLM Integration", "Autonomous Agents", "Conversational Workflows", "Data Analysis Bots"],
  },
  {
    icon: <Database weight="duotone" size={48} className="text-primary" />,
    title: "ERP & CRM Workflows",
    desc: "Automated pipelines moving leads from capture to close with zero friction. We architect databases and operational flows that scale endlessly.",
    deliverables: ["Odoo Architecture", "HubSpot Automation", "Salesforce Integrations", "Data Migration"],
  },
  {
    icon: <AppWindow weight="duotone" size={48} className="text-primary" />,
    title: "Web Applications",
    desc: "High-performance, scalable web applications built for enterprise ecosystems. We deliver award-winning, consumer-grade interfaces.",
    deliverables: ["Next.js React Ecosystems", "Headless Commerce", "Custom Dashboards", "SaaS Portals"],
  },
  {
    icon: <DeviceMobile weight="duotone" size={48} className="text-primary" />,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile applications engineered for seamless user experiences and massive data payloads.",
    deliverables: ["React Native", "iOS & Android", "API Driven Apps", "Enterprise Mobility"],
  },
  {
    icon: <Cpu weight="duotone" size={48} className="text-primary" />,
    title: "Custom Software",
    desc: "Bespoke operational software tailored exactly to your unique organizational requirements. No off-the-shelf compromises.",
    deliverables: ["Manufacturing Automations", "Hardware Integration", "Legacy System Modernization", "API Development"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white text-text-main selection:bg-secondary selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-20 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-text-main/60">Our Services</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
          >
            Comprehensive Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-main/70 font-medium leading-relaxed max-w-2xl mt-4"
          >
            We don't sell hours. We engineer leverage. Explore the core architectures we deploy to make your organization untouchable.
          </motion.p>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="w-full bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-12">
          {SERVICES.map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              key={i} 
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-10 lg:p-14 rounded-[2rem] bg-[#F0F6F9] border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group hover:bg-white"
            >
              <div className="lg:w-1/4 flex flex-col gap-6 shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white border border-primary/10 flex items-center justify-center group-hover:bg-primary/5 transition-colors shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="lg:w-3/4 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-main">{service.title}</h2>
                <p className="text-lg md:text-xl text-text-main/70 max-w-3xl leading-relaxed">{service.desc}</p>
                
                <div className="pt-6 border-t border-primary/10 mt-2">
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-text-main/50 mb-4">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-primary" weight="fill" />
                        <span className="text-text-main/80 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="w-full py-32 bg-white flex justify-center border-t border-primary/10">
        <div className="w-full max-w-5xl mx-6 bg-text-main rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 relative z-10">
            Deploy Systems.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mb-12 relative z-10">
            Ready to upgrade your operational infrastructure? Let's build your competitive advantage.
          </p>
          
          <Link href="/contact" className="relative z-10 px-10 py-5 bg-white text-text-main rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3 group">
            <span>Contact Us</span>
            <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
