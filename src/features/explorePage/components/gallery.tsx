"use client";

import { ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function Gallery(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-4 md:grid-rows-2 gap-4 h-[700px] md:h-[500px]">
        <div className="col-span-2 md:col-span-3 row-span-2 relative">
          <Image
            src={props.images[0]}
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-2 relative">
          <Image
            src={props.images[1]}
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src={props.images[2]}
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <div className="relative flex-1 h-[70%]">
            <Image
              src={props.images[3]}
              alt="Gallery image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-main rounded-lg text-white flex items-center justify-center gap-4 hover:bg-white hover:text-main transition-all h-12 md:py-0"
          >
            <p>View All</p>
            <div className="bg-white/20 rounded-full p-2">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full z-[60]"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="flex-1 flex items-center justify-center p-4 relative">
              <div className="relative max-h-[80vh] max-w-[95vw] w-full h-full">
                <Image
                  src={props.images[selectedImage]}
                  alt="Selected gallery image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="h-32 flex gap-4 overflow-x-auto p-4"
            >
              {props.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-full min-w-[120px] rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-main" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
