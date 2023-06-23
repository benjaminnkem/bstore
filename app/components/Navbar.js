"use client";
import { useEffect } from "react";
import NavControl from "./NavbarControl";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul className="flex items-center justify-center space-x-8 select-none py-14 text-slate-900">
          <li
            className={`relative font-semibold duration-100 hover:text-green-700 ${
              pathname === "/" ? "border-b-4 border-green-500" : "n-links"
            }`}
          >
            Home
          </li>
          <li
            className={`relative font-semibold duration-100 hover:text-green-700 n-links ${
              pathname === "/shop" ? "border-b-4 border-green-500" : "n-links"
            }`}
          >
            Shop
          </li>
          <li
            className={`relative font-semibold duration-100 hover:text-green-700 n-links ${
              pathname === "/about" ? "border-b-4 border-green-500" : "n-links"
            }`}
          >
            About
          </li>
          <li
            className={`relative font-semibold duration-100 hover:text-green-700 n-links ${
              pathname === "/contact" ? "border-b-4 border-green-500" : "n-links"
            }`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
