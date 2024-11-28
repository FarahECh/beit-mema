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

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar logoDark />

      <CoverPhoto>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-dark flex-col text-center">
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-regular">
            Beit Mema
          </h1>
          <h1 className="text-4xl lg:text-7xl max-w-[1012] font-made-mirage-medium">
            Privacy Policy
          </h1>
        </div>
      </CoverPhoto>
      <div className="container mx-auto mb-20 px-4">
        <NormalText className="w-full lg:w-3/4 font-metropolis-medium font-semibold">
          Welcome to Beit Mema Privacy Policy. Thank you for taking the time to
          read it. We appreciate that you trust us with your information, and we
          intend to always keep that trust. This starts with making sure you
          understand the information we collect, why we collect it, how it is
          used and your choices regarding your information. This Policy
          describes our privacy practices in a clear and concise manner. This
          Privacy Policy applies effective beginning 10/21/2024.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">
          INFORMATION WE COLLECT
        </HeaderText>
        <NormalText>
          We may collect the following types of information:
        </NormalText>
        <div className="mt-4 space-y-6">
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 w-full">
            <SubHeaderText className="w-full lg:w-1/4">
              Personal Information
            </SubHeaderText>
            <NormalText className="w-full lg:w-3/4 font-metropolis-regular">
              When you make a reservation or contact us, we may collect personal
              information such as your name, email address, phone number,
              mailing address etc.
            </NormalText>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 w-full">
            <SubHeaderText className="w-full lg:w-1/4">
              Usage Information
            </SubHeaderText>
            <NormalText className="w-full lg:w-3/4 font-metropolis-regular">
              We collect information about your activity on our website (e.g.,
              date and time of your visit), features you've been using,
              searches, clicks and pages which have been shown to you.
            </NormalText>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 w-full">
            <SubHeaderText className="w-full lg:w-1/4">
              Device Information
            </SubHeaderText>
            <NormalText className="w-full lg:w-3/4 font-metropolis-regular">
              We collect information from and about the device(s) you use to
              access our services, including: Hardware and software information
              such as IP address, device ID and type.
            </NormalText>
          </div>
        </div>
        <HeaderText className="mt-8 lg:mt-12">
          COOKIES AND IP ADDRESSES
        </HeaderText>
        <NormalText className="mt-4">
          As is the case with many sites, the Site logs your IP address and uses
          standard technology called "cookies," which are small data files that
          are downloaded onto your computer when you visit the Site. Cookies
          automatically identify your browser to the server whenever you
          interact with the Site. We use cookies and the information they
          provide to improve the quality of your experience with the Site. If
          you prefer not to allow us to collect "cookie" information, you can
          disable cookies by turning them off in your browser. Certain kinds of
          cookies allow us to store basic information of yours so you can save
          time in filling out forms on the Site. We only send this type of
          cookie to your browser when you have provided your consent for us to
          save your profile information.
        </NormalText>
        <HeaderText className="mt-8 lg:mt-12">
          HOW WE USE INFORMATION
        </HeaderText>
        <NormalText className="mt-4">
          The main reason we use your information is to deliver and improve our
          service. Additionally, we use your info to help keep you safe. We
          would only use and disclose personal information about individuals for
          the purpose it was disclosed to us or related purposes which would
          reasonably be expected without the permission of the individual.
          <br />
          Read on for a more explanation of the various reasons we use your
          information, noting that these are only examples:
        </NormalText>
        <ul className="list-disc pl-6 mt-4 font-metropolis-regular space-y-2">
          <li>To process your reservations and manage your bookings.</li>
          <li>
            To communicate with you regarding your stay, inquiries, or updates.
          </li>
          <li>To protect the security of our website.</li>
          <li>
            To improve our Site and customer service based on user feedback and
            behavior.
          </li>
          <li>To comply with legal obligations and protect our rights.</li>
          <li>
            To contact you if necessary, regarding changes to our policies,
            and/or other administrative purposes.
          </li>
        </ul>
        <HeaderText className="mt-8 lg:mt-12">
          HOW WE SHARE INFORMATION
        </HeaderText>
        <NormalText>
          We may share your personal information in the following ways:
        </NormalText>
        <ul className="font-metropolis-regular mt-4 space-y-6 list-none">
          <li>
            <SubHeaderText>
              With our service providers and partners
            </SubHeaderText>
            <NormalText className="text-sm mt-2">
              We use third parties to help us operate our Site and improve our
              services. These third parties assist us with various tasks,
              including marketing, advertising, and security operations.
            </NormalText>
          </li>
          <li>
            <SubHeaderText>When required by law</SubHeaderText>
            <NormalText className="text-sm mt-2">
              We may disclose your information if reasonably necessary: (i) to
              comply with a legal process, such as a court order, subpoena or
              search warrant, government / law enforcement investigation or
              other legal requirements; (ii) to assist in the prevention or
              detection of crime (subject in each case to applicable law); or
              (iii) to protect the safety of any person.
            </NormalText>
          </li>
          <li>
            <SubHeaderText>To enforce legal rights</SubHeaderText>
            <NormalText className="text-sm mt-2">
              We may also share information: (i) if disclosure would mitigate
              our liability in an actual or threatened lawsuit; (ii) as
              necessary to protect our legal rights and legal rights of our
              users, business partners or other interested parties; (iii) to
              enforce our agreements with you; and (iv) to investigate, prevent,
              or take other action regarding illegal activity, suspected fraud
              or other wrongdoing.
            </NormalText>
          </li>
          <li>
            <SubHeaderText>With your consent or at your request</SubHeaderText>
            <NormalText className="text-sm mt-2">
              We may ask for your consent to share your information with third
              parties. In any such case, we will make it clear why we want to
              share the information.
            </NormalText>
          </li>
        </ul>

        <HeaderText className="mt-8 lg:mt-12">
          HOW WE PROTECT YOUR INFORMATION
        </HeaderText>
        <NormalText className="mt-4">
          At Beit Mema, we take reasonable measures to protect your personal
          information from unauthorized access, use or disclosure. However,
          despite security measures taken, always be advised that the purpose is
          to prevent incidents from occurring, but this cannot be always
          guaranteed. We have put reasonable technical and security procedures
          in place.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">
          HOW LONG WE RETAIN YOUR INFORMATION
        </HeaderText>
        <NormalText className="mt-4">
          We will retain your personal information for the period of one year.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">
          LINKS TO OTHER WEBSITES
        </HeaderText>
        <NormalText className="mt-4">
          For your convenience and information, our website may contain links to
          other sites, which may have privacy policies that differ from our own.
          We are not responsible for the content or practices of any linked
          site. We recommend that you review the privacy policy of any site that
          you access through our site.
        </NormalText>

        <HeaderText className="mt-8 lg:mt-12">
          PRIVACY POLICY CHANGES
        </HeaderText>
        <NormalText className="mt-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this policy periodically for any updates.
        </NormalText>
      </div>
      <GetInTouchSection />
    </div>
  );
}
