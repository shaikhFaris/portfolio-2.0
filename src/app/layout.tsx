import type { Metadata } from "next";
import "@/app/globals.css";
// import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://farix.xyz"),
  title: "Faris - Software Engineer",
  description:
    "I am a software developer, skilled in building amazing websites. Currently learning real software dev. I love docker btw.",
  keywords: [
    "Shaikh Mohammed Faris",
    "Faris",
    "Shaikh Faris",
    "Web developer",
    "Software Engineer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        {/* <Navbar /> */}
        <Overlay />
        {/* <div className="fixed z-40 text-[35px] bottom-3 right-3">
          <HiTerminal />
        </div> */}

        <div className="flex justify-center">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
