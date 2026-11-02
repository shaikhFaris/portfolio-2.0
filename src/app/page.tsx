import Home from "@/pages/Home";
import OpenSourceContributions from "@/sections/OpenSourceContributions";

// Also retry the contributions section hourly after an upstream API failure.
export const revalidate = 3600;

export default function page() {
  return (
    <Home>
      <OpenSourceContributions />
    </Home>
  );
}
