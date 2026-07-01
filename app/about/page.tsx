"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Lightning, ShieldCheck, Target, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white text-text-main selection:bg-secondary selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center px-6 pb-24 pt-40 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-text-main/60">About LogicWare Tech</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight leading-[1.1]"
          >
            Architecting the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future of Work.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-main/70 font-medium leading-relaxed max-w-2xl mt-4"
          >
            We are a premier digital transformation agency. We engineer robust, autonomous systems that allow enterprises to scale without friction.
          </motion.p>
        </div>
      </section>

      {/* 1.5 Company Metrics */}
      <section className="w-full py-16 bg-text-main text-white border-y border-primary/20">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="flex flex-col gap-2">
             <span className="text-5xl font-bold text-primary">15+</span>
             <span className="text-sm uppercase tracking-widest text-white/60">Years Combined Exp.</span>
           </div>
           <div className="flex flex-col gap-2">
             <span className="text-5xl font-bold text-primary">50+</span>
             <span className="text-sm uppercase tracking-widest text-white/60">Enterprise Systems</span>
           </div>
           <div className="flex flex-col gap-2">
             <span className="text-5xl font-bold text-primary">99%</span>
             <span className="text-sm uppercase tracking-widest text-white/60">Client Retention</span>
           </div>
           <div className="flex flex-col gap-2">
             <span className="text-5xl font-bold text-primary">24/7</span>
             <span className="text-sm uppercase tracking-widest text-white/60">Autonomous Uptime</span>
           </div>
        </div>
      </section>

      {/* 2. Core Values (Replacing DNA Bento) */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main leading-tight">
              The core principles driving our engineering.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code size={48} className="text-primary" weight="duotone" />, title: "Engineering Excellence", desc: "We write clean, modular, and deeply integrated code. Our architectures scale horizontally and never compromise on performance." },
              { icon: <Target size={48} className="text-primary" weight="duotone" />, title: "Agnostic Integration", desc: "We don't force you into proprietary boxes. We wire together your existing tools—Odoo, HubSpot, OpenAI—into one unified brain." },
              { icon: <ShieldCheck size={48} className="text-primary" weight="duotone" />, title: "Absolute Transparency", desc: "No vanity metrics. No bloated timelines. We operate with strict SLAs and deliver exact, measurable business value." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 rounded-3xl bg-[#F0F6F9] border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white border border-primary/10 flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-text-main">{value.title}</h3>
                <p className="text-text-main/60 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership */}
      <section className="w-full py-24 lg:py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
                The Architecture Board
              </h2>
            </div>
            <p className="text-text-main/60 max-w-sm text-lg font-medium">Decades of corporate strategy paired with elite full-stack engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white p-10 md:p-14 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[350px]">
              <div>
                <span className="text-xs font-semibold text-text-main/50 uppercase tracking-widest mb-4 block">CEO & Director</span>
                <h3 className="text-4xl font-semibold text-text-main tracking-tight mb-6">Swastik Davey</h3>
                <p className="text-lg text-text-main/60 leading-relaxed">20+ years of corporate leadership and enterprise scaling experience, architecting business growth from the top down.</p>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white p-10 md:p-14 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[350px]">
              <div>
                <span className="text-xs font-semibold text-text-main/50 uppercase tracking-widest mb-4 block">CTO & Architect</span>
                <h3 className="text-4xl font-semibold text-text-main tracking-tight mb-6">Rudresh Vyas</h3>
                <p className="text-lg text-text-main/60 leading-relaxed">Professional MERN stack developer and automation engineer, building the autonomous systems that power modern enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="w-full py-32 bg-white flex justify-center">
        <div className="w-full max-w-5xl mx-6 bg-text-main rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 relative z-10">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mb-12 relative z-10">
            Our architects are ready to audit your stack and provide a comprehensive automation roadmap.
          </p>
          
          <Link href="/contact" className="relative z-10 px-10 py-5 bg-white text-text-main rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center gap-3 group">
            <span>Book an Audit</span>
            <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
