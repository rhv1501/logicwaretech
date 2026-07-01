"use client";

import { motion } from "framer-motion";
import { ArrowRight, EnvelopeSimple, PhoneCall, CheckCircle } from "@phosphor-icons/react/dist/ssr";
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
      
      <section className="w-full min-h-[100dvh] pt-32 pb-24 flex items-center bg-[#F0F6F9]">
        <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col justify-center gap-10 pt-12 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-text-main/60">Contact Us</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              Book an <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Architecture Review.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-main/70 font-medium leading-relaxed max-w-lg"
            >
              Leave your details below. Our architecture board will review your operational stack and design a custom automation roadmap.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8 mt-4 border-t border-primary/10 pt-10"
            >
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-primary/10 group-hover:border-primary/40 shadow-sm transition-colors">
                   <EnvelopeSimple size={24} className="text-primary" weight="duotone" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs font-semibold text-text-main/50 uppercase tracking-widest mb-1">Direct Line</span>
                   <a href="mailto:info@logicwaretech.com" className="text-xl font-semibold hover:text-primary transition-colors">info@logicwaretech.com</a>
                 </div>
               </div>
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-primary/10 group-hover:border-primary/40 shadow-sm transition-colors">
                   <PhoneCall size={24} className="text-primary" weight="duotone" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs font-semibold text-text-main/50 uppercase tracking-widest mb-1">Phone Support</span>
                   <a href="tel:+919940644543" className="text-xl font-semibold hover:text-primary transition-colors">+91 99406 44543</a>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
             className="relative w-full z-10 flex flex-col justify-center"
          >
            <div className="w-full bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] border border-primary/10 shadow-2xl">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center gap-6 py-20">
                  <div className="w-24 h-24 rounded-full bg-[#F0F6F9] flex items-center justify-center text-primary mb-4">
                    <CheckCircle size={48} weight="fill" />
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight text-text-main">Request Received</h3>
                  <p className="text-lg text-text-main/60 max-w-sm">Thank you. Our architecture team has received your information and will be in touch shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-text-main/60 ml-2">First Name</label>
                      <input name="firstName" required type="text" className="w-full bg-[#F0F6F9] rounded-xl px-5 py-4 text-base border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-text-main/60 ml-2">Last Name</label>
                      <input name="lastName" required type="text" className="w-full bg-[#F0F6F9] rounded-xl px-5 py-4 text-base border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-text-main/60 ml-2">Work Email</label>
                    <input name="email" required type="email" className="w-full bg-[#F0F6F9] rounded-xl px-5 py-4 text-base border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white" placeholder="john@enterprise.com" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-text-main/60 ml-2">Target Objective</label>
                    <div className="relative">
                      <select name="objective" className="w-full bg-[#F0F6F9] rounded-xl px-5 py-4 text-base border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white appearance-none cursor-pointer">
                        <option>AI Agentic Systems</option>
                        <option>ERP / CRM Automations</option>
                        <option>Web / Mobile Application</option>
                        <option>Full Architecture Audit</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-main/40">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-text-main/60 ml-2">Project Details (Optional)</label>
                    <textarea name="parameters" rows={4} className="w-full bg-[#F0F6F9] rounded-xl px-5 py-4 text-base border border-transparent focus:border-primary/30 focus:outline-none transition-colors focus:bg-white resize-none" placeholder="Briefly describe your current stack and bottlenecks..." />
                  </div>
                  
                  <button type="submit" disabled={formState === "submitting"} className="w-full mt-4 px-6 py-5 bg-text-main text-white rounded-xl font-bold text-lg uppercase tracking-widest hover:bg-primary transition-colors duration-300 shadow-xl overflow-hidden relative group disabled:opacity-70 disabled:cursor-not-allowed">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formState === "submitting" ? "Submitting..." : "Send Request"}
                      {formState !== "submitting" && <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />}
                    </span>
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
