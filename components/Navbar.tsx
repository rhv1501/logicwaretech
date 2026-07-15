"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { List, X, CaretDown, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { 
    href: "/compliance", 
    label: "Compliance",
    subLinks: [
      { href: "/compliance#iso-27001", label: "ISO 27001" },
      { href: "/compliance#dpdpa-compliance", label: "DPDPA" },
      { href: "/compliance#it-risk-management", label: "IT Risk" },
    ]
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-slate-200 h-16 sm:h-20 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity shrink-0 py-2"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="/logo.png" 
              alt="LogicWare Tech" 
              className="h-10 sm:h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => (
              link.subLinks ? (
                <div key={link.href} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-bold tracking-wide text-slate-600 hover:text-[#84b5fd] transition-colors h-full"
                  >
                    {link.label}
                    <CaretDown size={14} weight="bold" />
                  </Link>
                  <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 mt-0 w-56 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden py-2 z-50">
                    {link.subLinks.map(sub => (
                      <Link key={sub.href} href={sub.href} className="px-5 py-2.5 hover:bg-slate-50 text-sm font-bold text-slate-700 hover:text-[#84b5fd] transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-sm font-bold tracking-wide text-slate-600 hover:text-[#84b5fd] transition-colors h-full"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-[#84b5fd] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors"
            >
              Start Project
            </Link>

            <button
              className="lg:hidden relative flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 border border-slate-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X weight="bold" size={20} /> : <List weight="bold" size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-[72px] sm:pt-[88px] px-4 pb-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 w-full">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="flex flex-col border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <Link
                    href={link.href}
                    className="text-xl font-bold text-slate-900 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col gap-2 mt-2 pl-4 border-l-2 border-slate-100 ml-2">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.href} 
                          href={sub.href} 
                          className="text-base font-medium text-slate-600 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-[#84b5fd] text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Start Project <ArrowRight weight="bold" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
