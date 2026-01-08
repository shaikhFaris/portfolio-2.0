"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.log(error);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  );
}
