import BedIcon from "@/components/icons/BedIcon";
import GroupOfPeopleIcon from "@/components/icons/GroupOfPeopleIcon";
import ShowerIcon from "@/components/icons/ShowerIcon";
import { GUEST_HOUSES } from "@/constants/guesthouses";
import ExpandingButton from "@/features/landingPage/components/ExpandingButton";
import pluralize from "pluralize";

interface Props {
  guestHouse: (typeof GUEST_HOUSES)[number];
}

export default function DetailsSection({ guestHouse }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 text-white md:h-[600px]">
      {/* Left Column - Title and Description */}
      <div className="space-y-6 bg-main p-6 md:p-11 rounded-xl flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-4xl font-light font-made-mirage-regular">
            Guesthouse {guestHouse.name}
          </h1>
          <p className="font-metropolis-regular">{guestHouse.description}</p>
        </div>

        <ExpandingButton className="max-w-[50%]" text="Book Your Guesthouse" />
      </div>

      {/* Right Column - Price and Details */}
      <div className="space-y-6 md:space-y-8 flex-1 bg-main p-6 md:p-11 rounded-xl flex flex-col justify-between">
        {/* Price Section */}
        <div className="space-y-6">
          <div>
            <span className="text-4xl md:text-5xl font-light font-metropolis-regular">
              ${guestHouse.pricePerNight}
            </span>
            <span className="ml-2 font-metropolis-regular">per night</span>
          </div>
          {guestHouse.pricePerPersonTwoPeople && (
            <div>
              <span className="text-4xl md:text-5xl font-light font-metropolis-regular">
                ${guestHouse.pricePerPersonTwoPeople}
              </span>
              <span className="ml-2 font-metropolis-regular">For 2 people</span>
            </div>
          )}

          {/* Quick Info */}
          <div className="flex items-center gap-5">
            <span
              key={`bed-${guestHouse.name}`}
              className="bg-white/10 h-16 md:h-20 w-28 md:w-36 rounded-xl flex items-center flex-col justify-center gap-1 md:gap-2"
            >
              <BedIcon />
              <p className="text-sm md:text-md font-metropolis-regular">
                {pluralize("Bedroom", guestHouse.bedrooms, true)}
              </p>
            </span>

            <span
              key={`guests-${guestHouse.name}`}
              className="bg-white/10 h-16 md:h-20 w-28 md:w-36 rounded-xl flex items-center flex-col justify-center gap-1 md:gap-2"
            >
              <GroupOfPeopleIcon />
              <p className="text-sm md:text-md font-metropolis-regular">
                {pluralize("Guest", guestHouse.guests, true)}
              </p>
            </span>

            <span
              key={`bath-${guestHouse.name}`}
              className="bg-white/10 h-16 md:h-20 w-28 md:w-36 rounded-xl flex items-center flex-col justify-center gap-1 md:gap-2"
            >
              <ShowerIcon />
              <p className="text-sm md:text-md font-metropolis-regular">
                {pluralize("Bathroom", guestHouse.bathrooms, true)}
              </p>
            </span>
          </div>
        </div>
        {/* Amenities */}
        <div>
          <h2 className="mb-3 md:mb-4 font-metropolis-medium">Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {guestHouse.amenities.map((amenity) => (
              <span
                key={amenity}
                className="border border-white px-2 text-sm md:text-base font-metropolis-regular"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
