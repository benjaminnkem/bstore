"use client";
import { createContext, useState } from "react";

export const DashCreateContext = createContext();

const CreationContextProvider = ({ children }) => {
  const [curSelection, setCurSelection] = useState("product");

  const value = {
    curSelection,
    setCurSelection,
  };

  return <DashCreateContext.Provider value={value}>{children}</DashCreateContext.Provider>;
};

export default CreationContextProvider;
