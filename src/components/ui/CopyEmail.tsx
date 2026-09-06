"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCursorContext } from "@/components/ui/Cursor";

interface ToastProps {
  message: string;
  isVisible: boolean;
}

function Toast({ message, isVisible }: ToastProps) {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 bg-foreground text-background text-sm font-display uppercase tracking-wider rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      {message}
    </motion.div>
  );
}

export function useCopyToClipboard() {
  const [showToast, setShowToast] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return { copy, showToast };
}

export function CopyEmail({ email }: { email: string }) {
  const { copy, showToast } = useCopyToClipboard();
  const { setCursorVariant } = useCursorContext();

  return (
    <>
      <button
        onClick={() => copy(email)}
        className="link-underline hover:text-accent transition-colors"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        {email}
      </button>
      <Toast message="Email copied!" isVisible={showToast} />
    </>
  );
}
