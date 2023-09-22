"use client";

import { useContext, useEffect, useState } from "react";
import { FavoriteItemContext } from "../../../lib/contexts/default/favorite-items-context";

const heartDefaultClass =
  "absolute text-lg font-bold duration-200 cursor-pointer bottom-2 right-2 md:text-3xl sm:text-2xl product-text";

const HeartReaction = ({ product }) => {
  const [favorite, setFavorite] = useState(null);
  const { favoriteItems, addFav, removeFav } = useContext(FavoriteItemContext);
  const [favText, setFavText] = useState("Add to Fav");

  useEffect(() => {
    if (favoriteItems.indexOf(product._id) < 0) {
      setFavorite(false);
      setFavText("Add to Fav");
      return;
    }

    setFavorite(true);
    setFavText("Added to Fav");
  }, [favoriteItems, product._id]);

  const handleHeartReaction = (e) => {
    e.preventDefault();
    setFavorite(!favorite);

    favorite ? removeFav(product._id) : addFav(product._id);
  };

  return (
    <>
      <div className="group">
        <span className="absolute p-1 text-xs text-white duration-300 bg-gray-900 rounded-md opacity-0 sm:bottom-[2.7rem] bottom-[2.4rem] right-[0.3rem] group-hover:opacity-100">
          {favText}
        </span>

        <i
          className={`${heartDefaultClass} ${
            favorite ? "opacity-0" : "opacity-100"
          } ri-heart-2-line hover:animate-pulse`}
          onClick={(e) => handleHeartReaction(e)}
        ></i>

        <i
          className={`${heartDefaultClass} ${
            favorite ? "opacity-100" : "opacity-0"
          } ri-heart-2-fill text-[red] hover:animate-pulse`}
          onClick={(e) => handleHeartReaction(e)}
        ></i>
      </div>
    </>
  );
};

export default HeartReaction;
