"use client";
import { createContext, useEffect, useState } from "react";

export const DashMenuContext = createContext();

const DashboardMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const value = {
    isMenuOpen,
    toggleMenu,
  };

  return <DashMenuContext.Provider value={value}>{children}</DashMenuContext.Provider>;
};

export default DashboardMenuProvider;
