"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 transition-all duration-500",
          scrolled ? "pt-4" : ""
        )}
      >
        <div
          className={cn(
            "flex w-max items-center justify-between gap-12 rounded-full px-8 py-3 transition-all duration-500",
            scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border border-slate-100" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-50 relative hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/logo.png" alt="LogicWare Tech" width={120} height={120} className="w-12 md:w-16 h-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-full glass-button text-primary transition-transform active:scale-95 shadow-skeuo-soft"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X weight="regular" size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <List weight="regular" size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/90 border-t border-slate-100"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl font-serif tracking-tight text-[#111111]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
