"use client";

import { motion } from "framer-motion";
import { Envelope, Phone, MapPin, CheckCircle, Clock, ShieldCheck, Users } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-800 font-sans min-h-screen">
      
      {/* 1. HERO */}
      <section className="relative w-full pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pastel-blue blur-[100px] rounded-full opacity-40 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-1.5 bg-white rounded-full border border-slate-100 inline-flex mx-auto items-center gap-2 mb-4 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Get In Touch</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Let's build your <br/>
            <span className="text-gradient-corporate">competitive advantage.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            Speak with our architecture team to design a custom automation roadmap for your organization.
          </motion.p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: FORM & TRUST FACTORS */}
      <section className="w-full pb-32 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: The Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col gap-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-purple blur-[60px] rounded-full opacity-50 pointer-events-none" />
             <h3 className="text-3xl font-bold text-slate-900 relative z-10">Request an Architecture Review</h3>
             <form className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Corporate Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@enterprise.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Operational Bottleneck</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Describe the current inefficiencies you are facing..."></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 font-bold text-lg transition-transform hover:scale-[1.02] shadow-pastel-soft mt-4">
                  Submit Request
                </button>
             </form>
          </div>

          {/* Right: Trust Factors */}
          <div className="flex flex-col justify-center gap-10">
             
             <div>
               <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Service Level Agreements</h4>
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-pastel-mint text-[#059669] flex items-center justify-center shrink-0">
                     <Clock weight="fill" size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-lg">Rapid Response</p>
                     <p className="text-slate-500 text-sm">All inquiries are reviewed by a Senior Architect within 2 hours.</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-pastel-blue text-[#4F46E5] flex items-center justify-center shrink-0">
                     <ShieldCheck weight="fill" size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-lg">Absolute Confidentiality</p>
                     <p className="text-slate-500 text-sm">We operate under strict NDA for all architecture audits.</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="w-full h-[1px] bg-slate-200" />

             <div className="flex flex-col gap-2 mt-4">
               <div className="flex items-center gap-2 text-slate-900 font-bold">
                 <Envelope weight="fill" className="text-primary" size={20} /> Email Us
               </div>
               <a href="mailto:info@logicwaretech.com" className="text-slate-500 hover:text-primary transition-colors font-medium">info@logicwaretech.com</a>
             </div>

             <div>
               <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Engagement Models</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                   <p className="font-bold text-slate-900">Fixed Price</p>
                   <p className="text-sm text-slate-500">Best for well-defined scopes with strict budget control.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                   <p className="font-bold text-slate-900">Dedicated Team</p>
                   <p className="text-sm text-slate-500">Scale your capacity instantly with managed engineering pods.</p>
                 </div>
               </div>
             </div>



          </div>
        </div>
      </section>
      
    </div>
  );
}
