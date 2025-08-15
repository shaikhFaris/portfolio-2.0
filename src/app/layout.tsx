import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
// import { HiTerminal } from "react-icons/hi";
// import BTerminal from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Faris - Software Engineer",
  description:
    "I am a software developer, skilled in building amazing websites. Currently learning real software dev. I love docker btw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] relative">
        {/* <BTerminal /> */}
        <Navbar />
        <Overlay />
        {/* <div className="fixed z-40 text-[35px] bottom-3 right-3">
          <HiTerminal />
        </div> */}
        <div className="flex justify-center">{children}</div>
      </body>
    </html>
  );
}
