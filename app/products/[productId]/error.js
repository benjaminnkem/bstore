"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-content-center text-center w-full h-screen">
      <div className="max-w-md">
        <h2 className="text-3xl">This product does not exist or An error occurred</h2>
        <button
          onClick={() => reset()}
          className="border-2 px-4 py-2 rounded-lg my-4 duration-200 hover:bg-white hover:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
