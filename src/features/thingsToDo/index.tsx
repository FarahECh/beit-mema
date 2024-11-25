import { GUEST_HOUSES } from "@/constants/guesthouses";
import DiscoverOutGuesthousesSection from "../explorePage/components/discoverOutGuesthousesSection";
import { EmbraceSerenetySection } from "./components/EmbraceSerenetySection";
import ThingsToDoSection from "./components/thingsToDoSection";
import { PrivateEventSection } from "@/components/PrivateEventSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import FAQSection from "@/components/FAQSection";
import CoverPhoto from "@/components/CoverPhoto";

export default function ThingsToDoPage() {
  return (
    <main>
      <CoverPhoto imageUrl="/images/aida/pool.jpeg">
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white flex-col text-center">
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-regular">
            Beit Mema
          </h1>
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-medium">
            Things to do
          </h1>
        </div>
      </CoverPhoto>

      <section className="container mx-auto px-5 md:px-4 my-32">
        <ThingsToDoSection />
      </section>
      <section className="container-wide mt-[122px]">
        <EmbraceSerenetySection />
      </section>
      <section className="container-wide mt-10">
        <PrivateEventSection />
      </section>
      <section className="container mx-auto px-5 md:px-4 mt-40">
        <DiscoverOutGuesthousesSection
          guesthouses={GUEST_HOUSES.slice(0, 2).sort(() => Math.random() - 0.5)}
        />
      </section>
      <section className="mt-32">
        <GetInTouchSection />
      </section>
      <section className="container mx-auto px-5 md:px-4 mt-32">
        <FAQSection />
      </section>
    </main>
  );
}
