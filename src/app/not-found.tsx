import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl">Page Not Found</h2>
      <Link className="text-sm underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
