import Image from "next/image";
import BedIcon from "@/components/icons/BedIcon";
import GroupOfPeopleIcon from "@/components/icons/GroupOfPeopleIcon";
import Button from "@/components/Button";
import { GUEST_HOUSES } from "@/constants/guesthouses";
import Link from "next/link";
import pluralize from "pluralize";

interface Props {
  guesthouses: typeof GUEST_HOUSES;
}

export default function DiscoverOutGuesthousesSection(props: Props) {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12 text-black gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-made-mirage-regular">
            Discover Our
          </h2>
          <h3 className="text-5xl md:text-7xl font-made-mirage-bold">
            Guesthouses
          </h3>
        </div>
        <Link href={"/"}>
          <button className="text-main border-main   border py-3 px-6 rounded-lg font-metropolis-regular hover:bg-main hover:text-white transition-all duration-300 w-full md:w-auto">
            Explore Our Guesthouses
          </button>
        </Link>
      </div>

      {/* Guesthouses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {props.guesthouses.map((guesthouse) => (
          <div
            key={guesthouse.id}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <Image
              src={`/images/${guesthouse.name.toLowerCase()}/${
                guesthouse.gallery[guesthouse.coverImage]
              }`}
              alt={guesthouse.name}
              width={800}
              height={500}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/40 p-4 md:p-8 flex flex-col justify-between">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-2xl md:text-4xl font-metropolis-medium text-white mb-2 md:mb-4">
                  {guesthouse.name}
                </h3>
                <p className="text-white text-base md:text-lg max-w-[95%] md:max-w-[80%] font-metropolis-regular">
                  {guesthouse.smallDescription}
                </p>

                <div className="flex items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2">
                    <GroupOfPeopleIcon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-white text-sm md:text-base">
                      {pluralize("Guest", guesthouse.guests, true)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedIcon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-white text-sm md:text-base">
                      {pluralize("Bedroom", guesthouse.bedrooms, true)}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href={`/explore/${guesthouse.name}`}
                className="mt-4 md:mt-6 block"
              >
                <Button className="w-full md:w-auto">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
