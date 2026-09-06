"use client";

import { useState, useCallback, useEffect, ReactNode, createContext, useContext } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

interface CursorContextType {
  setCursorVariant: (variant: string) => void;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorVariant: () => {},
  setCursorText: () => {},
});

export function useCursorContext() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState("default");
  const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const setCursorVariant = useCallback(
    (v: string) => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        setVariant(v);
        setIsEnabled(true);
      }
    },
    []
  );
  const setCursorText = useCallback((t: string) => {
    setText(t);
    setVariant(t ? "text" : "default");
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorVariant, setCursorText }}>
      {children}
      {isEnabled && (
        <CursorClient variant={variant} text={text} />
      )}
    </CursorContext.Provider>
  );
}

function CursorClient({ variant, text }: { variant: string; text: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const isExpanded = variant === "view" || variant === "link" || variant === "text";

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: isExpanded ? 96 : 12,
        height: isExpanded ? 96 : 12,
        backgroundColor: isExpanded ? "rgba(232, 93, 4, 0.85)" : "rgba(10, 10, 10, 0.9)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.span
            key="text"
            className="text-white text-[10px] font-display uppercase tracking-widest whitespace-nowrap font-medium pointer-events-none"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15 }}
          >
            {text || (variant === "view" ? "View Project" : "Open")}
          </motion.span>
        ) : (
          <motion.span
            key="dot"
            className="block w-full h-full rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: variant === "default" ? 1 : 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}