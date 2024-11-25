interface Props {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}

export default function CoverPhoto(props: Props) {
  return (
    <section
      className={`h-[800px] container-wide relative mt-3 rounded-xl ${props.className}`}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center text-white flex-col text-center">
        {props.children}
      </div>
    </section>
  );
}
