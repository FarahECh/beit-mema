import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const aesthetic = localFont({
  src: "./fonts/Aesthetic-Regular.ttf",
  variable: "--font-aesthetic",
});

const dinNextLTPro = localFont({
  src: "./fonts/DINNextLTPro-Regular.ttf",
  variable: "--font-din-next-lt-pro",
});

const madeMirageBold = localFont({
  src: "./fonts/MADE Mirage Bold PERSONAL USE.otf",
  variable: "--font-made-mirage-bold",
});

const madeMirageMedium = localFont({
  src: "./fonts/MADE Mirage Medium PERSONAL USE.otf",
  variable: "--font-made-mirage-medium",
});

const madeMirageRegular = localFont({
  src: "./fonts/MADE Mirage Regular PERSONAL USE.otf",
  variable: "--font-made-mirage-regular",
});

const metropolisMedium = localFont({
  src: "./fonts/Metropolis-Medium.otf",
  variable: "--font-metropolis-medium",
});

const metropolisRegular = localFont({
  src: "./fonts/Metropolis-Regular.otf",
  variable: "--font-metropolis-regular",
});

export const metadata: Metadata = {
  title: "Beit Mema",
  description: "Beit Mema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${aesthetic.variable}
          ${dinNextLTPro.variable}
          ${madeMirageBold.variable}
          ${madeMirageMedium.variable}
          ${madeMirageRegular.variable}
          ${metropolisMedium.variable}
          ${metropolisRegular.variable}
          bg-main/20
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
