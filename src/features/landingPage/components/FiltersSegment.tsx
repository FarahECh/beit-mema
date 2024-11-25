"use client";
import { CONTACT_INFO, GUEST_HOUSES } from "@/constants/guesthouses";
import {
  PhoneIcon,
  MailIcon,
  Clock,
  User,
  House,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FiltersSegment() {
  const [guestHouse, setGuestHouse] = useState<number>(0);
  return (
    <div className="bg-brand-gray container absolute -bottom-14 z-20 left-1/2 -translate-x-1/2 rounded-xl shadow-md">
      {/* Mobile view */}
      <div className="md:hidden bg-main rounded-xl p-4 text-white">
        <div className="grid grid-cols-2 gap-4">
          {/* check in */}
          <div className="flex flex-col gap-1">
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
                <option key={house.name} value={index}>
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
              <select
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
              </select>
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
