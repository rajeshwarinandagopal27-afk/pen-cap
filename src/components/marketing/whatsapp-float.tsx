"use client";

import { motion } from "framer-motion";
import { MessageCircleIcon } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function WhatsappFloat() {
  const message = encodeURIComponent(
    "Hi PenCap, I'd like to know more about your cybersecurity training programs."
  );

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${message}`}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 md:bottom-6"
    >
      <MessageCircleIcon className="size-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
