"use client";

import { motion } from "framer-motion";
import { ArrowRight, Robot, Database, Cpu, AppWindow, Lightning, DeviceMobile, CheckCircle, XCircle, Code, TrendUp, ShieldCheck, SlidersHorizontal, Factory, Heartbeat, Bank, ShoppingCart, Quotes, CaretDown, UsersThree, SealCheck, Handshake } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

const CAPABILITIES = [
  { num: "01", title: "Business Process Automation", desc: "Intelligent systems that learn, adapt, and execute operations autonomously.", icon: <Robot weight="duotone" size={32} className="text-primary" /> },
  { num: "02", title: "ERP & CRM Workflows", desc: "Automated pipelines moving leads from capture to close with zero friction.", icon: <Database weight="duotone" size={32} className="text-primary" /> },
  { num: "03", title: "Software Development", desc: "Custom software solutions engineered to eliminate operational bottlenecks.", icon: <Cpu weight="duotone" size={32} className="text-primary" /> },
  { num: "04", title: "Web Applications", desc: "High-performance, scalable web apps built for enterprise ecosystems.", icon: <AppWindow weight="duotone" size={32} className="text-primary" /> },
  { num: "05", title: "Mobile Applications", desc: "Native and cross-platform apps designed for seamless user experiences.", icon: <DeviceMobile weight="duotone" size={32} className="text-primary" /> },
  { num: "06", title: "AI Agentic Systems", desc: "Autonomous AI workers deployed to reason, decide, and execute complex tasks.", icon: <Lightning weight="duotone" size={32} className="text-primary" /> },
];

const METHODOLOGY = [
  { step: "01", title: "Architectural Audit", desc: "We map your data flows and identify critical bottlenecks." },
  { step: "02", title: "Intelligent Build", desc: "We deploy our engineering stack to wire your tools together." },
  { step: "03", title: "Autonomous Launch", desc: "Your new digital ecosystem takes over routine operations." }
];

export default function Home() {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  
  // Basic ROI Calculation Math
  const hourlyRate = 35; 
  const annualManualCost = teamSize * hoursPerWeek * hourlyRate * 52;
  const automatedSavings = annualManualCost * 0.8; // Assume 80% reduction in manual effort
  
  return (
    <div className="flex flex-col w-full bg-[#F0F6F9] text-text-main selection:bg-secondary selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. Hero Section - Corporate Z-Axis Cascade */}
      <section className="relative w-full min-h-[100dvh] flex flex-col items-center pt-32 lg:pt-40 pb-24 px-6 overflow-hidden z-10">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-2 rounded-full px-4 py-1.5 border border-primary/10 bg-white shadow-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-main/70">Enterprise Technology Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter text-text-main leading-[1.05] max-w-5xl"
          >
            Architecting <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main to-text-main/50">Autonomous</span> Enterprises.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-lg md:text-2xl text-text-main/60 max-w-3xl leading-relaxed mt-8 font-medium"
          >
            We engineer scalable web platforms, AI agent workflows, and deep ERP integrations that eliminate manual bottlenecks and drive measurable ROI.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-12"
          >
            {/* Primary Button - Double Bezel / Button-in-Button */}
            <Link href="/contact" className="group relative p-1.5 rounded-full bg-text-main hover:bg-text-main/90 transition-all duration-500 ease-[0.32,0.72,0,1] shadow-2xl shadow-text-main/20 hover:shadow-text-main/40 hover:-translate-y-1">
              <div className="flex items-center gap-4 pl-6 pr-2 py-2">
                <span className="font-semibold text-white text-lg tracking-wide">Book a Strategy Call</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-500">
                  <ArrowRight weight="bold" className="text-white group-hover:text-text-main transition-colors" />
                </div>
              </div>
            </Link>

            <Link href="#capabilities" className="group px-8 py-4 rounded-full border border-text-main/10 bg-white hover:bg-[#F0F6F9] transition-all duration-500 font-semibold text-lg text-text-main shadow-sm hover:shadow-md">
              Explore Solutions
            </Link>
          </motion.div>
        </div>
        
        {/* Z-Axis Cascade Visualizer */}
        <div className="relative w-full max-w-[1200px] mx-auto mt-24 h-[400px] md:h-[500px] perspective-[2000px] z-10">
          
          {/* Main Center Card - Double Bezel */}
          <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-3xl p-2 rounded-[2.5rem] bg-white/40 border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-xl z-30"
          >
            <div className="w-full h-full bg-white rounded-[2rem] p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] border border-black/5 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-black/5 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-text-main/40 uppercase tracking-widest ml-4">Core_Operations.tsx</span>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  System Nominal
                </div>
              </div>
              
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold uppercase tracking-widest text-text-main/40">Automated Pipeline</span>
                    <span className="text-4xl md:text-5xl font-bold text-text-main">2,150 <span className="text-xl text-text-main/40 font-medium">req/sec</span></span>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-sm font-semibold uppercase tracking-widest text-green-500 flex items-center gap-1"><TrendUp weight="bold" /> +99.9%</span>
                    <span className="text-sm font-medium text-text-main/40">Uptime SLA</span>
                  </div>
                </div>
                
                <div className="w-full h-2 bg-[#F0F6F9] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-primary to-[#a855f7]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 150, rotate: -10 }}
            animate={{ opacity: 1, x: -20, y: 80, rotate: -4 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="absolute left-0 md:left-[10%] top-10 w-64 p-1.5 rounded-[2rem] bg-white/30 border border-white/50 shadow-xl backdrop-blur-md z-20 hidden md:block"
          >
            <div className="bg-white/90 rounded-[1.5rem] p-6 border border-black/5 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={20} weight="duotone" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-bold text-text-main">0.00%</span>
                 <span className="text-xs font-semibold text-text-main/50 uppercase tracking-widest">Manual Errors</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 150, rotate: 10 }}
            animate={{ opacity: 1, x: 20, y: 40, rotate: 6 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="absolute right-0 md:right-[5%] top-20 w-72 p-1.5 rounded-[2rem] bg-white/30 border border-white/50 shadow-xl backdrop-blur-md z-40 hidden md:block"
          >
            <div className="bg-text-main rounded-[1.5rem] p-6 border border-white/10 flex flex-col gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Robot size={20} weight="duotone" />
              </div>
              <div className="flex flex-col">
                 <span className="text-lg font-bold text-white">AI Agent Active</span>
                 <span className="text-sm font-medium text-white/50">Processing 152 tickets...</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. About / Metrics */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {[
            { num: "10x", label: "Operational Velocity", sub: "Systems execute instantly, 24/7." },
            { num: "0%", label: "Manual Data Entry", sub: "APIs don't make typos." },
            { num: "∞", label: "Scalability", sub: "Add 10 or 10,000 users. It doesn't break." }
          ].map((metric, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-4 items-center text-center p-8 rounded-3xl bg-white shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <span className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                {metric.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-text-main">{metric.label}</h3>
                <p className="text-text-main/60">{metric.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Capabilities / Services (Bento Grid) */}
      <section id="capabilities" className="w-full py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-tight">
              Enterprise-grade solutions for modern digital infrastructure.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col gap-6 p-8 rounded-3xl bg-[#F0F6F9] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-primary/10 group-hover:bg-primary/5 transition-colors">
                  {cap.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-text-main">{cap.title}</h3>
                  <p className="text-text-main/60 leading-relaxed text-lg">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Industries We Serve */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16 text-center items-center">
           <div className="flex flex-col gap-4 max-w-2xl">
             <span className="text-primary font-semibold tracking-widest uppercase text-sm">Domain Expertise</span>
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
               Built for complex industries.
             </h2>
             <p className="text-lg text-text-main/60 mt-4">We engineer custom pipelines that respect the strict regulatory and operational demands of your specific sector.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
             {[
               { icon: <ShoppingCart size={40} className="text-primary mb-4" weight="duotone" />, name: "E-Commerce", desc: "Automated inventory sync & multi-channel logistics routing." },
               { icon: <Factory size={40} className="text-[#a855f7] mb-4" weight="duotone" />, name: "Manufacturing", desc: "ERP integrations connecting shop floor data to financial ledgers." },
               { icon: <Heartbeat size={40} className="text-primary mb-4" weight="duotone" />, name: "Healthcare", desc: "HIPAA-compliant data processing and automated patient routing." },
               { icon: <Bank size={40} className="text-[#a855f7] mb-4" weight="duotone" />, name: "Finance", desc: "Real-time ledger reconciliation and automated risk-assessment pipelines." }
             ].map((ind, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 flex flex-col items-start text-left hover:shadow-2xl border border-primary/5 transition-all duration-300 group">
                  <div className="group-hover:scale-110 transition-transform duration-300">{ind.icon}</div>
                  <h3 className="text-2xl font-semibold text-text-main mb-3">{ind.name}</h3>
                  <p className="text-text-main/60">{ind.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3.7 Engagement Models */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16 text-center items-center">
           <div className="flex flex-col gap-4 max-w-2xl">
             <span className="text-primary font-semibold tracking-widest uppercase text-sm">Engagement Models</span>
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
               How we partner with you.
             </h2>
             <p className="text-lg text-text-main/60 mt-4">Flexible, transparent, and scalable engagement frameworks tailored to your specific organizational needs.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
             <div className="bg-[#F0F6F9] rounded-3xl p-10 flex flex-col items-start border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <UsersThree size={48} className="text-primary mb-6" weight="duotone" />
                <h3 className="text-2xl font-semibold text-text-main mb-4">Dedicated Team</h3>
                <p className="text-text-main/60 mb-8 leading-relaxed">Scale your delivery capacity instantly with a dedicated pod of architects and engineers managed directly by you.</p>
                <ul className="flex flex-col gap-3 mt-auto">
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-text-main/80">Monthly billing</span></li>
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-text-main/80">Direct control</span></li>
                </ul>
             </div>
             
             <div className="bg-text-main rounded-3xl p-10 flex flex-col items-start border border-transparent shadow-xl relative overflow-hidden group text-white">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                <SealCheck size={48} className="text-primary mb-6 relative z-10" weight="duotone" />
                <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">Fixed Price</h3>
                <p className="text-white/60 mb-8 leading-relaxed relative z-10">Best for well-defined scopes. We take full ownership of delivery within a strictly agreed budget and timeline.</p>
                <ul className="flex flex-col gap-3 mt-auto relative z-10">
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-white/90">Milestone-based</span></li>
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-white/90">Zero budget overruns</span></li>
                </ul>
             </div>

             <div className="bg-[#F0F6F9] rounded-3xl p-10 flex flex-col items-start border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <Handshake size={48} className="text-[#a855f7] mb-6" weight="duotone" />
                <h3 className="text-2xl font-semibold text-text-main mb-4">Time & Material</h3>
                <p className="text-text-main/60 mb-8 leading-relaxed">Ideal for evolving requirements. Pay strictly for the hours logged by our specialists as priorities shift.</p>
                <ul className="flex flex-col gap-3 mt-auto">
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-text-main/80">Absolute flexibility</span></li>
                  <li className="flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> <span className="text-sm font-medium text-text-main/80">Agile execution</span></li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Why Choose Us (The Transformation) */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16 items-center text-center">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">The Transformation</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-tight">
              The difference between a <span className="line-through text-text-main/30 decoration-red-400">bottleneck</span> and a breakthrough.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full text-left">
            {/* The Old Way */}
            <div className="bg-white p-10 md:p-14 rounded-3xl flex flex-col gap-8 border border-primary/5">
              <h3 className="text-2xl font-semibold text-text-main flex items-center gap-3">
                <span className="px-3 py-1 bg-red-50 text-red-500 text-xs tracking-widest uppercase rounded-full">The Old Way</span>
              </h3>
              <ul className="flex flex-col gap-6">
                {["Human team doing repetitive data entry.", "Siloed CRMs that don't talk to ERPs.", "Hiring more people to scale operations.", "Generic templates that break under load."].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle size={24} className="text-red-400 shrink-0 mt-0.5" weight="duotone" />
                    <span className="text-text-main/60 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The LogicWare Way */}
            <div className="bg-text-main p-10 md:p-14 rounded-3xl flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3 relative z-10">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs tracking-widest uppercase rounded-full border border-primary/20">The LogicWare Way</span>
              </h3>
              <ul className="flex flex-col gap-6 relative z-10">
                {["AI Agents routing and answering queries 24/7.", "Unified brain connecting all your platforms.", "Scaling via autonomous systems, not payroll.", "Custom architecture built for absolute leverage."].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" weight="fill" />
                    <span className="text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16 text-center items-center">
           <div className="flex flex-col gap-4 max-w-2xl items-center">
             <span className="text-primary font-semibold tracking-widest uppercase text-sm">Agnostic Architecture</span>
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
               Built on modern technology.
             </h2>
             <p className="text-lg text-text-main/60 mt-4 max-w-xl">
               We also integrate with many other platforms and tools based on existing infra or according to client needs.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
             {["React & Next.js", "Node.js", "Odoo ERP", "OpenAI", "n8n / Make", "Tailwind CSS", "PostgreSQL", "AWS / Vercel"].map((tool, i) => (
                <div key={i} className="bg-[#F0F6F9] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white hover:shadow-xl border border-transparent hover:border-primary/20 transition-all duration-300 group">
                  <Code size={24} className="text-primary/40 group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-text-main/80 tracking-tight text-center">{tool}</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5.5 Interactive ROI Calculator */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9] relative overflow-hidden border-y border-text-main/5">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <SlidersHorizontal size={20} /> Operational Metrics
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-tight">
                Calculate your return on investment.
              </h2>
            </div>
            <p className="text-lg text-text-main/60 max-w-md">
              Use our interactive dashboard to model the capital you can reclaim by eliminating manual operations across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-text-main/10 rounded-2xl shadow-sm overflow-hidden">
            {/* Controls */}
            <div className="flex flex-col gap-10 p-10 lg:p-14 bg-white">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-text-main">Team Size</label>
                  <span className="text-2xl font-mono text-text-main font-bold">{teamSize} Employees</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="100" 
                  value={teamSize} 
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm text-text-main/40">Number of employees performing manual data entry or repetitive tasks.</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-text-main">Manual Hours / Week</label>
                  <span className="text-2xl font-mono text-text-main font-bold">{hoursPerWeek} Hours</span>
                </div>
                <input 
                  type="range" 
                  min="5" max="40" 
                  value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm text-text-main/40">Average hours spent per employee per week on non-creative, repetitive tasks.</span>
              </div>
            </div>
            
            {/* Results */}
            <div className="flex flex-col gap-8 justify-center p-10 lg:p-14 bg-[#FAFAFA] border-t lg:border-t-0 lg:border-l border-text-main/10">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-text-main/50 font-semibold">Current Annual Manual Cost</span>
                <span className="text-3xl font-mono text-text-main/40 line-through decoration-red-500/50">
                  ${annualManualCost.toLocaleString()}
                </span>
              </div>
              
              <div className="flex flex-col gap-2 mt-4 p-6 bg-white border border-primary/20 rounded-xl shadow-sm">
                <span className="text-xs uppercase tracking-widest text-primary font-bold">Expected Annual Savings</span>
                <span className="text-5xl lg:text-6xl font-bold font-mono text-text-main">
                  ${automatedSavings.toLocaleString()}
                </span>
              </div>
              
              <p className="text-text-main/40 text-xs mt-2 leading-relaxed">
                *Calculations based on an average $35/hr loaded employee cost and an 80% reduction in manual effort through LogicWare automation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 Featured Case Studies */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
              Architectures in production.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-primary/5 hover:shadow-2xl transition-all duration-500 group flex flex-col gap-8">
              <div className="flex justify-between items-start border-b border-text-main/10 pb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-text-main/50">National Retailer</span>
                  <h3 className="text-3xl font-semibold text-text-main">Supply Chain Automation</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#F0F6F9] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight weight="bold" />
                </div>
              </div>
              <p className="text-lg text-text-main/60">Eliminated manual entry between Shopify, Odoo ERP, and 3PL warehouses. The system now autonomously routes 10,000+ daily orders with zero human intervention.</p>
              <div className="flex gap-4 mt-auto pt-4 flex-wrap">
                <span className="px-4 py-2 bg-[#F0F6F9] text-text-main/80 rounded-full text-sm font-semibold">1,200 Hrs Saved / Mo</span>
                <span className="px-4 py-2 bg-[#F0F6F9] text-text-main/80 rounded-full text-sm font-semibold">100% Accuracy</span>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-primary/5 hover:shadow-2xl transition-all duration-500 group flex flex-col gap-8">
              <div className="flex justify-between items-start border-b border-text-main/10 pb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-text-main/50">B2B SaaS</span>
                  <h3 className="text-3xl font-semibold text-text-main">AI Support Agentic System</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#F0F6F9] flex items-center justify-center text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white transition-colors">
                  <ArrowRight weight="bold" />
                </div>
              </div>
              <p className="text-lg text-text-main/60">Deployed a custom LLM architecture integrated directly into Zendesk. The AI agent resolves 65% of Tier 1 technical queries by autonomously reading documentation and database states.</p>
              <div className="flex gap-4 mt-auto pt-4 flex-wrap">
                <span className="px-4 py-2 bg-[#F0F6F9] text-text-main/80 rounded-full text-sm font-semibold">65% Deflection Rate</span>
                <span className="px-4 py-2 bg-[#F0F6F9] text-text-main/80 rounded-full text-sm font-semibold">Instant Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Methodology (Process) */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Methodology</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-tight">
              Precision execution.
            </h2>
            <p className="text-lg text-text-main/60">
              We strip away the chaos of fragmented systems and replace it with singular, cohesive logic from audit to deployment.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-12">
            {METHODOLOGY.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:gap-8 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    {step.step}
                  </div>
                  {i !== METHODOLOGY.length - 1 && <div className="w-px h-16 bg-primary/20 mt-4" />}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-text-main">{step.title}</h3>
                  <p className="text-text-main/60 text-lg md:text-xl max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7 FAQ Section */}
      <section className="w-full py-24 lg:py-32 bg-white">
         <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
                Technical inquiries.
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {[
                { q: "How long does a typical system deployment take?", a: "Depending on the complexity, an architectural audit takes 1-2 weeks, followed by a 4-8 week intelligent build phase. We aim for rapid, iterative deployments rather than year-long monoliths." },
                { q: "Is our data secure with your AI Agentic systems?", a: "Absolute security is our baseline. We utilize private LLM instances, SOC2 compliant architectures, and ensure your data is never used to train public models." },
                { q: "Do we need to rip out our existing CRMs and ERPs?", a: "No. Our approach is entirely agnostic. We build middleware and connective tissue to make your existing stack (Odoo, HubSpot, Salesforce) act as a single, unified brain." },
                { q: "What happens after the system goes live?", a: "We provide comprehensive SLA-backed support and maintenance. Our systems are built to be autonomous, but our engineers are always on standby to ensure 99.99% uptime." }
              ].map((faq, i) => (
                <details key={i} className="group bg-[#F0F6F9] rounded-2xl border border-primary/5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-xl text-text-main">
                    <span>{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <CaretDown size={24} weight="bold" className="text-primary" />
                    </span>
                  </summary>
                  <div className="text-text-main/60 px-6 pb-6 text-lg leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
         </div>
      </section>

      {/* 7. CTA Section */}
      <section className="w-full py-32 bg-white flex justify-center">
        <div className="w-full max-w-5xl mx-6 bg-text-main rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 relative z-10">
            Ready to scale natively?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mb-12 relative z-10">
            Speak with our architecture team to design a custom automation roadmap for your organization.
          </p>
          
          <Link href="/contact" className="relative z-10 px-10 py-5 bg-white text-text-main rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3 group">
            <span>Request Architecture Review</span>
            <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
