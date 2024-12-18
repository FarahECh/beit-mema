"use client";
import { CONTACT_INFO, GUEST_HOUSES } from "@/constants/guesthouses";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon,
  MailIcon,
  Clock,
  User,
  House,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowDown,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FiltersSegment() {
  const [guestHouse, setGuestHouse] = useState<number>(0);
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <div className="bg-brand-gray container absolute -bottom-14 z-20 left-1/2 -translate-x-1/2 rounded-xl shadow-md">
      {/* Mobile view */}
      <div className="md:hidden bg-main rounded-xl p-4 text-white">
        <div className="grid grid-cols-2 gap-4">
          {/* check in */}
          <div className="flex flex-col gap-1 ">
            <div className="flex items-center gap-1 opacity-70">
              <Clock className="h-3 w-3" />
              <p className="text-xs font-metropolis-medium">Check in</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-metropolis-medium">
                {GUEST_HOUSES[guestHouse].checkIn}
              </p>
              <p className="text-xs opacity-70">
                {GUEST_HOUSES[guestHouse].whenCheckIn}
              </p>
            </div>
          </div>

          {/* check out */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 opacity-70">
              <Clock className="h-3 w-3" />
              <p className="text-xs font-metropolis-medium">Check Out</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-metropolis-medium">
                {GUEST_HOUSES[guestHouse].checkOut}
              </p>
              <p className="text-xs opacity-70">
                {GUEST_HOUSES[guestHouse].whenCheckOut}
              </p>
            </div>
          </div>

          {/* guests */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 opacity-70">
              <User className="h-3 w-3" />
              <p className="text-xs font-metropolis-medium">Guests</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-xs opacity-70">Up to</p>
              <p className="text-2xl font-metropolis-medium">
                0{GUEST_HOUSES[guestHouse].guests}
              </p>
            </div>
          </div>

          {/* guesthouse */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 opacity-70">
              <House className="h-3 w-3" />
              <p className="text-xs font-metropolis-medium">Guesthouse</p>
            </div>
            <select
              value={guestHouse}
              onChange={(e) => setGuestHouse(Number(e.target.value))}
              name="guestHouse"
              className="bg-white/30 rounded-md text-white p-1 text-sm w-full cursor-pointer"
            >
              {GUEST_HOUSES.map((house, index) => (
                <option className="text-black" key={house.name} value={index}>
                  {house.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-4 text-white">
          <Link href={CONTACT_INFO.phone}>
            <PhoneIcon className="w-5 h-5" strokeWidth={1} />
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/beitmema?igsh=NWxvaDJxYmlzZWJy"
          >
            <Instagram className="w-5 h-5" strokeWidth={1} />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/share/155nn3Lgat/?mibextid=LQQJ4d"
          >
            <Facebook className="w-5 h-5" strokeWidth={1} />
          </Link>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex h-28 items-center justify-between">
        {/* left side */}
        <div className="h-full w-[80%] bg-main rounded-xl flex items-center justify-around text-white">
          {/* check in */}
          <div className="flex items-start flex-col justify-center gap-2">
            <div className="flex items-center gap-2 opacity-70">
              <Clock className="h-3 w-3" />
              <p className="text-sm font-metropolis-medium">Check in</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-4xl font-metropolis-medium">
                {GUEST_HOUSES[guestHouse].checkIn}
              </p>
              <p className="text-sm opacity-70">
                {GUEST_HOUSES[guestHouse].whenCheckIn}
              </p>
            </div>
          </div>
          <div className="h-16 w-[1px] bg-white opacity-50"></div>
          {/* check out */}
          <div className="flex items-start flex-col justify-center gap-2">
            <div className="flex items-center gap-2 opacity-70">
              <Clock className="h-3 w-3" />
              <p className="text-sm font-metropolis-medium">Check Out</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-4xl font-metropolis-medium">
                {GUEST_HOUSES[guestHouse].checkOut}
              </p>
              <p className="text-sm opacity-70">
                {GUEST_HOUSES[guestHouse].whenCheckOut}
              </p>
            </div>
          </div>
          <div className="h-16 w-[1px] bg-white opacity-50"></div>
          <div className="flex items-end flex-col justify-center gap-2">
            <div className="flex items-center gap-2 opacity-70">
              <User className="h-3 w-3" />
              <p className="text-sm font-metropolis-medium">Guests</p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-sm opacity-70 mb-2">Up to</p>
              <p className="text-4xl font-metropolis-medium">
                0{GUEST_HOUSES[guestHouse].guests}
              </p>
            </div>
          </div>
          <div className="h-16 w-[1px] bg-white opacity-50"></div>
          <div className="flex items-center flex-col justify-center gap-2">
            <div className="flex items-center gap-2 opacity-70 mb-3">
              <House className="h-3 w-3" />
              <p className="text-sm font-metropolis-medium">Guesthouse</p>
            </div>
            <div className="flex items-end gap-1">
              {/* <select
                value={guestHouse}
                onChange={(e) => setGuestHouse(Number(e.target.value))}
                name="guestHouse"
                className="bg-white/30 rounded-md text-white p-1 w-32 cursor-pointer"
              >
                {GUEST_HOUSES.map((house, index) => (
                  <option key={house.name} value={index}>
                    {house.name}
                  </option>
                ))}
              </select> */}

              <button
                onClick={() => setSelectOpen(!selectOpen)}
                className="bg-white/30 rounded-md text-white p-1 w-32 cursor-pointer relative font-metropolis-medium"
              >
                <div className="flex items-center gap-2 justify-center">
                  <p>{GUEST_HOUSES[guestHouse].name}</p>{" "}
                  <ChevronDown className="h-4 w-4 mt-1" />
                </div>
                <AnimatePresence>
                  {selectOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      className="absolute w-full -bottom-32 z-20 left-0 rounded-md bg-white shadow-sm text-black flex flex-col gap-2 items-center overflow-hidden"
                    >
                      {GUEST_HOUSES.map((house, index) => (
                        <span
                          onClick={() => {
                            setGuestHouse(index);
                            setSelectOpen(false);
                          }}
                          key={house.name}
                          className={`w-full py-2 px-4 text-sm hover:bg-gray-100 active:bg-gray-200 transition-all ${
                            index === guestHouse
                              ? "font-medium text-brand-main bg-gray-50"
                              : "text-gray-700"
                          }`}
                        >
                          {house.name}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1 flex items-center justify-evenly text-white">
          <Link href={`tel:${CONTACT_INFO.phone}`}>
            <PhoneIcon className="w-6 h-6" strokeWidth={1} />
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/beitmema?igsh=NWxvaDJxYmlzZWJy"
          >
            <Instagram className="w-6 h-6" strokeWidth={1} />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/share/155nn3Lgat/?mibextid=LQQJ4d"
          >
            <Facebook className="w-6 h-6" strokeWidth={1} />
          </Link>
        </div>
      </div>
    </div>
  );
}
