"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Desktop, Cpu, ChartLineUp, ShieldCheck, UserCircle, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-transparent text-slate-800 overflow-hidden font-sans">
      
      {/* 1. CORPORATE HERO */}
      <section className="relative w-full pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pastel-blue blur-[100px] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pastel-mint blur-[100px] rounded-full opacity-30 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-1.5 bg-white rounded-full border border-slate-100 inline-flex mx-auto items-center gap-2 mb-4 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Who We Are</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Architecting the <span className="text-gradient-corporate">Future of Work.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            We are a premier digital transformation agency. We engineer robust, autonomous systems that allow enterprises to scale without friction.
          </motion.p>
        </div>
      </section>

      {/* 2. CORE PRINCIPLES */}
      <section className="w-full py-24 bg-transparent relative border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Ethos</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">The core principles driving our engineering.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pastel-blue text-[#4F46E5] flex items-center justify-center">
                <Cpu weight="fill" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Engineering Excellence</h4>
              <p className="text-slate-600 leading-relaxed">We write clean, modular, and deeply integrated code. Our architectures scale horizontally and never compromise on performance.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pastel-purple text-[#9333EA] flex items-center justify-center">
                <Desktop weight="fill" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Agnostic Integration</h4>
              <p className="text-slate-600 leading-relaxed">We don't force you into proprietary boxes. We wire together your existing tools—Odoo, HubSpot, OpenAI—into one unified brain.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pastel-mint text-[#059669] flex items-center justify-center">
                <ChartLineUp weight="fill" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Absolute Transparency</h4>
              <p className="text-slate-600 leading-relaxed">No vanity metrics. No bloated timelines. We operate with strict SLAs and deliver exact, measurable business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ARCHITECTURE BOARD */}
      <section className="w-full py-24 bg-transparent relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">The Architecture Board</h3>
            <p className="text-lg text-slate-600">Decades of corporate strategy paired with elite full-stack engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
            {/* Founder 1 */}
            <div className="flex flex-col sm:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 items-center sm:items-start text-center sm:text-left">
              <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden relative shrink-0">
                {/* Fallback avatar if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <UserCircle weight="fill" size={128} className="absolute -bottom-4" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold text-slate-900">Swastik Dave</h4>
                <p className="text-sm font-bold uppercase tracking-wider text-primary">Founder & CEO</p>
                <p className="text-slate-600 mt-2">20+ years of corporate leadership and enterprise scaling experience, architecting business growth from the top down.</p>
                <Link href="#" className="mt-2 text-slate-400 hover:text-[#0A66C2] transition-colors self-center sm:self-start">
                  <LinkedinLogo weight="fill" size={24} />
                </Link>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col sm:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 items-center sm:items-start text-center sm:text-left">
              <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden relative shrink-0">
                {/* Fallback avatar if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <UserCircle weight="fill" size={128} className="absolute -bottom-4" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold text-slate-900">Rudresh Vyas</h4>
                <p className="text-sm font-bold uppercase tracking-wider text-primary">Chief Automation Engineer</p>
                <p className="text-slate-600 mt-2">Professional MERN stack developer and automation engineer, building the autonomous systems that power modern enterprises.</p>
                <Link href="#" className="mt-2 text-slate-400 hover:text-[#0A66C2] transition-colors self-center sm:self-start">
                  <LinkedinLogo weight="fill" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="w-full py-24 bg-slate-900 text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary blur-[150px] rounded-full opacity-30 pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">Ready to upgrade your infrastructure?</h2>
        <p className="text-xl text-slate-300 max-w-2xl mb-10 relative z-10">Our architects are ready to audit your stack and provide a comprehensive automation roadmap.</p>
        <Link href="/contact" className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-xl font-semibold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative z-10">
          Book an Audit
        </Link>
      </section>

    </div>
  );
}
