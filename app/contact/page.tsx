"use client";

import { motion } from "framer-motion";
import { ArrowRight, EnvelopeSimple, MapPin, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    if (result.success) {
      setFormState("success");
    } else {
      setFormState("idle");
      alert(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col w-full bg-white text-text-main selection:bg-secondary selection:text-white font-sans overflow-hidden">
      
      <section className="w-full min-h-[100dvh] pt-32 pb-24 flex items-center bg-[#F0F6F9] relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col justify-center gap-12 relative z-10 pt-12 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-widest font-semibold">Initiate Sequence</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] uppercase"
            >
              System <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-8">Audit.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-text-main/60 font-medium leading-relaxed max-w-lg"
            >
              Leave your details below. Our architecture board will review your stack and design an automation roadmap for your organization.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col gap-8 mt-8 border-t border-primary/10 pt-12"
            >
               <div className="flex items-center gap-6 group">
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-primary/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-sm">
                   <EnvelopeSimple size={24} className="text-primary" weight="duotone" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-sm font-mono text-text-main/40 uppercase tracking-widest">Direct Line</span>
                   <a href="mailto:info@logicwaretech.com" className="text-2xl font-semibold hover:text-primary transition-colors">info@logicwaretech.com</a>
                 </div>
               </div>
               <div className="flex items-center gap-6 group">
                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-primary/10 group-hover:border-[#a855f7]/50 group-hover:scale-110 transition-all duration-500 shadow-sm">
                   <PhoneCall size={24} className="text-[#a855f7]" weight="duotone" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-sm font-mono text-text-main/40 uppercase tracking-widest">Phone Support</span>
                   <a href="tel:+919940644543" className="text-2xl font-semibold hover:text-[#a855f7] transition-colors">+91 99406 44543</a>
                 </div>
               </div>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-full z-10 flex flex-col justify-center"
          >
            <div className="w-full bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] border border-primary/10 shadow-2xl shadow-primary/5">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center gap-6 py-24">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-[#F0F6F9] flex items-center justify-center text-primary mb-4 animate-bounce">
                    <ArrowRight size={48} className="-rotate-45" weight="bold" />
                  </div>
                  <h3 className="text-5xl font-bold tracking-tight">Sequence Initiated</h3>
                  <p className="text-xl text-text-main/60 max-w-sm">Our architecture board has received your data. We will establish a secure line shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-mono uppercase tracking-widest text-text-main/40 ml-4">First Name</label>
                      <input name="firstName" required type="text" className="w-full bg-[#F0F6F9] rounded-[2rem] px-6 py-5 text-lg border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-mono uppercase tracking-widest text-text-main/40 ml-4">Last Name</label>
                      <input name="lastName" required type="text" className="w-full bg-[#F0F6F9] rounded-[2rem] px-6 py-5 text-lg border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-text-main/40 ml-4">Work Email</label>
                    <input name="email" required type="email" className="w-full bg-[#F0F6F9] rounded-[2rem] px-6 py-5 text-lg border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="john@enterprise.com" />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-text-main/40 ml-4">Target Objective</label>
                    <div className="relative">
                      <select name="objective" className="w-full bg-[#F0F6F9] rounded-[2rem] px-6 py-5 text-lg border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white appearance-none cursor-pointer">
                        <option>AI Agentic Systems</option>
                        <option>ERP / CRM Automations</option>
                        <option>Web / Mobile Application</option>
                        <option>Full Architecture Audit</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-main/40">
                        <ArrowRight size={20} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-text-main/40 ml-4">System Parameters (Optional)</label>
                    <textarea name="parameters" rows={4} className="w-full bg-[#F0F6F9] rounded-[2rem] px-6 py-5 text-lg border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white resize-none" placeholder="Briefly describe your current stack and bottlenecks..." />
                  </div>
                  
                  <button type="submit" disabled={formState === "submitting"} className="w-full mt-4 px-6 py-6 bg-text-main text-white rounded-2xl font-bold text-xl uppercase tracking-widest hover:bg-primary transition-colors duration-500 shadow-xl overflow-hidden relative group/btn disabled:opacity-70 disabled:cursor-not-allowed">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {formState === "submitting" ? "Transmitting..." : "Submit Parameters"}
                      {formState !== "submitting" && <ArrowRight weight="bold" className="group-hover/btn:translate-x-2 transition-transform duration-300" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
