"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid w-full h-screen text-center place-content-center">
      <div className="max-w-md">
        <h2 className="text-3xl">Sorry, an error occurred 😪</h2>
        <p className="text-gray-300 opacity-80">Our engineers have been notified and are on it.</p>
        
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
