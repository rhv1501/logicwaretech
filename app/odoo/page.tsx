"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, XCircle, WarningCircle,
  Receipt, Package, Factory, UsersThree, 
  ArrowRight, Phone, Envelope, CaretDown, 
  ChatCircleDots, Buildings,
  Database, Lightning, ChartLineUp, DeviceMobile,
  ArrowsClockwise, Gear
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function OdooPage() {
  const [activeCompTab, setActiveCompTab] = useState<"tally" | "zoho" | "bigerp">("tally");
  const [openFaq, setOpenFaq] = useState<string | null>("faq1");
  const [heroToggle, setHeroToggle] = useState<"logicware" | "traditional">("logicware");
  
  // Lead Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    currentSystem: "Tally",
    modules: [] as string[],
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleModuleToggle = (mod: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(mod)
        ? prev.modules.filter(m => m !== mod)
        : [...prev.modules, mod]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      setSubmitError("Please provide your name, work email, and phone number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");

    const fd = new FormData();
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName || "-");
    fd.append("email", formData.email);
    fd.append("objective", "Logicware Tech + Odoo ERP Consultation");
    fd.append(
      "parameters",
      `Company: ${formData.company || "Not specified"}\nPhone: ${formData.phone}\nCurrent Software: ${formData.currentSystem}\nTarget Modules: ${formData.modules.join(", ") || "Full Business OS"}\nOperational Challenge: ${formData.notes || "None provided"}`
    );

    try {
      const res = await submitContactForm(fd);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(res.error || "Submission failed. Please call our engineering desk directly.");
      }
    } catch {
      setSubmitError("Network connection interrupted. Please call +91 99406 44543 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#f8fafc] text-[#0a2540] font-sans selection:bg-[#84b5fd] selection:text-white">

      {/* 1. HERO SECTION: Minimal, High-Contrast, Authoritative */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
        
        {/* Soft Ambient Radiance */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#84b5fd]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Clear, Plain, Confident Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Official Partner Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a2540]">
                Official Odoo Partner
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-slate-500">
                Logicware Tech Engineering
              </span>
            </div>

            {/* H1: Plain, Category-First, Punchy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0a2540] leading-[1.08] mb-6">
              Custom Odoo ERP for Growing Companies.
            </h1>

            {/* Subhead: On-point, Crisp, High Rhythm */}
            <div className="space-y-3.5 mb-8 max-w-2xl">
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
                We replace disconnected Tally files and spreadsheets with a unified Odoo platform—then engineer automated workflows from godown dispatch to WhatsApp payment recovery.
              </p>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Go-live in 3 to 6 weeks with zero operational downtime</span>
              </div>
            </div>

            {/* 3 Hard Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Migration</div>
                <div className="text-sm font-bold text-[#0a2540] mt-0.5">100% Tally & Excel Data Reconciled</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Automations</div>
                <div className="text-sm font-bold text-[#0a2540] mt-0.5">80% Repetitive Tasks on Autopilot</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compliance</div>
                <div className="text-sm font-bold text-[#0a2540] mt-0.5">Direct GST, e-Way & WhatsApp API</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="#book-audit" 
                className="w-full sm:w-auto bg-[#0a2540] hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                Book a 30-Minute Architecture Audit <ArrowRight weight="bold" />
              </a>
              <a 
                href="#comparisons" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0a2540] border border-slate-300 px-7 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Compare with Tally & Zoho
              </a>
            </div>

          </div>

          {/* Right Column: Intuitive Operational Shift Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-7 relative">
              
              {/* Header with 2-way toggle */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    The Daily Transformation
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${heroToggle === "logicware" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>
                    {heroToggle === "logicware" ? "● All 4 Departments Synced" : "⚠️ Disconnected Tools"}
                  </span>
                </div>

                {/* The 2-way switcher */}
                <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setHeroToggle("logicware")}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      heroToggle === "logicware"
                        ? "bg-[#0a2540] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>With Logicware + Odoo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroToggle("traditional")}
                    className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      heroToggle === "traditional"
                        ? "bg-[#0a2540] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>The Old Way</span>
                  </button>
                </div>
              </div>

              {/* Dynamic View based on toggle */}
              <AnimatePresence mode="wait">
                {heroToggle === "logicware" ? (
                  <motion.div
                    key="logicware-view"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    {/* Row 1: Sales */}
                    <div className="bg-slate-50 hover:bg-blue-50/40 p-3.5 rounded-xl border border-slate-200/80 transition-colors flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ChartLineUp weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-[#0a2540]">1. Sales & Inquiries</h4>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">Auto-Reserved</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Customer approves quotation online. Stock is automatically reserved in the godown with zero phone calls.
                        </p>
                      </div>
                    </div>

                    {/* Row 2: Warehouse */}
                    <div className="bg-slate-50 hover:bg-purple-50/40 p-3.5 rounded-xl border border-slate-200/80 transition-colors flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Package weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-[#0a2540]">2. Warehouse Dispatch</h4>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">Barcode Verified</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Staff scan barcodes on handheld mobile phones. Inventory counts stay 100% accurate across all branches.
                        </p>
                      </div>
                    </div>

                    {/* Row 3: Billing */}
                    <div className="bg-slate-50 hover:bg-emerald-50/40 p-3.5 rounded-xl border border-slate-200/80 transition-colors flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Receipt weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-[#0a2540]">3. Indian GST Invoicing</h4>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">e-Invoice Ready</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Generates IRN hash and QR code on the invoice with one click. Automated payment reminders sent on WhatsApp.
                        </p>
                      </div>
                    </div>

                    {/* Row 4: Leadership */}
                    <div className="bg-slate-50 hover:bg-amber-50/40 p-3.5 rounded-xl border border-slate-200/80 transition-colors flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <DeviceMobile weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-[#0a2540]">4. Owner&apos;s Mobile Phone</h4>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">Live Margins</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Check today&apos;s net profit margin, bank balance, and dispatch count anywhere in the world on your phone.
                        </p>
                      </div>
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle weight="fill" size={14} className="text-emerald-600" />
                        Single source of truth
                      </span>
                      <span>Zero manual data re-typing</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="traditional-view"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    {/* Row 1: Sales */}
                    <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-slate-800">1. Orders in WhatsApp Chats</h4>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Lost Deals</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Customer requirements buried in chat threads. Sales reps forget follow-ups, and orders drop through the cracks.
                        </p>
                      </div>
                    </div>

                    {/* Row 2: Warehouse */}
                    <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-slate-800">2. Inventory on Excel Sheets</h4>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Stockouts</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Spreadsheets are always out of date. Sales promises delivery, but the warehouse physically ran out days ago.
                        </p>
                      </div>
                    </div>

                    {/* Row 3: Billing */}
                    <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-slate-800">3. Manual Re-entry in Tally</h4>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Typo Risks</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Accountants spend half their day manually re-typing paper delivery slips into Tally vouchers. Human typos cause GST issues.
                        </p>
                      </div>
                    </div>

                    {/* Row 4: Leadership */}
                    <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-200/80 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle weight="fill" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-xs font-bold text-slate-800">4. Owner Calling Managers</h4>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Blind Decisions</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          The owner has to call 3 different people just to know daily cash collection and net profit margin.
                        </p>
                      </div>
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5 text-rose-700">
                        <WarningCircle weight="fill" size={14} className="text-rose-600" />
                        14+ hours wasted every week
                      </span>
                      <span>Constant manual reconciling</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* 2. THE LOGICWARE TECH + ODOO FORMULA (The Core Differentiator) */}
      <section className="w-full py-20 px-4 sm:px-6 bg-white border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              The Engineering Distinction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
              Why Odoo Needs Logicware Tech.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Vanilla Odoo is an open-source engine with hundreds of generic settings. It only becomes your company&apos;s unfair competitive advantage when engineered to fit your exact floor operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-6">
                  <Lightning weight="fill" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2.5">Custom Python Modules</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Basic consultants only check standard boxes. If you have a custom 3-tier discount structure, unique commission slabs, or specialized shop-floor job cards, our engineers write clean, upgrade-safe Python code directly into your instance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a2540]">
                Tailored to your exact business rules
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl mb-6">
                  <ArrowsClockwise weight="bold" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2.5">Workflow Automations</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We turn static ERP entries into an autonomous operating engine. Approved orders trigger godown picking slips, low stock drafts purchase orders, and payment reminders send over WhatsApp without staff intervention.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a2540]">
                Eliminates 15+ hours of routine manual data entry
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-6">
                  <Database weight="fill" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2.5">Zero-Downtime Tally Migration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Moving from Tally or Excel can feel terrifying. Logicware builds parallel migration pipelines: we extract, clean, and balance your trial balance, opening stock, and supplier ledgers down to the rupee before your team switches.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a2540]">
                Zero loss of historical records
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl mb-6">
                  <UsersThree weight="fill" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2.5">On-Ground Staff Adoption</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The #1 reason ERP rollouts fail is staff resistance. We spend hours training your accountants, storekeepers, and dispatch managers in simple, practical language until they feel faster on Odoo than their old tools.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-[#0a2540]">
                Backed by direct phone and WhatsApp support
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 AUTONOMOUS BUSINESS OPERATIONS (Deep-Dive into Real Automations) */}
      <section className="w-full py-20 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Autonomous Business Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
            What Runs on Autopilot with Logicware + Odoo.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Most ERPs sit idle waiting for employees to type in numbers. We engineer event-driven automated loops directly into your Odoo database, so your core business procedures execute accurately without constant manager supervision.
          </p>
        </div>

        {/* 4 Concrete Automation Workflows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Loop 1: Order-to-Dispatch */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                  Loop 01 • Sales to Warehouse
                </span>
                <span className="text-xs font-semibold text-slate-400">Trigger: Digital Signature</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                Order-to-Dispatch Auto-Flow
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When a customer approves a quote or a rep confirms a sale, Odoo takes over the logistical chain without a single coordination phone call:
              </p>
              
              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-blue-600 shrink-0">1.</span>
                  <span>Inventory is instantly reserved in the assigned branch or godown.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-blue-600 shrink-0">2.</span>
                  <span>Picking slip routes directly to the warehouse staff&apos;s mobile handheld screen.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-blue-600 shrink-0">3.</span>
                  <span>Staff scan barcodes to verify items; packing slip and GST e-Way bill generate with zero manual typing.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-700 flex items-center gap-1.5">
                <CheckCircle weight="fill" size={14} className="text-emerald-600" /> Zero miscommunicated orders
              </span>
              <span className="text-slate-400">45 minutes saved per dispatch</span>
            </div>
          </div>

          {/* Loop 2: WhatsApp Payment Recovery */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                  Loop 02 • Receivables & Cash Flow
                </span>
                <span className="text-xs font-semibold text-slate-400">Trigger: Tax Invoice Validated</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                Automated WhatsApp Payment Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Chasing client payments manually burns hours of your team&apos;s time. Logicware connects your Odoo invoice register directly to the official WhatsApp Business API:
              </p>
              
              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-emerald-600 shrink-0">1.</span>
                  <span>Invoice PDF with Indian GST QR code is sent to the client&apos;s finance contact via WhatsApp.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-emerald-600 shrink-0">2.</span>
                  <span>Polite payment reminders deliver 3 days before due date with instant UPI / Netbanking link.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-emerald-600 shrink-0">3.</span>
                  <span>Overdue invoices alert your account manager and automatically pause new shipments.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-700 flex items-center gap-1.5">
                <CheckCircle weight="fill" size={14} className="text-emerald-600" /> Cash collected 18 days faster
              </span>
              <span className="text-slate-400">Zero awkward reminder calls</span>
            </div>
          </div>

          {/* Loop 3: Zero-Stockout Auto-Reordering */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  Loop 03 • Purchasing & Raw Materials
                </span>
                <span className="text-xs font-semibold text-slate-400">Trigger: Minimum Stock Threshold</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                Zero-Stockout Auto-Reordering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Discovering that raw materials or best-selling SKUs are out of stock halts operations. Odoo monitors live stock movement and reorders automatically:
              </p>
              
              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-purple-600 shrink-0">1.</span>
                  <span>When physical stock dips to safety level, Odoo computes order quantity based on lead times.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-purple-600 shrink-0">2.</span>
                  <span>Automatically drafts a Purchase Order (PO) to your approved supplier at contract rates.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-purple-600 shrink-0">3.</span>
                  <span>Director receives a 1-tap WhatsApp prompt to approve or edit the PO before it transmits to vendor.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-700 flex items-center gap-1.5">
                <CheckCircle weight="fill" size={14} className="text-emerald-600" /> Never run out of fast-moving stock
              </span>
              <span className="text-slate-400">Capital protected from over-ordering</span>
            </div>
          </div>

          {/* Loop 4: Owner Digest */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                  Loop 04 • Executive Intelligence
                </span>
                <span className="text-xs font-semibold text-slate-400">Trigger: Scheduled Daily</span>
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-3">
                Owner Digest
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Business owners should not have to chase 3 different managers for daily numbers. Every evening, our automated scheduler generates an executive briefing:
              </p>
              
              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-amber-600 shrink-0">1.</span>
                  <span>Calculates today&apos;s total billed revenue and cash collected across all bank accounts.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-amber-600 shrink-0">2.</span>
                  <span>Summarizes dispatched orders, pending shipments, and factory production units finished.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="font-mono font-bold text-amber-600 shrink-0">3.</span>
                  <span>Delivers a confidential 4-point WhatsApp summary directly to your private phone number.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-700 flex items-center gap-1.5">
                <CheckCircle weight="fill" size={14} className="text-emerald-600" /> 100% operational clarity in 60 seconds
              </span>
              <span className="text-slate-400">Zero manual evening reporting</span>
            </div>
          </div>

        </div>

        {/* Integration Callout */}
        <div className="mt-8 bg-slate-100/90 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0a2540] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <Gear weight="fill" size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0a2540]">Custom Business Rules & Third-Party API Connectors</h4>
              <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
                Have proprietary rules? We engineer custom Python triggers, Odoo automated actions, and REST webhooks to connect your ERP with WhatsApp Business, logistics carriers, IndiaMART leads, Shopify, or biometric attendance machines.
              </p>
            </div>
          </div>
          <a 
            href="#book-audit" 
            className="shrink-0 text-xs font-bold bg-[#0a2540] text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            Review Your Automation Requirements
          </a>
        </div>

      </section>

      {/* 3. HONEST SOFTWARE COMPARISONS (Minimalist & Transparent) */}
      <section id="comparisons" className="w-full py-20 md:py-28 px-4 sm:px-6 max-w-[1400px] mx-auto scroll-mt-20">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Market Alternatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
            Odoo Compared to Tally, Zoho & Legacy ERPs.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every software has a purpose. Here is how Odoo compares objectively when your company grows past simple bookkeeping.
          </p>

          {/* Minimal Tab Switcher */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl mt-8">
            <button
              type="button"
              onClick={() => setActiveCompTab("tally")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeCompTab === "tally" ? "bg-white text-[#0a2540] shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              vs. Tally Prime
            </button>
            <button
              type="button"
              onClick={() => setActiveCompTab("zoho")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeCompTab === "zoho" ? "bg-white text-[#0a2540] shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              vs. Zoho Suite
            </button>
            <button
              type="button"
              onClick={() => setActiveCompTab("bigerp")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeCompTab === "bigerp" ? "bg-white text-[#0a2540] shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              vs. SAP / NetSuite
            </button>
          </div>
        </div>

        {/* Tab 1: Odoo vs Tally */}
        {activeCompTab === "tally" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="border-r-0 md:border-r border-slate-100 pr-0 md:pr-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">Tally Prime</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Single-PC Accounting</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Tally is reliable for traditional accounting entries, but it was not designed to manage a modern multi-department operation.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Desktop locked; difficult to access live data on phones or tablets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>No native CRM; cannot track sales leads, quotes, or rep pipelines</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Cannot manage multi-warehouse barcode stock or route racks live</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Zero automated workflows; manual voucher re-typing for every single transaction</span>
                </li>
              </ul>
            </div>

            <div className="pl-0 md:pl-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-700">Odoo + Logicware</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">All-In-One Cloud OS</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Odoo gives you complete accounting and GST, while simultaneously coordinating your sales, inventory, and production automatically.
              </p>
              <ul className="space-y-3.5 text-sm text-[#0a2540] font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Native cloud and mobile apps for iPhone, Android, and tablets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Fully integrated sales CRM with WhatsApp and quote e-signatures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Mobile barcode scanning across unlimited branches and godowns</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Automated workflows: approved quotes trigger godown picking slips and GST invoices</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Odoo vs Zoho */}
        {activeCompTab === "zoho" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="border-r-0 md:border-r border-slate-100 pr-0 md:pr-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">Zoho Suite (Zoho One)</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Piecemeal Apps</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Zoho provides dozens of individual apps (Books, CRM, Inventory), but they are separate databases connected via webhook sync scripts.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Sync lag and webhook failures cause stock and invoice discrepancies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Automations split across isolated apps, limited by webhook quotas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Restricted to proprietary Deluge scripting language with hard API limits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Strict cloud lock-in with zero option for private server deployment</span>
                </li>
              </ul>
            </div>

            <div className="pl-0 md:pl-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-700">Odoo + Logicware</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">Single Relational Core</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Odoo uses one single database. When an invoice is created, it natively references the exact same line item as the delivery slip.
              </p>
              <ul className="space-y-3.5 text-sm text-[#0a2540] font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Zero sync delays; every department sees the identical live record</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Native Python automated actions running directly in the unified database</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Unrestricted Python & PostgreSQL architecture for complex operations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Deploy on Odoo Cloud, AWS, Google Cloud, or your private company server</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Odoo vs Big ERPs */}
        {activeCompTab === "bigerp" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="border-r-0 md:border-r border-slate-100 pr-0 md:pr-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">SAP / Oracle NetSuite</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Legacy Monolith</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Designed for multi-billion-dollar multinationals with massive dedicated IT departments and years of implementation patience.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Multi-crore licensing fees and high hourly consulting rates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>12 to 18 month sluggish implementation cycles that disrupt business</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Rigid software processes that force you to change how your company runs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle weight="fill" className="text-rose-500 shrink-0 mt-0.5" size={18} />
                  <span>Clunky, complex user interfaces that require weeks of specialized training</span>
                </li>
              </ul>
            </div>

            <div className="pl-0 md:pl-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-700">Odoo + Logicware</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">Agile Enterprise ERP</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Delivers enterprise-grade internal controls and reporting at 75% lower total cost of ownership, deployed in 4 to 6 weeks.
              </p>
              <ul className="space-y-3.5 text-sm text-[#0a2540] font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Fraction of the cost with transparent, predictable user licensing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Phased go-live: see working modules operational within 30 days</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Agile automations: adjust workflows in days using Python without costly tickets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle weight="fill" className="text-blue-600 shrink-0 mt-0.5" size={18} />
                  <span>Clean, modern web design that on-ground staff learn within 2 to 3 days</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </section>

      {/* 4. PRE-ARCHITECTED INDUSTRY VERTICALS */}
      <section className="w-full py-20 px-4 sm:px-6 bg-white border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Industry Blueprints
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
              Pre-Configured for Your Industry.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              We have already engineered the custom data models and approval workflows for your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                <Factory weight="fill" size={20} />
              </div>
              <h3 className="font-bold text-[#0a2540] text-lg mb-2">Manufacturing</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Bill of Materials (BOM), machine routings, scrap logging, and shop-floor tablet mode for production workers.
              </p>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                ✓ Full MRP Control
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
                <Package weight="fill" size={20} />
              </div>
              <h3 className="font-bold text-[#0a2540] text-lg mb-2">Wholesale & Trade</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Multi-godown inventory, batch and expiry dates, dealer credit limits, and automated B2B bulk order portals.
              </p>
              <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
                ✓ Multi-Location Sync
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                <Receipt weight="fill" size={20} />
              </div>
              <h3 className="font-bold text-[#0a2540] text-lg mb-2">Multi-Store Retail</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Cloud POS that works even during internet disconnects, barcode thermal printing, and centralized purchase replenishment.
              </p>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                ✓ Offline POS Mode
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                <Buildings weight="fill" size={20} />
              </div>
              <h3 className="font-bold text-[#0a2540] text-lg mb-2">Contracting & Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Job costing, employee timesheet tracking, milestone billing, contractor expense receipts, and project margin analytics.
              </p>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                ✓ Real Margin Tracking
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. IMPLEMENTATION ROADMAP: Clear, 4-Stage Sprint Plan */}
      <section className="w-full py-20 px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Sprint Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
            The 4-Stage Delivery Blueprint.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            No endless theoretical consulting. We work in strict 2-week agile sprints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">WEEK 01</span>
            <h4 className="font-bold text-[#0a2540] text-lg mt-4 mb-2">Discovery & Blueprint</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We review your existing Tally registers, Excel formulas, and paper bottlenecks to document your exact operational Blueprint.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">WEEKS 02–03</span>
            <h4 className="font-bold text-[#0a2540] text-lg mt-4 mb-2">Python Logic & Automations</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We configure your Odoo environment, code custom business logic modules, connect Indian GST e-invoicing APIs, and build your automated dispatch, WhatsApp recovery, and approval pipelines.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">WEEKS 03–04</span>
            <h4 className="font-bold text-[#0a2540] text-lg mt-4 mb-2">Data Migration & Testing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We migrate historical customer masters, vendor ledgers, and opening stock in a sandbox. Full dry-run verification down to the rupee.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">WEEKS 05–06</span>
            <h4 className="font-bold text-[#0a2540] text-lg mt-4 mb-2">Cutover & Staff Training</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero downtime weekend cutover. Hands-on staff training with step-by-step guides, backed by dedicated SLA support.
            </p>
          </div>

        </div>
      </section>

      {/* 6. PLAIN-ENGLISH FAQ ACCORDION */}
      <section className="w-full py-20 px-4 sm:px-6 max-w-[900px] mx-auto border-t border-slate-200/80">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Common Questions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight mt-2">
            Answers in Plain English.
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              id: "faq1",
              q: "Will our accountants find it difficult to transition from Tally?",
              a: "No. While Tally relies heavily on keyboard shortcuts, Odoo uses clean, intuitive screens. We configure customized ledger views and shortcuts so your accounts team feels comfortable within 2 to 3 days. We also train your accountants directly on Indian GST and reconciliation."
            },
            {
              id: "faq2",
              q: "Will our daily business have to pause during the migration?",
              a: "Zero downtime. We perform all data extraction, cleaning, and testing in a parallel staging environment while your team continues working in Tally and Excel. Once everything is verified, we perform the final cutover over a weekend."
            },
            {
              id: "faq3",
              q: "How does Odoo handle Indian GST and e-Invoicing?",
              a: "Odoo is fully localized for Indian taxation. You can generate e-Invoices with valid IRN numbers and QR codes, and create e-Way bills with a single click directly from delivery orders without logging into government portals manually."
            },
            {
              id: "faq4",
              q: "Can Odoo run on mobile phones and tablets?",
              a: "Yes. Odoo provides official iOS and Android apps. Business owners can check live cash flow, margins, and pending approvals anywhere, while warehouse staff use phones or rugged tablets for barcode scanning."
            },
            {
              id: "faq5",
              q: "What if our business has unique workflows that standard Odoo lacks?",
              a: "That is where Logicware Tech specializes. As full-stack software engineers and official Odoo partners, we write custom Python modules for your proprietary pricing formulas, multi-level approval hierarchies, or specialized trade logic."
            },
            {
              id: "faq6",
              q: "Can Odoo send automated WhatsApp messages to our clients and suppliers?",
              a: "Yes. Logicware Tech integrates official WhatsApp Business APIs directly into your Odoo workflows. Your system automatically delivers GST invoice PDFs, dispatch tracking numbers, order confirmations, and scheduled payment reminders without manual effort from your team."
            }
          ].map(faq => (
            <div 
              key={faq.id}
              onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              className="bg-white border border-slate-200 rounded-2xl cursor-pointer p-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540]">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400"
                >
                  <CaretDown weight="bold" size={16} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed pt-2 border-t border-slate-100">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HIGH-CONVERTING AUDIT BOOKING SECTION: Clean, Focused, Direct */}
      <section id="book-audit" className="w-full py-20 px-4 sm:px-6 mb-20 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto bg-[#0a2540] rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-white shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left 5 Cols: Direct Proposition */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  Free 30-Minute Architecture Audit
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
                  Put Your Operations on One Unified Platform.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Schedule an engineering consultation with our implementation leads. We will review your current Tally, Zoho, or Excel bottlenecks and provide a realistic roadmap and fixed-price quote.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200 mb-8 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle weight="fill" className="text-blue-400 shrink-0" size={18} />
                    <span>Objective analysis of your current manual spreadsheets</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle weight="fill" className="text-blue-400 shrink-0" size={18} />
                    <span>Demo of custom Odoo modules tailored to your sector</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle weight="fill" className="text-blue-400 shrink-0" size={18} />
                    <span>Fixed timeline, migration schedule, and investment scope</span>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Direct Engineering Desk
                </div>
                <div className="flex flex-col gap-2.5 text-sm text-slate-200">
                  <a href="tel:+919940644543" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone weight="fill" className="text-blue-400" size={16} />
                    <span>+91 99406 44543</span>
                  </a>
                  <a href="mailto:info@logicwaretech.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Envelope weight="fill" className="text-blue-400" size={16} />
                    <span>info@logicwaretech.com</span>
                  </a>
                  <a 
                    href="https://wa.me/919940644543?text=Hi%20Logicware%2C%20I%20would%20like%20to%20discuss%20custom%20Odoo%20ERP%20for%20our%20company." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 font-bold transition-colors mt-1"
                  >
                    <ChatCircleDots weight="fill" size={16} />
                    <span>Message Directly on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: The Booking Form */}
            <div className="lg:col-span-7 bg-white text-slate-800 rounded-2xl p-6 sm:p-9 shadow-lg">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                    <CheckCircle weight="fill" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a2540] mb-2">Audit Request Confirmed</h3>
                  <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you, <strong>{formData.firstName}</strong>. Our lead Odoo architect will reach out shortly by phone or email.
                  </p>
                  <a 
                    href="https://wa.me/919940644543?text=Hi%20Logicware%2C%20I%20just%20submitted%20the%20Odoo%20ERP%20audit%20form." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider"
                  >
                    <ChatCircleDots weight="fill" size={16} /> Ping Us on WhatsApp for Priority Scheduling
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2540]">Schedule Your Odoo Audit</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Please provide basic details so our engineers can review your current stack.</p>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Swastik"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dave"
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Your Business or Brand"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Current System
                      </label>
                      <select
                        value={formData.currentSystem}
                        onChange={e => setFormData({...formData, currentSystem: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="Tally Prime / ERP 9">Tally Prime / ERP 9</option>
                        <option value="Zoho Books / Zoho One">Zoho Books / Zoho One</option>
                        <option value="Busy Accounting">Busy Accounting</option>
                        <option value="Excel & Spreadsheets">Excel & Spreadsheets</option>
                        <option value="SAP / NetSuite">SAP / NetSuite</option>
                        <option value="Other Software">Other Software</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Target Operations (Select What You Need)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Sales CRM",
                        "Invoicing & GST",
                        "Multi-Warehouse Inventory",
                        "Manufacturing MRP",
                        "Workflow Automations",
                        "WhatsApp ERP Integration",
                        "HR & Payroll",
                        "Tally Data Migration"
                      ].map(mod => {
                        const isSelected = formData.modules.includes(mod);
                        return (
                          <button
                            type="button"
                            key={mod}
                            onClick={() => handleModuleToggle(mod)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                              isSelected
                                ? "bg-[#0a2540] text-white border-[#0a2540]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}{mod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Primary Operational Challenge (Optional)
                    </label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. Stock counts in godown never match billing records..."
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#0a2540] font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0a2540] hover:bg-slate-800 text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 mt-1"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Audit Parameters...
                      </>
                    ) : (
                      <>
                        Schedule 30-Minute Architecture Audit <ArrowRight weight="bold" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Strict NDA Protected. Your financial and inventory data remains 100% confidential.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
