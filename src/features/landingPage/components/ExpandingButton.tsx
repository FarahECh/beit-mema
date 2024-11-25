"use client";

import { CONTACT_INFO } from "@/constants/guesthouses";
import { AnimatePresence, motion } from "framer-motion";
import { MailIcon, PhoneIcon, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

interface Props {
  text: string;
  className?: string;
}

export default function ExpandingButton({ text, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (!expanded) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`text-white border-white border py-3 px-6 rounded-lg font-metropolis-regular hover:bg-white hover:text-black transition-all duration-300 ${className}`}
      >
        {text}
      </button>
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 bg-transparent border-none p-0 open:animate-fade-in"
        onClick={() => {
          dialogRef.current?.close();
          setExpanded(false);
        }}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black rounded-lg p-4 flex flex-col gap-3 min-w-[250px]"
            >
              <Link
                href={CONTACT_INFO.phone}
                className="flex items-center gap-3"
              >
                <PhoneIcon className="w-6 h-6" strokeWidth={1} />
                <span>{CONTACT_INFO.phone}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1} />
              </Link>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3"
              >
                <MailIcon className="w-6 h-6" strokeWidth={1} />
                <span>{CONTACT_INFO.email}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1} />
              </Link>
              <Link
                href={`https://wa.me/${CONTACT_INFO.phone}`}
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" strokeWidth={1} />
                <span>{CONTACT_INFO.phone}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </div>
  );
}
