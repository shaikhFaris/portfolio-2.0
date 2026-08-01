import type { Metadata } from "next";
import "@/app/globals.css";
// import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://farix.xyz"),
  title: "Faris - Software Engineer",
  description:
    "I am a software engineer, skilled in building cool stuff. Currently I am diving deep into production grade backends and distributed systems.",

  openGraph: {
    title: "Faris - Software Engineer",
    description:
      "I am a software engineer, skilled in building cool stuff. Currently I am diving deep into production grade backends and distributed systems.",
    url: "https://farix.xyz",
    siteName: "Faris",
    images: [
      {
        url: "/opengraph-image.png", // put this inside public/
        width: 1200,
        height: 630,
        alt: "Faris Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris - Software Engineer",
    description: "I am a software engineer, skilled in building cool stuff.",
    images: ["/twitter-image.png"],
  },
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
