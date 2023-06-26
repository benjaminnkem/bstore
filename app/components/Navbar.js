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
  }, [allItems]);

  return (
    <>
      <div>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">BStore</h1>
            </div>
            <nav>
              <ul className="flex items-center justify-center py-4 space-x-4 select-none text-slate-900 dark:text-slate-50">
                <Link href="/">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-4 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/" ? "bg-green-400 bg-opacity-50" : ""
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/shop">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-4 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/shop" ? "bg-green-400 bg-opacity-50" : ""
                    }`}
                  >
                    Shop
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-4 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/about" ? "bg-green-400 bg-opacity-50" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-4 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/contact" ? "bg-green-400 bg-opacity-50 " : ""
                    }`}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
            <div className="flex items-center space-x-3">
              <i className="text-2xl duration-200 cursor-pointer hover:text-blue-600 ri-facebook-fill"></i>
              <i className="text-2xl duration-200 cursor-pointer hover:text-red-600 ri-instagram-fill"></i>
              <i className="text-2xl duration-200 cursor-pointer hover:text-cyan-600 ri-telegram-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
