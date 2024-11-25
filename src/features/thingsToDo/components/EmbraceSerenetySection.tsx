import ExpandingButton from "@/features/landingPage/components/ExpandingButton";

export function EmbraceSerenetySection() {
  return (
    <div
      className="h-[600px] bg-white relative rounded-xl"
      style={{
        backgroundImage: `url(/images/embrace.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full opacity-40 bg-black rounded-xl"></div>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white flex-col text-center p-4 sm:p-0">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl max-w-[1012] font-made-mirage-regular">
          Embrace Serenity
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl max-w-[1012] font-made-mirage-medium">
          At Beit Mema
        </h1>
        <p className="font-metropolis-regular text-lg max-w-[650px] mt-4">
          Immerse yourself in the tranquil beauty that surrounds Beit Mema
          Guesthouse. With a vast outdoor area enveloped by nature's splendor,
          guests can revel in moments of peaceful solitude or gather with loved
          ones for memorable experiences.
        </p>
        <ExpandingButton
          className="mt-8 sm:mt-14"
          text="Book Your Guesthouse"
        />
      </div>
    </div>
  );
}
