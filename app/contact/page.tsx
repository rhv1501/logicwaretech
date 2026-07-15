"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Envelope, CheckCircle, Clock, ShieldCheck, ArrowRight, ArrowLeft, Desktop, Robot, Database, Shield } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { submitContactForm } from "../actions/contact";

const SERVICES = [
  { id: "ai", label: "AI & Automation", icon: <Robot weight="fill" size={24} /> },
  { id: "es", label: "Enterprise Software", icon: <Database weight="fill" size={24} /> },
  { id: "web", label: "Web & Mobile Apps", icon: <Desktop weight="fill" size={24} /> },
  { id: "sec", label: "Security & Compliance", icon: <Shield weight="fill" size={24} /> }
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    details: ""
  });

  const handleNext = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.email)) return;
    if (step === 2 && !formData.service) return;
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("email", formData.email);
    
    // Map service ID to readable name for the email
    const serviceName = SERVICES.find(s => s.id === formData.service)?.label || formData.service;
    formDataObj.append("objective", serviceName);
    formDataObj.append("parameters", formData.details);

    try {
      const res = await submitContactForm(formDataObj);
      if (res.success) {
        setIsSuccess(true);
      } else {
        alert(res.error || "Failed to submit request.");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      
      {/* 1. HERO */}
      <section className="relative w-full pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-1.5 bg-white rounded-full border border-slate-200 inline-flex mx-auto items-center gap-2 mb-4 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#84b5fd] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Get In Touch</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a2540] leading-[1.1]"
          >
            Let's build your <br/>
            <span className="italic text-[#84b5fd]">competitive advantage.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mt-4"
          >
            Speak with our engineering leadership to design a custom architecture roadmap for your organization.
          </motion.p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: FORM & TRUST FACTORS */}
      <section className="w-full pb-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: The Step-by-Step Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] border border-slate-200/60 relative overflow-hidden flex flex-col">
            
            {/* Progress Bar */}
            {!isSuccess && (
              <div className="w-full mb-10">
                <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className={step >= 1 ? "text-[#84b5fd]" : ""}>Details</span>
                  <span className={step >= 2 ? "text-[#84b5fd]" : ""}>Service</span>
                  <span className={step >= 3 ? "text-[#84b5fd]" : ""}>Project</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className={`h-full bg-[#84b5fd] transition-all duration-500 ease-in-out ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
                </div>
              </div>
            )}

            <div className="relative flex-1 min-h-[350px]">
              <AnimatePresence mode="wait">
                
                {/* SUCCESS STATE */}
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle weight="fill" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0a2540] mb-4">Request Received</h3>
                    <p className="text-slate-600 font-medium max-w-md mx-auto">
                      Thank you, {formData.firstName}. Your architecture review request has been securely submitted. A Senior Architect will contact you within 2 hours.
                    </p>
                  </motion.div>
                ) : (
                  
                  /* FORM STEPS */
                  <motion.form 
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}
                    className="flex flex-col h-full"
                  >
                    {/* STEP 1: Personal Details */}
                    {step === 1 && (
                      <div className="flex flex-col gap-6">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#0a2540] mb-2">Let's start with the basics</h3>
                          <p className="text-slate-500 font-medium text-sm">Who are we speaking with today?</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#0a2540]">First Name</label>
                            <input 
                              type="text" 
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#84b5fd]/50 focus:bg-white transition-all font-medium" 
                              placeholder="John" 
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#0a2540]">Last Name</label>
                            <input 
                              type="text" 
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#84b5fd]/50 focus:bg-white transition-all font-medium" 
                              placeholder="Doe" 
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-bold text-[#0a2540]">Corporate Email</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#84b5fd]/50 focus:bg-white transition-all font-medium" 
                            placeholder="john@enterprise.com" 
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Service Selection */}
                    {step === 2 && (
                      <div className="flex flex-col gap-6">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#0a2540] mb-2">What brings you to us?</h3>
                          <p className="text-slate-500 font-medium text-sm">Select the core area you need engineering support with.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {SERVICES.map((srv) => (
                            <div 
                              key={srv.id}
                              onClick={() => setFormData({...formData, service: srv.id})}
                              className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col gap-3
                                ${formData.service === srv.id 
                                  ? 'border-[#84b5fd] bg-blue-50/50 shadow-sm' 
                                  : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50'
                                }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formData.service === srv.id ? 'bg-[#84b5fd] text-white' : 'bg-slate-100 text-slate-400'}`}>
                                {srv.icon}
                              </div>
                              <span className={`font-bold ${formData.service === srv.id ? 'text-[#0a2540]' : 'text-slate-600'}`}>
                                {srv.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Project Details */}
                    {step === 3 && (
                      <div className="flex flex-col gap-6">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#0a2540] mb-2">Project Overview</h3>
                          <p className="text-slate-500 font-medium text-sm">Briefly describe your operational bottlenecks or project goals.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <textarea 
                            required
                            rows={5} 
                            value={formData.details}
                            onChange={(e) => setFormData({...formData, details: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#84b5fd]/50 focus:bg-white transition-all resize-none font-medium" 
                            placeholder="We are currently facing inefficiencies with our legacy CRM and need to automate..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-auto pt-10">
                      {step > 1 ? (
                        <button 
                          type="button" 
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors flex items-center gap-2"
                        >
                          <ArrowLeft weight="bold" /> Back
                        </button>
                      ) : <div />}
                      
                      {step < 3 ? (
                        <button 
                          type="button" 
                          onClick={handleNext}
                          disabled={step === 1 && (!formData.firstName || !formData.lastName || !formData.email) || (step === 2 && !formData.service)}
                          className="bg-[#0a2540] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                        >
                          Continue <ArrowRight weight="bold" />
                        </button>
                      ) : (
                        <button 
                          type="submit" 
                          disabled={isSubmitting || !formData.details}
                          className="bg-[#84b5fd] disabled:opacity-70 hover:bg-blue-600 text-white px-10 py-3.5 rounded-xl font-bold transition-all shadow-[0_8px_20px_-6px_rgba(132,181,253,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </button>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Trust Factors (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-10 lg:pl-6">
             
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-[#84b5fd] mb-6">Service Level Agreements</h4>
               <div className="flex flex-col gap-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#84b5fd] flex items-center justify-center shrink-0 border border-blue-100">
                     <Clock weight="fill" size={24} />
                   </div>
                   <div className="pt-1">
                     <p className="font-bold text-[#0a2540] text-lg mb-1">Rapid Response</p>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">All inquiries are reviewed by a Senior Architect and responded to within 2 hours.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 border border-indigo-100">
                     <ShieldCheck weight="fill" size={24} />
                   </div>
                   <div className="pt-1">
                     <p className="font-bold text-[#0a2540] text-lg mb-1">Absolute Confidentiality</p>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">We operate under strict zero-trust NDA for all architecture audits and reviews.</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="w-full h-[1px] bg-slate-200/60" />

             <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2 text-[#0a2540] font-bold">
                 <Envelope weight="fill" className="text-[#84b5fd]" size={20} /> Direct Contact
               </div>
               <div className="flex flex-col gap-1.5 pl-7">
                 <a href="mailto:info@logicwaretech.com" className="text-slate-500 hover:text-[#84b5fd] transition-colors font-medium">info@logicwaretech.com</a>
                 <a href="tel:+919940644543" className="text-slate-500 hover:text-[#84b5fd] transition-colors font-medium">+91 99406 44543</a>
               </div>
             </div>

             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-[#84b5fd] mb-6">Engagement Models</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-2 group hover:border-[#84b5fd]/30 transition-colors">
                   <p className="font-bold text-[#0a2540]">Fixed Price</p>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed">Best for well-defined scopes with strict budget control.</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-2 group hover:border-[#84b5fd]/30 transition-colors">
                   <p className="font-bold text-[#0a2540]">Dedicated Pods</p>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed">Scale your capacity instantly with managed engineering pods.</p>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
