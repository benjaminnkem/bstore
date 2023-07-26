"use client";
import { createContext, useState } from "react";
export const DashCreateContext = createContext();

const CreateContextProvider = ({ children }) => {
  const [curSelection, setCurSelection] = useState("product");
  const value = {
    curSelection,
    setCurSelection,
  };

  return <DashCreateContext.Provider value={value}>{children}</DashCreateContext.Provider>;
};

export default CreateContextProvider;
