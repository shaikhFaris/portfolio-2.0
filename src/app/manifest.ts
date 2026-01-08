import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shaikh Mohammed Faris",
    short_name: "faris",
    description:
      "I am a software developer, skilled in building amazing websites. Currently learning real software dev.",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#e2e8f0",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
