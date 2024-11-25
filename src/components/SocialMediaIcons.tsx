import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function SocialMediaIcons() {
  return (
    <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:block">
      <Link
        target="_blank"
        href="https://www.facebook.com/share/155nn3Lgat/?mibextid=LQQJ4d"
      >
        <Facebook />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/beitmema?igsh=NWxvaDJxYmlzZWJy"
        className="block mt-6"
      >
        <Instagram />
      </Link>
      <Link
        target="_blank"
        href="https://wa.me/+96170174962"
        className="block mt-6"
      >
        <MessageCircle />
      </Link>
    </div>
  );
}
