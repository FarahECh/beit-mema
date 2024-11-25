"use client";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import BedIcon from "@/components/icons/BedIcon";
import GroupOfPeopleIcon from "@/components/icons/GroupOfPeopleIcon";
import ShowerIcon from "@/components/icons/ShowerIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GUEST_HOUSES } from "@/constants/guesthouses";
import Button from "@/components/Button";
import Link from "next/link";
import pluralize from "pluralize";

export default function GuesthouseFeatures() {
  const [activeGuesthouse, setActiveGuesthouse] = useState(GUEST_HOUSES[0]);
  return (
    <div
      id="guesthouse-features"
      className="flex flex-col lg:h-[600px] max-h-[1200px] lg:flex-row rounded-xl overflow-hidden"
    >
      <div className="flex-1 bg-main flex items-center justify-center py-12 lg:py-0 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={`number-${activeGuesthouse.name}`}
            className="absolute left-10 lg:left-20 top-10 text-[150px] lg:text-[250px] font-made-mirage-regular text-white/10 select-none"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {GUEST_HOUSES.findIndex((g) => g.name === activeGuesthouse.name) +
              1}
          </motion.span>
        </AnimatePresence>

        <div className="w-[90%] max-w-[400px] text-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGuesthouse.name}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-made-mirage-regular mb-8 lg:mb-11 text-center lg:text-left">
                Guesthouse {activeGuesthouse.name}
              </h1>
              <p className="mb-8 lg:mb-11 font-metropolis-regular text-center lg:text-left">
                {activeGuesthouse.smallDescription}
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
                <motion.span
                  key={`bed-${activeGuesthouse.name}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 h-20 w-full lg:w-36 rounded-xl flex items-center flex-col justify-center gap-2"
                >
                  <BedIcon />
                  <p className="text-md font-metropolis-regular">
                    {pluralize("Bedroom", activeGuesthouse.bedrooms, true)}
                  </p>
                </motion.span>

                <motion.span
                  key={`guests-${activeGuesthouse.name}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 h-20 w-full lg:w-36 rounded-xl flex items-center flex-col justify-center gap-2"
                >
                  <GroupOfPeopleIcon />
                  <p className="text-md font-metropolis-regular">
                    {pluralize("Guest", activeGuesthouse.guests, true)}
                  </p>
                </motion.span>

                <motion.span
                  key={`bath-${activeGuesthouse.name}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 h-20 w-full lg:w-36 rounded-xl flex items-center flex-col justify-center gap-2"
                >
                  <ShowerIcon />
                  <p className="text-md font-metropolis-regular">
                    {pluralize("Bathroom", activeGuesthouse.bathrooms, true)}
                  </p>
                </motion.span>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link href={`/explore/${activeGuesthouse.name}`}>
                  <Button className="mt-8 lg:mt-12">{`Explore Guesthouse ${activeGuesthouse.name}`}</Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="flex-1 h-full w-full"
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSlideChange={(swiper) =>
          setActiveGuesthouse(GUEST_HOUSES[swiper.activeIndex])
        }
      >
        {GUEST_HOUSES.map((g) => {
          return (
            <SwiperSlide className="h-full w-full" key={g.name}>
              <img
                src={`/images/${g.name.toLowerCase()}/${
                  g.gallery[g.coverImage]
                }`}
                alt={g.name}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
