"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { useContext, useState } from "react";
import { MenuOpenContext } from "../DefaultWrapper";

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const { toggleMenu } = useContext(MenuOpenContext);

  return (
    <>
      <div className={`z-50 shadow-sm ${pathname === "/" && "text-white"}`}>
        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                <Link href={"/"}>BStore</Link>
              </h1>
            </div>

            <nav>
              <ul className="items-center hidden py-4 space-x-2 select-none sm:flex">
                <Link passHref href={"/"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/" && "text-orange-400"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link passHref href={"/shop"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/shop" && "text-orange-400"
                    }`}
                  >
                    Explore
                  </li>
                </Link>
                <Link passHref href={"/about"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/about" && "text-orange-400"
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link passHref href={"/contact"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/contact" && "text-orange-400"
                    }`}
                  >
                    Contact
                  </li>
                </Link>

                <li>
                  <div className="flex items-center space-x-4">
                    <div>
                      <i className="cursor-pointer ri-search-2-line"></i>
                    </div>

                    <ShoppingCartIcon />

                    <Link href={"/dash"} target="_blank" passHref title="Go to dashboard">
                      <div className="grid w-8 h-8 duration-200 bg-black border border-gray-300 border-opacity-25 rounded-full cursor-pointer bg-opacity-40 place-content-center">
                        <i className="ri-user-5-fill"></i>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>

              <ul className="flex items-center py-4 space-x-1 select-none sm:hidden">
                <Link passHref href={"/"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/" && "text-orange-400"
                    }`}
                  >
                    <i className="ri-home-4-line"></i>
                  </li>
                </Link>
                <Link passHref href={"/shop"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/shop" && "text-orange-400"
                    }`}
                  >
                    Explore
                  </li>
                </Link>

                <li>
                  <i className="text-2xl cursor-pointer ri-menu-3-line" onClick={toggleMenu}></i>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
