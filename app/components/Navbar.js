"use client";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [allItems, setAllItems] = useState(null);

  useEffect(() => {
    setAllItems(localStorage.getItem("cartItems"));
  }, [allItems])

  return (
    <>
      <nav>
        <ul className="flex items-center justify-center py-8 space-x-8 select-none md:py-14 text-slate-900 dark:text-slate-50">
          <Link href="/">
            <li
              className={`relative font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 ${
                pathname === "/" ? "border-b-4 border-green-500 text-lg" : "n-links"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/shop">
            <li
              className={`relative font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 ${
                pathname === "/shop" ? "border-b-4 border-green-500 text-lg" : "n-links"
              }`}
            >
              Shop
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`relative font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 ${
                pathname === "/about" ? "border-b-4 border-green-500 text-lg" : "n-links"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`relative font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 ${
                pathname === "/contact" ? "border-b-4 border-green-500 text-lg" : "n-links"
              }`}
            >
              Contact
            </li>
          </Link>
          <li className={`font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 relative`}>
            <i className="text-2xl ri-shopping-cart-2-line" id="nav-cart" data-shopping-items={`0`}></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
