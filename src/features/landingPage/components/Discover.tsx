"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Discover() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6 md:gap-0 px-4 md:px-0">
      <div className="text-center md:text-left">
        <h1 className="font-made-mirage-regular text-3xl sm:text-4xl md:text-5xl">
          Discover
        </h1>
        <h1 className="font-made-mirage-medium text-3xl sm:text-4xl md:text-5xl">
          Beit Mema
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <p className="font-metropolis-regular text-sm sm:text-base text-center md:text-left max-w-[500px] mx-auto md:mx-0">
          Discover a serene escape nestled amidst nature's embrace at Beit Mema
          Guesthouse. Boasting three (3) distinct guesthouses/apartments –
          Guesthouse Farah, Noura, and Aida respectively – our retreat offers an
          opportunity to disconnect, unwind, and escape in the serene mountains
          of North Lebanon (Batroun District).
        </p>
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="font-metropolis-regular text-sm sm:text-base text-center md:text-left max-w-[500px] mx-auto md:mx-0"
            >
              Beit Mema provides a secluded retreat just 25 minutes away from
              the vibrant beaches, lively parties, and historic souks of
              Batroun. Additionally, it's conveniently located just 5 minutes
              away from captivating hiking trails, and a mere 12 minutes from
              the breathtaking monasteries of St. Rafka and St. Hardini.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 hover:underline"
          >
            {showMore ? <ChevronUp /> : <ChevronDown />}
            <p className="font-metropolis-regular text-sm sm:text-base">
              {showMore ? "Show Less" : "Show More"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
