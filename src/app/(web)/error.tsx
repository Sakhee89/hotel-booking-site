"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto items-center">
      <h2 className="font-heading text-red-800  mb-10 md:text-[30px]">
        Oh no... Something went wrong!
      </h2>

      <button onClick={() => reset()} className="btn-primary">
        Try Again
      </button>
    </div>
  );
}
