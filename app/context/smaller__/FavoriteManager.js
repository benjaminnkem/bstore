"use client";

import { createContext, useEffect, useState } from "react";

export const FavoriteItemContext = createContext();
const FavoriteItemProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItem] = useState([]);

  useEffect(() => {
    const favoriteInLS = localStorage.getItem("favoriteItems"); // LS -> Local Storage
    if (!favoriteInLS) return;
    setFavoriteItem(JSON.parse(favoriteInLS));
  }, []);

  const addFav = (productId) => {
    if (favoriteItems.indexOf(productId) > 0) return;
    setFavoriteItem((prev) => [...prev, productId]);
  };
  
  const removeFav = (productId) => {
    const updatedFav = favoriteItems.filter((favId) => favId !== productId);
    setFavoriteItem(updatedFav);
  };

  useEffect(() => localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems)), [favoriteItems]);

  const value = {
    favoriteItems,
    addFav,
    removeFav,
  };

  return <FavoriteItemContext.Provider value={value}>{children}</FavoriteItemContext.Provider>;
};

export default FavoriteItemProvider;
