import { GUEST_HOUSES } from "@/constants/guesthouses";
import Gallery from "./components/gallery";
import DetailsSection from "./components/detailsSection";
import IdealForSection from "./components/idealForSection";
import Amenities from "./components/amenitis";
import DiscoverOutGuesthousesSection from "./components/discoverOutGuesthousesSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import FAQSection from "@/components/FAQSection";
import CoverPhoto from "@/components/CoverPhoto";
import ExpandingButton from "../landingPage/components/ExpandingButton";

interface Props {
  guestHouse?: (typeof GUEST_HOUSES)[number];
}

export default function ExplorePage(props: Props) {
  if (!props.guestHouse) return null;
  return (
    <main>
      <CoverPhoto
        imageUrl={`/images/${props.guestHouse.name.toLowerCase()}/${
          props.guestHouse.gallery[props.guestHouse.coverImage]
        }`}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white flex-col text-center">
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-regular">
            Guesthouse
          </h1>
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-medium">
            {props.guestHouse.name}
          </h1>
          <ExpandingButton className="mt-14" text="Book Your Guesthouse" />
        </div>
      </CoverPhoto>
      <section className="container mx-auto mt-32 px-5 md:px-4">
        <Gallery
          images={props.guestHouse.gallery.map(
            (item) => `/images/${props.guestHouse!.name.toLowerCase()}/${item}`
          )}
        />
      </section>
      <section className="container mx-auto px-5 md:px-4 mt-4">
        <DetailsSection guestHouse={props.guestHouse} />
      </section>
      <section className="container mx-auto px-5 md:px-4 md:mt-12 mt-4">
        <IdealForSection />
      </section>
      <section className="container-wide">
        <Amenities />
      </section>
      <section className="container mx-auto px-5 md:px-4 mt-32">
        <DiscoverOutGuesthousesSection
          guesthouses={GUEST_HOUSES.filter(
            (guesthouse) => guesthouse.name !== props.guestHouse!.name
          )}
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
