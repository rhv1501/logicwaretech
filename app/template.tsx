"use client";

import { motion } from "framer-motion";
import { globalIsInitialLoad } from "@/utils/store";

export default function Template({ children }: { children: React.ReactNode }) {
  // If globalIsInitialLoad is true, this is the very first page render.
  // The preloader takes roughly ~2.4 seconds to complete now. 
  // We delay the content entry animation so it doesn't load until the preloader splits open.
  const delayTime = globalIsInitialLoad ? 2.4 : 0.4;

  return (
    <>
      {/* The Curtain Wipe */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: globalIsInitialLoad ? 2.4 : 0 }}
        className="fixed top-0 left-0 w-full bg-[#141624] z-[9998] pointer-events-none shadow-2xl"
        style={{ transformOrigin: "top" }}
      />
      
      {/* The Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delayTime, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col flex-1"
      >
        {children}
      </motion.div>
    </>
  );
}
