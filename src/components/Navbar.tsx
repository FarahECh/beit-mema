"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  logoDark?: boolean;
}

export default function Navbar(props?: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-5 md:px-4 flex items-center justify-between py-4 md:py-8 absolute top-4 lg:top-0 left-0 right-0 z-50">
      <Link href="/">
        <Image
          src={props?.logoDark ? "/logo-black.png" : "/logo.png"}
          alt="Beit Mema Logo"
          width={80}
          height={80}
          className="w-[80px] md:w-[100px]"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <div
        className={clsx(
          "hidden md:flex items-center gap-8 font-metropolis-regular text-lg",
          {
            "text-dark": props?.logoDark,
            "text-white": !props?.logoDark,
          }
        )}
      >
        <Link className="hover:underline" href="/things-to-do">
          Things to do
        </Link>
        <Link className="hover:underline" href="/#contact">
          Contact us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-main/95 py-4 flex flex-col items-center gap-4 md:hidden">
          <Link
            href="/things-to-do"
            className="text-white font-metropolis-regular text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Things to do
          </Link>
          <Link
            href="/#contact"
            className="text-white font-metropolis-regular text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
}
function useGeneralStore(): { logoDark: any; setLogoDark: any } {
  throw new Error("Function not implemented.");
}
