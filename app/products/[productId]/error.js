"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid w-full h-screen text-center place-content-center">
      <div className="max-w-md">
        <h2 className="text-3xl">This product does not exist or An error occurred</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 my-4 duration-200 border-2 rounded-lg hover:bg-white hover:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
