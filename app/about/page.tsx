"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Lightning, ShieldCheck, Target } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";
import Link from "next/link";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="flex flex-col w-full bg-white text-text-main selection:bg-secondary selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end px-6 pb-24 pt-40 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest font-semibold">About LogicWare</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.9] uppercase"
          >
            We Engineer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-8">Autopilot.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-xl ml-auto mt-12 md:mt-0"
          >
            <p className="text-2xl text-text-main/60 font-medium leading-relaxed border-l-2 border-primary/20 pl-6">
              We are a team of architects, designers, and engineers who believe that if a human is doing repetitive work, the system is broken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Philosophy (Sticky Split) */}
      <section className="w-full py-32 bg-white relative" ref={containerRef}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-40 h-max">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-main leading-tight uppercase">
              The <br className="hidden lg:block"/>Manifesto
            </h2>
            <p className="text-xl text-text-main/60 max-w-sm font-medium">
              We don't build software just to build it. We engineer systems designed to eliminate operational drag permanently.
            </p>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-12">
            {[
              { num: "01", title: "Human Capital is for Thinking", desc: "Humans are meant for creativity, strategy, and empathy. They are not meant to copy-paste data between five different tabs. We build the infrastructure to let your team actually think." },
              { num: "02", title: "Aesthetics = Usability", desc: "A system is only as good as its adoption rate. We don't just build powerful backends; we wrap them in award-winning, intuitive interfaces that feel like consumer apps, not clunky enterprise software." },
              { num: "03", title: "Absolute Precision", desc: "When we automate a pipeline, we engineer it for zero failure. Our tech stacks are resilient, scalable, and completely agnostic to proprietary constraints." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 md:p-12 rounded-[2.5rem] bg-[#F0F6F9] border border-primary/5 hover:border-primary/20 transition-colors duration-500 group shadow-sm hover:shadow-xl hover:shadow-primary/5">
                <span className="text-2xl font-mono text-primary/40 group-hover:text-primary transition-colors">{item.num}</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-text-main tracking-tight">{item.title}</h3>
                <p className="text-xl text-text-main/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. The DNA Bento Grid */}
      <section className="w-full py-32 bg-[#141624] text-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38C7D2] to-[#a855f7] italic pr-4">DNA.</span></h2>
            <p className="text-xl md:text-2xl text-white/50 font-medium max-w-2xl mx-auto">The core traits embedded into every line of code we ship.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-[2.5rem] bg-white/5 border border-white/10 p-10 md:p-14 flex flex-col justify-between min-h-[400px] group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38C7D2]/20 blur-[100px] group-hover:bg-[#38C7D2]/40 transition-colors duration-700" />
              <Code size={56} className="text-[#38C7D2] mb-8" weight="duotone" />
              <div className="flex flex-col gap-4 relative z-10 mt-12">
                <h3 className="text-4xl font-semibold tracking-tight">Engineering First</h3>
                <p className="text-xl text-white/60 max-w-md">We are not just a design agency. We write complex logic, build resilient APIs, and architect databases that scale endlessly.</p>
              </div>
            </div>
            
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#38C7D2] to-[#a855f7] p-10 md:p-14 flex flex-col justify-between min-h-[400px] shadow-2xl shadow-[#a855f7]/20 group">
              <Lightning size={56} className="text-white mb-8 group-hover:scale-110 transition-transform duration-500" weight="fill" />
              <div className="flex flex-col gap-4 mt-12">
                <h3 className="text-4xl font-semibold tracking-tight">Velocity</h3>
                <p className="text-xl text-white/90">Speed in execution. Speed in delivery. Speed in the systems we build for you.</p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-10 md:p-14 flex flex-col justify-between min-h-[400px] group">
              <Target size={56} className="text-[#a855f7] mb-8 group-hover:rotate-12 transition-transform duration-500" weight="duotone" />
              <div className="flex flex-col gap-4 mt-12">
                <h3 className="text-4xl font-semibold tracking-tight">Agnostic</h3>
                <p className="text-xl text-white/60">We don't force tools. We connect what you have into a unified brain.</p>
              </div>
            </div>
            
            <div className="md:col-span-2 rounded-[2.5rem] bg-white/5 border border-white/10 p-10 md:p-14 flex flex-col justify-between min-h-[400px] group">
              <ShieldCheck size={56} className="text-white mb-8 group-hover:text-[#38C7D2] transition-colors duration-500" weight="duotone" />
              <div className="flex flex-col gap-4 mt-12">
                <h3 className="text-4xl font-semibold tracking-tight">Zero Fluff</h3>
                <p className="text-xl text-white/60 max-w-lg">No fake metrics. No vanity partnerships. We let our exact architecture and our performance data speak entirely for itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 The Board / Leadership */}
      <section className="w-full py-32 bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-primary/10 pb-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-main">
              The Architecture Board
            </h2>
            <p className="text-text-main/60 max-w-sm text-lg font-medium">Decades of corporate strategy colliding with elite full-stack engineering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[2.5rem] bg-white p-10 md:p-14 border border-primary/5 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col justify-between min-h-[350px]">
              <div>
                <span className="text-sm font-mono text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full w-max mb-8 block">CEO & Director</span>
                <h3 className="text-4xl md:text-5xl font-semibold text-text-main tracking-tight mb-6 group-hover:text-primary transition-colors">Swastik Davey</h3>
                <p className="text-xl text-text-main/60 max-w-md leading-relaxed">20+ years of corporate leadership and enterprise scaling experience, architecting business growth from the top down.</p>
              </div>
            </div>
            
            <div className="rounded-[2.5rem] bg-white p-10 md:p-14 border border-primary/5 shadow-sm hover:shadow-2xl hover:shadow-[#a855f7]/5 transition-all duration-500 group flex flex-col justify-between min-h-[350px]">
              <div>
                <span className="text-sm font-mono text-[#a855f7] uppercase tracking-widest px-4 py-2 bg-[#a855f7]/10 rounded-full w-max mb-8 block">CTO & Architect</span>
                <h3 className="text-4xl md:text-5xl font-semibold text-text-main tracking-tight mb-6 group-hover:text-[#a855f7] transition-colors">Rudresh Vyas</h3>
                <p className="text-xl text-text-main/60 max-w-md leading-relaxed">Professional MERN stack developer and automation engineer, building the autonomous systems that power modern enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="w-full py-40 bg-white flex justify-center px-4">
        <div className="w-full max-w-6xl bg-[#F0F6F9] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center border border-primary/10 shadow-xl overflow-hidden relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-secondary/10 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <h2 className="text-[10vw] md:text-[8rem] font-bold tracking-tighter text-text-main leading-[0.8] mb-8 uppercase relative z-10">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-6">Talk.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-main/60 max-w-xl mb-12 relative z-10 font-medium">
            Ready to upgrade your operational infrastructure? Our architects are ready to audit your stack.
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
