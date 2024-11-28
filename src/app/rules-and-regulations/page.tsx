import CoverPhoto from "@/components/CoverPhoto";
import GetInTouchSection from "@/components/GetInTouchSection";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

const NormalText = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={clsx("font-metropolis-regular", props.className)}>
      {props.children}
    </p>
  );
};

const HeaderText = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={clsx(
        "text-xl font-bold font-metropolis-medium tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

const SubHeaderText = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={clsx("text-lg font-metropolis-medium", props.className)}>
      {props.children}
    </h1>
  );
};

export default function RulesAndRegulationsPage() {
  return (
    <div>
      <Navbar logoDark />

      <CoverPhoto>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-dark flex-col text-center">
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-regular">
            Beit Mema
          </h1>
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-medium">
            Rules and Regulations
          </h1>
        </div>
      </CoverPhoto>

      <div className="container mx-auto mb-20 px-4">
        <NormalText className="w-full lg:w-3/4 font-metropolis-medium font-semibold">
          Welcome to Beit Mema Rules and Regulations. Please take time to read
          through these guidelines carefully. By using our services, you agree
          to comply with and be bound by these rules and regulations.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">USER CONDUCT</HeaderText>
        <ul className="mt-4 list-disc pl-5 space-y-4">
          <li>
            <NormalText>
              Users must be at least 18 years old or have parental consent to
              use our services.
            </NormalText>
          </li>
          <li>
            <NormalText>
              Any attempt to disrupt or interfere with the website's
              functionality is strictly prohibited.
            </NormalText>
          </li>
          <li>
            <NormalText>
              Users must provide accurate and complete information when making
              inquiries and reservations.
            </NormalText>
          </li>
        </ul>

        <HeaderText className="mt-8 lg:mt-12">RESERVATIONS</HeaderText>
        <ul className="mt-4 list-disc pl-5 space-y-4">
          <li>
            <NormalText>
              All reservations are subject to availability and must be confirmed
              by the guesthouse.
            </NormalText>
          </li>
          <li>
            <NormalText>
              Cancellation policies will be outlined at the time of booking.
              Please refer to our cancellation policy for details.
            </NormalText>
          </li>
        </ul>
        <HeaderText className="mt-8 lg:mt-12">
          COPYRIGHT AND TRADEMARK
        </HeaderText>
        <ul className="mt-4 list-decimal pl-5 space-y-4">
          <li>
            <NormalText>
              All materials and content on this site, including text, graphics,
              logo, and images, is the property of Beit Mema. All rights
              reserved and is protected by copyright laws worldwide.
            </NormalText>
          </li>
          <li>
            <NormalText>
              No person is authorized to use, copy or distribute any portion of
              the Website including related graphics.
            </NormalText>
          </li>
        </ul>

        <HeaderText className="mt-8 lg:mt-12">
          LINKS TO THIRD-PARTY WEBSITES
        </HeaderText>
        <NormalText className="mt-4">
          Our website is only liable for the hyperlinks it creates in the
          Website, and does not exercise any control over the Third-Party
          Website and services. Beit Mema website cannot be held liable for the
          provision of links appearing to Third Party Websites and will have no
          liability for their content, advertisements, products, features,
          services or any other elements available on their own site.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">
          LIMITATIONS OF LIABILITY
        </HeaderText>
        <NormalText className="mt-4">
          Beit Mema shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use the
          website, including but not limited to errors or omissions in content.
        </NormalText>
      </div>
      <GetInTouchSection />
    </div>
  );
}
