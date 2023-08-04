"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalCartItemContext = createContext();
const GlobalCartItemsProvider = ({ children }) => {
  const [sideCartItemDisplay, setSideCartItemDisplay] = useState(false);
  const [totalItemsCost, setTotalItemsCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemsInLocalStorage = localStorage.getItem("cartItems");
    JSON.parse(itemsInLocalStorage) !== null || undefined
      ? setCartItems(JSON.parse(itemsInLocalStorage))
      : setCartItems([]);
  }, []);

  useEffect(() => localStorage.setItem("cartItems", JSON.stringify(cartItems)), [cartItems]);

  const toggleSideCartView = () => {
    if (!sideCartItemDisplay) {
      setSideCartItemDisplay(true);
    } else {
      setSideCartItemDisplay(false);
    }
  };

  const updateCartItems = (item) => {
    const itemExists = cartItems.find((itemCheck) => itemCheck._id === item._id);
    if (itemExists) {
      toggleSideCartView();
      return;
    }

    setCartItems((prev) => [...prev, item]);
  };

  const removeCartItem = (item) => {
    const itemIndex = cartItems.indexOf(item);
    if (itemIndex < 0) return;
    const updatedItems = cartItems.filter((item) => itemIndex !== cartItems.indexOf(item));
    setCartItems(updatedItems);
  };

  function calculateTotalCosts() {
    if (cartItems.length === 0) return;
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalItemsCost(totalCost);
  }

  const cartContext = {
    cartItems,
    updateCartItems,
    removeCartItem,
    calculateTotalCosts,
    totalItemsCost,
    sideCartItemDisplay,
    setSideCartItemDisplay,
  };

  return <GlobalCartItemContext.Provider value={cartContext}>{children}</GlobalCartItemContext.Provider>;
};

export default GlobalCartItemsProvider;
