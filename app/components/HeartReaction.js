"use client";

import { useState } from "react";

const heartDefaultClass =
  "absolute text-lg font-bold duration-200 cursor-pointer bottom-2 right-2 md:text-3xl sm:text-2xl product-text shadow-md";
const HeartReaction = () => {
  const [favorite, setFavorite] = useState(false);

  const handleHeartReaction = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  return (
    <>
      <i
        className={`${heartDefaultClass} ${favorite ? "opacity-0" : "opacity-100"} ri-heart-2-line`}
        onClick={(e) => handleHeartReaction(e)}
      ></i>

      <i
        className={`${heartDefaultClass} ${favorite ? "opacity-100" : "opacity-0"} ri-heart-2-fill text-[red]`}
        onClick={(e) => handleHeartReaction(e)}
      ></i>
    </>
  );
};

export default HeartReaction;
