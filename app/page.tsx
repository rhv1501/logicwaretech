"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Robot, Database, Desktop, CheckCircle, Users, ChartLineUp, ChartBar, XCircle, ShoppingCart, Factory, Heartbeat, Bank, Storefront, Timer, DeviceMobile, Code, CaretDown, TrendUp, Clock, Infinity, ShieldCheck, LockKey, GlobeHemisphereWest, Key, FileText, MagnifyingGlass, RocketLaunch, Plug } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ARCHITECTURES = [
  {
    id: "ai",
    title: "AI Agentic Systems",
    desc: "Deploy autonomous AI workers designed to reason, decide, and execute complex tasks 24/7 without human intervention.",
    icon: <Robot weight="fill" size={28} />,
    color: "bg-pastel-blue text-[#4F46E5]",
    image: "/images/services/ai.png"
  },
  {
    id: "erp",
    title: "ERP & CRM Workflows",
    desc: "Automated pipelines moving leads from capture to close with zero friction. Scalable databases and operational flows.",
    icon: <Database weight="fill" size={28} />,
    color: "bg-pastel-purple text-[#9333EA]",
    image: "/images/services/erp.png"
  },
  {
    id: "web",
    title: "Web Applications",
    desc: "High-performance, scalable web applications built for enterprise ecosystems with consumer-grade interfaces.",
    icon: <Desktop weight="fill" size={28} />,
    color: "bg-pastel-mint text-[#059669]",
    image: "/images/services/web.png"
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile applications engineered for seamless user experiences and massive data payloads.",
    icon: <DeviceMobile weight="fill" size={28} />,
    color: "bg-pastel-peach text-[#EA580C]",
    image: "/images/services/mobile.png"
  },
  {
    id: "custom",
    title: "Custom Software",
    desc: "Bespoke operational software tailored exactly to your unique organizational requirements. No off-the-shelf compromises.",
    icon: <Code weight="fill" size={28} />,
    color: "bg-slate-200 text-slate-700",
    image: "/images/services/custom.png"
  }
];

const FAQS = [
  {
    id: "faq1",
    question: "Do we retain ownership of the source code and IP?",
    answer: "Absolutely. Once the project is delivered and finalized, you own 100% of the intellectual property, source code, and custom integrations we built for your organization."
  },
  {
    id: "faq2",
    question: "How do you handle data migration from our legacy systems?",
    answer: "We perform a rigorous architectural audit prior to any migration. We build custom API middlewares and secure data pipelines to extract, transform, and load (ETL) your data into the new ecosystem with zero downtime."
  },
  {
    id: "faq3",
    question: "What is the typical timeline for deploying an automation system?",
    answer: "Timelines vary by complexity. Standard CRM/ERP integrations can take 4-8 weeks, while custom AI agentic systems or full web platforms typically range from 3-6 months. We operate on strict, agreed-upon milestones."
  },
  {
    id: "faq4",
    question: "Do you offer post-deployment support and maintenance?",
    answer: "Yes. Our systems are built to run autonomously, but we offer ongoing retainer packages for scaling the architecture, adding new features, and providing priority technical support."
  }
];

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("ai");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full text-slate-800 overflow-x-hidden font-sans">
      
      {/* 1. HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pastel-blue blur-[120px] rounded-full opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pastel-purple blur-[100px] rounded-full opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4 py-1.5 bg-white rounded-full border border-slate-100 flex items-center gap-2 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Operational Velocity</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Innovate. Automate. <span className="text-gradient-corporate">Elevate.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg"
            >
              We engineer scalable web platforms, AI agent workflows, and deep ERP integrations that eliminate manual bottlenecks and drive measurable ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/services" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-pastel-soft">
                Explore Solutions <ArrowRight weight="bold" />
              </Link>
              <Link href="/contact" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center text-center">
                Book a Strategy Call
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px]"
          >
            <div className="absolute inset-0 glass-card rounded-[2rem] p-4 shadow-pastel-float border border-white rotate-2 transform-gpu transition-transform hover:rotate-0 duration-500">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-slate-50">
                <Image 
                  src="/hero.jpeg" 
                  alt="Enterprise AI and ERP Solutions Dashboard" 
                  fill 
                  className="object-cover object-center opacity-90"
                  priority
                />
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-12 h-12 rounded-full bg-pastel-mint flex items-center justify-center text-[#059669]">
                    <ChartLineUp weight="fill" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">System Uptime</p>
                    <p className="text-xl font-bold text-slate-900">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE OLD WAY VS THE LOGICWARE WAY */}
      <section className="w-full py-24 bg-slate-50 relative border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Paradigm Shift</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Stop throwing humans at software problems.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h4 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
                <XCircle weight="fill" className="text-red-400" size={32} /> The Old Way
              </h4>
              <ul className="flex flex-col gap-6">
                {["Human team doing repetitive data entry.", "Siloed CRMs that don't talk to ERPs.", "Hiring more people to scale operations.", "Generic templates that break under load."].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span className="text-lg text-slate-500 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-10 border border-primary/20 shadow-pastel-soft relative overflow-hidden ring-1 ring-primary/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-pastel-blue rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <CheckCircle weight="fill" className="text-primary" size={32} /> The LogicWare Way
              </h4>
              <ul className="flex flex-col gap-6 relative z-10">
                {["AI Agents routing and answering queries 24/7.", "Unified brain connecting all your platforms.", "Scaling via autonomous systems, not payroll.", "Custom architecture built for absolute leverage."].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-glow-primary" />
                    <span className="text-lg text-slate-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPANDABLE SERVICES ACCORDION */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-[800px] mx-auto px-6 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Architectures</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">The foundation of operational velocity.</h3>
          </div>

          <div className="flex flex-col gap-4">
            {ARCHITECTURES.map((arch) => (
              <div 
                key={arch.id} 
                onClick={() => setOpenAccordion(openAccordion === arch.id ? null : arch.id)}
                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden cursor-pointer hover:border-slate-300 transition-colors"
              >
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${arch.color}`}>
                      {arch.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900">{arch.title}</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: openAccordion === arch.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-slate-400 border border-slate-100"
                  >
                    <CaretDown weight="bold" size={20} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openAccordion === arch.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 md:ml-[80px]">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <p className="text-slate-600 text-lg leading-relaxed flex-1">{arch.desc}</p>
                          <div className="w-full md:w-1/3 aspect-video relative rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm mt-4 md:mt-0">
                             <Image src={arch.image} alt={arch.title} fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Link href="/services" className="bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-700 px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-sm">
              View Detailed Architectures <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SECTORS */}
      <section className="w-full py-24 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Domain Expertise</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Built for complex sectors.</h3>
              <p className="text-lg text-slate-600">We engineer custom pipelines that respect the strict regulatory and operational demands of your specific sector.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "E-Commerce", desc: "Automated inventory sync & multi-channel logistics routing.", icon: <ShoppingCart weight="fill" size={32} />, color: "bg-pastel-blue", textColor: "text-[#4F46E5]" },
              { title: "Manufacturing", desc: "ERP integrations connecting shop floor data to ledgers.", icon: <Factory weight="fill" size={32} />, color: "bg-pastel-purple", textColor: "text-[#9333EA]" },
              { title: "Healthcare", desc: "HIPAA-compliant data processing and patient routing.", icon: <Heartbeat weight="fill" size={32} />, color: "bg-pastel-mint", textColor: "text-[#059669]" },
              { title: "Finance", desc: "Real-time ledger reconciliation and risk-assessment pipelines.", icon: <Bank weight="fill" size={32} />, color: "bg-pastel-peach", textColor: "text-[#EA580C]" },
            ].map((sector, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-300 transition-colors flex flex-col group shadow-sm">
                <div className={`w-16 h-16 rounded-2xl ${sector.color} ${sector.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AGNOSTIC INTEGRATION (TECH STACK) */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Agnostic Infrastructure</h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">We integrate with your existing ecosystem.</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            We don't force you into proprietary boxes. We are fully capable of architecting solutions using the tools, platforms, and databases that already align with your organization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["OpenAI", "Next.js", "Odoo ERP", "HubSpot", "Salesforce", "AWS", "Stripe", "Vercel", "Tailwind CSS", "React Native", "PostgreSQL", "Node.js"].map((tech, i) => (
              <div key={i} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-slate-700 font-bold flex items-center gap-2 shadow-sm">
                <Plug weight="bold" className="text-primary" /> {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU CAN ACHIEVE (FACTS/METRICS) */}
      <section className="w-full py-24 bg-slate-50 relative border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">The Automation Advantage</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">What your enterprise can achieve.</h3>
            <p className="text-lg text-slate-600 mt-4">By transitioning from human-reliant data entry to autonomous architectures, organizations unlock exponential scaling capabilities without increasing headcount.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-pastel-float transition-shadow">
               <div className="w-20 h-20 rounded-full bg-pastel-mint text-[#059669] flex items-center justify-center mb-6">
                 <TrendUp weight="bold" size={40} />
               </div>
               <h4 className="text-5xl font-bold text-slate-900 mb-4">80%</h4>
               <p className="text-lg font-bold text-slate-800 mb-2">Reduction in Manual Entry</p>
               <p className="text-slate-500">Free your team from repetitive tasks by letting API bridges and AI agents handle data routing.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-pastel-float transition-shadow">
               <div className="w-20 h-20 rounded-full bg-pastel-blue text-[#4F46E5] flex items-center justify-center mb-6">
                 <Clock weight="bold" size={40} />
               </div>
               <h4 className="text-5xl font-bold text-slate-900 mb-4">24/7</h4>
               <p className="text-lg font-bold text-slate-800 mb-2">Autonomous Operations</p>
               <p className="text-slate-500">Your systems never sleep. Process orders, answer queries, and sync databases around the clock.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-pastel-float transition-shadow">
               <div className="w-20 h-20 rounded-full bg-pastel-purple text-[#9333EA] flex items-center justify-center mb-6">
                 <Infinity weight="bold" size={40} />
               </div>
               <h4 className="text-5xl font-bold text-slate-900 mb-4">100%</h4>
               <p className="text-lg font-bold text-slate-800 mb-2">Frictionless Scalability</p>
               <p className="text-slate-500">Whether you add 10 or 10,000 users, properly engineered architectures do not break under load.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY (3-STEP PROCESS) */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Methodology</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">How we execute precision architecture.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 relative">
              <span className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0 pointer-events-none select-none">01</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pastel-blue text-[#4F46E5] flex items-center justify-center mb-6">
                  <MagnifyingGlass weight="bold" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Architectural Audit</h4>
                <p className="text-slate-600 leading-relaxed">We map your existing data flows, identify critical operational bottlenecks, and design a custom automation roadmap.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 relative">
              <span className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0 pointer-events-none select-none">02</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pastel-purple text-[#9333EA] flex items-center justify-center mb-6">
                  <Code weight="bold" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Intelligent Build</h4>
                <p className="text-slate-600 leading-relaxed">We deploy our elite engineering stack to wire your tools together, write custom middleware, and integrate AI models.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 relative">
              <span className="text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0 pointer-events-none select-none">03</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pastel-mint text-[#059669] flex items-center justify-center mb-6">
                  <RocketLaunch weight="bold" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Autonomous Launch</h4>
                <p className="text-slate-600 leading-relaxed">Your new digital ecosystem is deployed securely. We monitor the systems as they take over routine operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECURITY & COMPLIANCE */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary blur-[150px] rounded-full opacity-20 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-pastel-blue mb-4">Audit-Ready Frameworks</h2>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Security & Compliance.</h3>
              <p className="text-lg text-slate-300">We systematically design, implement, and audit your Information Security Management System (ISMS) from the ground up, guaranteeing enterprise-level trust.</p>
            </div>
            <Link href="/compliance" className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl border border-white/20 flex items-center gap-3 shrink-0">
              <span className="font-bold text-sm tracking-wider uppercase text-white">View Full Compliance Framework</span>
              <ArrowRight weight="bold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
               <ShieldCheck weight="fill" className="text-pastel-blue shrink-0" size={32} />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-white">ISO 27001 Readiness</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">End-to-end ISO/IEC 27001 implementation, gap assessment, and pre-certification auditing led by a certified Lead Auditor.</p>
               </div>
             </div>
             <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
               <LockKey weight="fill" className="text-pastel-purple shrink-0" size={32} />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-white">DPDPA & Data Privacy</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">Map data flows, build robust consent architectures, and establish the mandatory technical measures to safeguard Principal rights.</p>
               </div>
             </div>
             <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
               <ChartBar weight="fill" className="text-pastel-mint shrink-0" size={32} />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-white">IT Risk Management</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">Independent risk profiling and quantitative analysis translating technical vulnerabilities into structured business risk registers.</p>
               </div>
             </div>
             <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
               <CheckCircle weight="fill" className="text-pastel-peach shrink-0" size={32} />
               <div>
                 <h4 className="text-xl font-bold mb-2 text-white">Controls Assurance</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">Rigorously test the design (D&E) and operational effectiveness (O&E) of your defenses to confidently assure enterprise clients.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 9. ENGAGEMENT MODELS */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Engagement Models</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Flexible, transparent, and scalable.</h3>
            <p className="text-lg text-slate-600">Tailored frameworks tailored to your specific organizational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Dedicated Team", desc: "Scale your delivery capacity instantly with a dedicated pod of architects and engineers managed directly by you.", icon: <Users weight="fill" size={32} />, color: "bg-pastel-blue", textColor: "text-[#4F46E5]", points: ["Monthly billing", "Direct control"] },
              { title: "Fixed Price", desc: "Best for well-defined scopes. We take full ownership of delivery within a strictly agreed budget and timeline.", icon: <Storefront weight="fill" size={32} />, color: "bg-pastel-purple", textColor: "text-[#9333EA]", points: ["Milestone-based", "Zero budget overruns"] },
              { title: "Time & Material", desc: "Ideal for evolving requirements. Pay strictly for the hours logged by our specialists as priorities shift.", icon: <Timer weight="fill" size={32} />, color: "bg-pastel-mint", textColor: "text-[#059669]", points: ["Absolute flexibility", "Agile execution"] }
            ].map((model, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col shadow-sm">
                <div className={`w-16 h-16 rounded-2xl ${model.color} ${model.textColor} flex items-center justify-center mb-6`}>
                  {model.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8">{model.desc}</p>
                <ul className="mt-auto flex flex-col gap-3">
                  {model.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold">
                      <CheckCircle weight="fill" className="text-primary" size={20} /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ENTERPRISE FAQ */}
      <section className="w-full py-24 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-[800px] mx-auto px-6 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">F.A.Q</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Common Questions</h3>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div 
                key={faq.id} 
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FileText weight="fill" className="text-primary shrink-0" size={24} />
                    <h4 className="text-lg font-bold text-slate-900">{faq.question}</h4>
                  </div>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-400 shrink-0"
                  >
                    <CaretDown weight="bold" size={20} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 ml-[40px] border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed mt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="w-full py-32 bg-white relative flex flex-col items-center text-center px-6 border-t border-slate-100">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Deploy Systems.</h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-10">
          Ready to upgrade your operational infrastructure? Let's build your competitive advantage.
        </p>
        <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-pastel-soft">
          Request Architecture Review <ArrowRight weight="bold" />
        </Link>
      </section>

    </div>
  );
}
