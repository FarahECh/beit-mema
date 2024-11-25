import ExpandingButton from "@/features/landingPage/components/ExpandingButton";
import Image from "next/image";

export function PrivateEventSection() {
  return (
    <div className="h-[700px] relative rounded-xl overflow-hidden">
      <Image
        src="/images/landingPage/private_event.png"
        alt="Private Event"
        fill
        className="object-cover"
        priority
      />
      <div className="bg-black/50 z-10 absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center max-w-[550px]">
          <h2 className="font-made-mirage-regular text-5xl">Book Your</h2>
          <h1 className="font-made-mirage-medium text-7xl mb-7">
            Private Event
          </h1>
          <p className="font-metropolis-regular text-xl">
            Looking for a unique venue to host your next private event? Look no
            further than Beit Mema Guesthouse. Nestled in the heart of nature,
            our guesthouse offers an idyllic setting for gatherings of all
            kinds.
          </p>
          <ExpandingButton className="mt-14" text="Book Your Private Event" />
        </div>
      </div>
    </div>
  );
}
