import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/guesthouses";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Links Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
            <Image
              src="/logo-black.png"
              alt="Beit Mema Logo"
              width={120}
              height={60}
            />
            <div className="md:ml-[100px] flex flex-col items-center md:items-start gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <Link href="/#guesthouse-features">Discover Beit Mema</Link>
                <Link href="/#contact">Contact Us</Link>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <Link href="/rules-and-regulations">Rules & Regulations</Link>
                <span className="hidden md:block">|</span>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
              <p className="text-dark/60 font-metropolis-regular text-sm text-center md:text-left">
                Beit Mema | ALL RIGHTS RESERVED
              </p>
              <p className="font-metropolis-regular text-dark/60 text-sm text-center md:text-left">
                WEBSITE DESIGN AND DEVELOPMENT BY DOUZEDEGRES
              </p>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/share/155nn3Lgat/?mibextid=LQQJ4d"
                className="hover:text-gray-600"
              >
                <Facebook size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/beitmema?igsh=NWxvaDJxYmlzZWJy"
                className="hover:text-gray-600"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://wa.me/+96170174962"
                className="hover:text-gray-600"
              >
                <MessageCircle size={24} />
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <Link href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </Link>
              <Link href={`tel:${CONTACT_INFO.phone}`}>
                {CONTACT_INFO.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
