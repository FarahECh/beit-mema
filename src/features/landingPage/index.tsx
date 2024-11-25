import ExpandingButton from "./components/ExpandingButton";
import FiltersSegment from "./components/FiltersSegment";
import Discover from "./components/Discover";
import GuesthouseFeatures from "./components/GuesthouseFeatures";
import LocationsSection from "./components/LocationsSection";
import GetInTouchSection from "../../components/GetInTouchSection";
import FAQSection from "@/components/FAQSection";
import { PrivateEventSection } from "@/components/PrivateEventSection";
import CoverPhoto from "@/components/CoverPhoto";

export default function LandingPage() {
  return (
    <main>
      <CoverPhoto className="relative" imageUrl="/images/landingPage/1.jpeg">
        <p className="font-metropolis-regular text-lg md:text-xl lg:text-2xl">
          Welcome to Beit Mema
        </p>
        <div className="h-[1px] w-12 md:w-16 bg-white mt-4 md:mt-6 mb-6 md:mb-10"></div>
        <p className="text-3xl md:text-4xl lg:text-7xl max-w-[1012px] font-made-mirage-medium leading-tight">
          Your Gateway to <br /> Tranquility and Comfort
        </p>
        <ExpandingButton
          className="mt-8 md:mt-14"
          text="Book Your Guesthouse"
        />

        <FiltersSegment />
      </CoverPhoto>

      <section className="container mx-auto my-48 px-5 md:px-4">
        <Discover />
      </section>
      <section className="container-wide">
        <GuesthouseFeatures />
      </section>
      <section className="text-center my-24 px-5 md:px-4">
        <h1 className="text-4xl font-made-mirage-regular text-dark">
          Beit Mema
        </h1>
        <p className="text-6xl font-made-mirage-medium text-dark">Location</p>
      </section>
      <section className="container-wide">
        <LocationsSection />
      </section>
      <section className="container-wide mt-[122px]">
        <PrivateEventSection />
      </section>
      <section className="mt-[122px]" id="contact">
        <GetInTouchSection />
      </section>
      <section className="mt-[122px] container mx-auto flex items-start justify-center px-5 md:px-4">
        <FAQSection />
      </section>
    </main>
  );
}
