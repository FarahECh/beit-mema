import ExpandingButton from "@/features/landingPage/components/ExpandingButton";

interface Props {
  name: string;
  image: string;
}

export default function CoverImage(props: Props) {
  return (
    <div
      className="h-[calc(100vh-120px)] container-wide mt-3 bg-white relative rounded-xl"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white flex-col text-center">
        <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-regular">
          Guesthouse
        </h1>
        <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-medium">
          {props.name}
        </h1>
        <ExpandingButton className="mt-14" text="Book Your Guesthouse" />
      </div>
    </div>
  );
}
