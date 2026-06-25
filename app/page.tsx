"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Robot, Database, Cpu, AppWindow, Play, CheckCircle, XCircle, ArrowUpRight, Lightning, Cloud, ChartLineUp, Quotes, DeviceMobile } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRef, useState } from "react";

const CAPABILITIES = [
  { num: "01", title: "Business Process Automation", desc: "Intelligent systems that learn, adapt, and execute operations autonomously.", bg: "bg-white", text: "text-text-main", iconColor: "text-primary", icon: <Robot weight="duotone" size={24} className="text-primary" /> },
  { num: "02", title: "ERP & CRM Workflows", desc: "Automated pipelines moving leads from capture to close with zero friction.", bg: "bg-white", text: "text-text-main", iconColor: "text-primary", icon: <Database weight="duotone" size={24} className="text-primary" /> },
  { num: "03", title: "Software Development", desc: "Custom software solutions engineered to eliminate operational bottlenecks.", bg: "bg-white", text: "text-text-main", iconColor: "text-primary", icon: <Cpu weight="duotone" size={24} className="text-primary" /> },
  { num: "04", title: "Web Applications", desc: "High-performance, scalable web apps built for enterprise ecosystems.", bg: "bg-[#F0F6F9]", text: "text-text-main", iconColor: "text-primary", icon: <AppWindow weight="duotone" size={24} className="text-primary" /> },
  { num: "05", title: "Mobile Applications", desc: "Native and cross-platform apps designed for seamless user experiences.", bg: "bg-[#F0F6F9]", text: "text-text-main", iconColor: "text-primary", icon: <DeviceMobile weight="duotone" size={24} className="text-primary" /> },
  { num: "06", title: "AI Agentic Systems", desc: "Autonomous AI workers deployed to reason, decide, and execute complex tasks 24/7.", bg: "bg-secondary", text: "text-white", iconColor: "text-white/80", isHighlight: true, icon: <Lightning weight="duotone" size={24} className="text-white/80" /> },
];

const TAGS = [
  "Workflow Automation", "API Integrations", "Sales Communication", 
  "Problem Solving", "CRM Systems", "Custom Dashboards", "AI Agents"
];

export default function Home() {
  const [activeCap, setActiveCap] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="flex flex-col w-full bg-[#F0F6F9] text-text-main selection:bg-secondary selection:text-white overflow-hidden font-sans">
      
      {/* 1. Hero - Creative Awwwards Layout */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#F0F6F9] pt-20">
        
        {/* Animated Abstract Gradient Orbs */}
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 blur-[80px] rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-secondary/10 to-primary/20 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-4 relative z-10">
          
          {/* Left Column: Editorial Metadata (Hidden on Mobile) */}
          <div className="hidden lg:flex col-span-1 flex-col justify-between py-12 border-l border-primary/20 pl-4 h-[70vh]">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-text-main/40 font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
                LogicWare Tech
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-text-main/40 font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
                System: Active
              </span>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="col-span-12 lg:col-span-11 flex flex-col justify-center gap-6 lg:gap-12 py-12">
            
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h1 className="text-[14vw] lg:text-[7rem] leading-[0.85] font-bold tracking-tighter text-text-main uppercase">
                  Replace
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 lg:gap-8 overflow-hidden"
              >
                <div className="h-12 w-24 lg:h-20 lg:w-40 rounded-full border border-primary/30 flex items-center justify-center bg-white/30 backdrop-blur-md relative overflow-hidden group shrink-0">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#38C7D2_360deg)] opacity-20" />
                  <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-primary relative z-10">Manual</span>
                </div>
                <h1 className="text-[14vw] lg:text-[7rem] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic uppercase pr-4">
                  Effort
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h1 className="text-[14vw] lg:text-[7rem] leading-[0.85] font-bold tracking-tighter text-text-main uppercase">
                  With Logic.
                </h1>
              </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mt-8 w-full max-w-5xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}
                className="max-w-md text-xl lg:text-2xl text-text-main/60 font-medium leading-relaxed"
              >
                Stop wasting human capital on repetitive tasks. We engineer AI agents and custom workflows that run your business on autopilot.
              </motion.p>
              
              {/* Interactive "Terminal" Element */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
                className="w-full lg:w-[400px] rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white p-6 shadow-2xl shadow-primary/5 flex flex-col gap-4 relative shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="font-mono text-xs text-text-main/70 flex flex-col gap-3">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>{">"} Auditing manual workflows...</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>{">"} Replacing processes with automations...</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-secondary font-bold">{">"} Execution speed increased by 400%.</motion.span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Statement (Replaces Marquee) */}
      <section className="w-full py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-main leading-tight"
          >
            We don't just build software. We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">autonomous ecosystems</span> that scale without friction.
          </motion.p>
          <div className="w-px h-24 bg-gradient-to-b from-primary/20 to-transparent mt-16" />
        </div>
      </section>

      {/* 3. The Capabilities (Interactive Accordion) */}
      <section className="w-full py-32 bg-[#F0F6F9] relative" ref={containerRef}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32 h-max z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-main leading-tight">
              Core <br className="hidden lg:block"/>Competencies
            </h2>
            <p className="text-lg text-text-main/60 max-w-sm">
              Enterprise-grade solutions designed for maximum operational efficiency. Hover to explore our ecosystem.
            </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-2">
            {CAPABILITIES.map((cap, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setActiveCap(i)}
                className={`relative rounded-[2rem] p-6 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-crosshair border ${activeCap === i ? 'bg-white border-primary/10 shadow-2xl shadow-primary/5' : 'bg-transparent border-transparent hover:bg-white/40'}`}
              >
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-6 md:gap-8">
                     <span className={`text-xl font-mono transition-colors duration-500 ${activeCap === i ? 'text-primary' : 'text-text-main/20'}`}>{cap.num}</span>
                     <h3 className={`text-2xl md:text-4xl font-semibold transition-colors duration-500 tracking-tight ${activeCap === i ? 'text-text-main' : 'text-text-main/50'}`}>{cap.title}</h3>
                   </div>
                   <div className={`p-4 rounded-2xl transition-all duration-700 hidden md:block ${activeCap === i ? 'bg-[#F0F6F9] text-primary scale-100 opacity-100 rotate-0' : 'bg-transparent text-text-main/20 scale-50 opacity-0 -rotate-45'}`}>
                      {cap.icon}
                   </div>
                 </div>
                 
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCap === i ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                 >
                   <p className="text-text-main/60 text-lg md:text-xl md:pl-[4.5rem] max-w-2xl leading-relaxed">{cap.desc}</p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. The Process (Corporate Minimal) */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-8">
             <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold w-max tracking-widest uppercase">The Methodology</span>
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-main leading-tight">
               Precision execution,<br/>from audit to deployment.
             </h2>
             <p className="text-lg text-text-main/60">We strip away the chaos of fragmented systems and replace it with singular, cohesive logic.</p>
             
             <div className="grid grid-cols-2 gap-8 mt-8 border-t border-primary/10 pt-12">
               <div className="flex flex-col gap-2">
                 <span className="text-4xl font-bold text-text-main">24/7</span>
                 <span className="text-sm font-semibold text-text-main/50 uppercase tracking-widest">Autonomous Operations</span>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-4xl font-bold text-text-main">Zero</span>
                 <span className="text-sm font-semibold text-text-main/50 uppercase tracking-widest">Manual Data Entry</span>
               </div>
             </div>
          </div>

          <div className="flex flex-col justify-center gap-10">
            {[
              { title: "Architectural Audit", desc: "We map your data flows and identify critical bottlenecks." },
              { title: "Intelligent Build", desc: "We deploy our engineering stack to wire your tools together." },
              { title: "Autonomous Launch", desc: "Your new digital ecosystem takes over routine operations." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#F0F6F9] border border-primary/20 flex items-center justify-center text-primary font-mono text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    0{i+1}
                  </div>
                  {i !== 2 && <div className="w-px h-full bg-primary/10 mt-4 group-hover:bg-primary/30 transition-colors" />}
                </div>
                <div className="flex flex-col gap-2 pb-8">
                  <h3 className="text-2xl font-semibold text-text-main">{step.title}</h3>
                  <p className="text-text-main/60 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Integration Stack */}
      <section className="w-full py-32 bg-[#141624] text-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center gap-16 text-center">
           <div className="flex flex-col gap-6 items-center">
             <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
               Agnostic Architecture
             </h2>
             <p className="text-lg text-white/50 max-w-2xl">
               We don't force you onto proprietary platforms. Whether it's the examples below or hundreds of other tools, we architect bridges based exactly on your operational needs.
             </p>
           </div>
           
           <div className="flex flex-col gap-8 w-full max-w-4xl items-center">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
               {["Odoo", "n8n", "Make.com", "Wati", "OpenAI", "Open-Source CRMs", "Licensed ERPs", "Custom REST APIs"].map((tool, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
                    <span className="font-semibold text-white/80 text-lg tracking-tight text-center">{tool}</span>
                  </div>
               ))}
             </div>
             
             <div className="flex items-center justify-center">
                <span className="px-6 py-2 rounded-full bg-white/5 text-white/60 font-semibold text-sm tracking-widest uppercase border border-white/10">
                  + Hundreds of other APIs & webhooks
                </span>
             </div>
           </div>
        </div>
      </section>

      {/* 6. Corporate Minimal CTA */}
      <section className="w-full py-32 bg-white flex justify-center">
        <div className="w-full max-w-4xl bg-[#F0F6F9] rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center border border-primary/10 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-main mb-6">
            Ready to scale natively?
          </h2>
          <p className="text-lg text-text-main/60 max-w-lg mb-12">
            Speak with our architecture team to design a custom automation roadmap for your organization.
          </p>
          
          <form className="w-full max-w-xl flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 focus:outline-none focus:border-primary/50 transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 focus:outline-none focus:border-primary/50 transition-colors" />
            </div>
            <input type="email" placeholder="Work Email" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 focus:outline-none focus:border-primary/50 transition-colors" />
            <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/10 focus:outline-none focus:border-primary/50 transition-colors" />
            
            <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Request Architecture Review
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
