"use client";
import { createContext, useState } from "react";

export const CartItemContext = createContext();
const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([{}]);

  const updateCartItems = (items) => {
    setCartItems((prev) => [...prev, items]);
  };

  const removeCartItems = (items) => {};

  const cartContext = {
    cartItems,
    updateCartItems,
    removeCartItems,
  };

  return <CartItemContext.Provider value={cartContext}>{children}</CartItemContext.Provider>;
};

export default CartItemsProvider;
