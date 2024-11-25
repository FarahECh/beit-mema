"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  index: number;
  title: string;
  description: string;
}

export default function FAQItem(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-main/20 rounded-xl p-8 cursor-pointer min-h-[120px]"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-dark/60 font-metropolis-regular text-5xl">
            {props.index}
          </p>
          <p className="font-metropolis-medium text-xl">{props.title}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-main" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-metropolis-regular text-dark/80 mt-4 pl-20">
              {props.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
