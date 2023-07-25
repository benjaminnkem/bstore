"use client";
import { createContext, useState } from "react";

const GlobalCartItems = () => {
  const [cartItems, setCartItems] = useState([{}]);
  const CartItemContext = createContext(cartItems);

  const updateCartItems = (items) => {
    setCartItems((prev) => [...prev, items]);
  };

  return <></>;
};

export default GlobalCartItems;
