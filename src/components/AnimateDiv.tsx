import React from "react";
import { motion } from "framer-motion";
export default function AnimateDiv({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1 }}
      className="border-0"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}
