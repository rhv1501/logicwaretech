"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { globalIsInitialLoad, setGlobalInitialLoadComplete } from "@/utils/store";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(globalIsInitialLoad);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!globalIsInitialLoad) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        const nextVal = prev + Math.floor(Math.random() * 10) + 5;
        if (nextVal >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setGlobalInitialLoadComplete();
          }, 800); // Hold at 100% for 800ms
          return 100;
        }
        return nextVal;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#141624] text-white flex flex-col items-center justify-center font-mono"
        >
          <div className="flex flex-col gap-4 items-center">
            <span className="text-primary font-bold text-lg md:text-xl tracking-widest uppercase">
              {">"} Initiating Architecture...
            </span>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="text-white/50 text-sm">[{progress}%]</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
