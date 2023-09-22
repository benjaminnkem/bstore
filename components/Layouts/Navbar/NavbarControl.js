"use client";
import { useEffect } from "react";

const NavControl = () => {
  useEffect(() => {
    function scrollFunction() {
      if (window.scrollY >= 100) {
        console.log("somethig");
      }
    }
  
    window.addEventListener("scroll", scrollFunction);
  })

  return () => {
    window.removeEventListener("scroll", scrollFunction);
  };
};

export default NavControl;
