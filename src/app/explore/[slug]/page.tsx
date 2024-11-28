import Navbar from "@/components/Navbar";
import { GUEST_HOUSES } from "@/constants/guesthouses";
import ExplorePage from "@/features/explorePage";

export default async function Explore({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guestHouse = GUEST_HOUSES.find((item) => item.name === slug);

  return (
    <>
      <Navbar />
      <ExplorePage guestHouse={guestHouse} />
    </>
  );
}
