"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalCartItemContext = createContext();
const GlobalCartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemsInLocalStorage = localStorage.getItem("cartItems");
    JSON.parse(itemsInLocalStorage) !== null || undefined
      ? setCartItems(JSON.parse(itemsInLocalStorage))
      : setCartItems([]);
  }, []);

  const updateCartItems = (item) => {
    setCartItems((prev) => [...prev, item]);
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeCartItem = (item) => {
    const itemIndex = cartItems.indexOf(item);
    if (itemIndex < 0) return;

    const updatedItems = cartItems.filter((item) => item._id != cartItems[itemIndex]._id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const cartContext = {
    cartItems,
    setCartItems,
    updateCartItems,
    removeCartItem,
  };

  return <GlobalCartItemContext.Provider value={cartContext}>{children}</GlobalCartItemContext.Provider>;
};

export default GlobalCartItemsProvider;
