import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Amenities() {
  return (
    <div className="bg-main min-h-[500px] md:h-[500px] flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden">
      <div className="text-white w-full md:max-w-lg p-6 md:p-0 md:ml-20">
        <h2 className="text-2xl md:text-3xl font-made-mirage-regular mb-4 md:mb-6">
          Beit Mema Amenities
        </h2>
        <p className="text-white/80 mb-6 md:mb-8 font-metropolis-regular text-sm md:text-base">
          Beit Mema offers a wide array of amenities
        </p>

        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {[
            "Landscapes & Gardens",
            "Mountain View",
            "Pool Access",
            "Indoor Fireplace",
            "Outdoor Fire Pit",
            "Ping Pong Table",
            "BBQ Station",
            "Terrance & Balcony",
            "Free Wireless Internet",
          ].map((amenity) => (
            <span
              key={amenity}
              className="border border-white px-2 py-1 text-xs md:text-base font-metropolis-regular"
            >
              {amenity}
            </span>
          ))}
        </div>
        <Link href={"/"} className="block w-full md:w-auto">
          <Button className="w-full md:w-auto">Explore Our Guesthouses</Button>
        </Link>
      </div>

      <div className="h-[300px] md:h-full w-full md:w-1/2 relative mt-6 md:mt-0">
        <Image
          src="/images/amenities.png"
          alt="Pool with strawberries"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
}
