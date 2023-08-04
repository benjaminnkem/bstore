"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <div className={`z-50 shadow-sm ${pathname === "/" ? "text-white bg-transparent" : "bg-white dark:bg-transparent"}`}>
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

                    <Link
                      href={`${status === "authenticated" ? "/dash" : "/admin/login"}`}
                      target="_blank"
                      passHref
                      title={`${status === "authenticated" ? "Go to dashboard" : "Login"}`}
                    >
                      <div className="grid w-8 h-8 duration-200 dark:bg-black bg-gray-300 border border-gray-300 border-opacity-25 rounded-full cursor-pointer bg-opacity-40 place-content-center">
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

          {/* Side Menu panel */}
          <div
            className={`fixed top-0 right-0 h-full bg-black bg-opacity-80 z-[100] duration-500 overflow-hidden md:hidden block ${
              mobileMenuOpen ? "w-full" : "w-[.05px]"
            }`}
          >
            <div className="grid w-full h-full p-6 place-content-center">
              <div>
                {/* Close button */}
                <i
                  className="absolute mx-auto text-3xl text-center -translate-y-4 cursor-pointer ri-close-circle-line top-1/2 right-4"
                  onClick={toggleMenu}
                ></i>

                <ul className="space-y-4 text-center">
                  <li>
                    <Link href={"/"} passHref onClick={toggleMenu}>
                      <p className={`text-lg font-semibold ${pathname === "/" && "text-orange-500"}`}>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"} passHref onClick={toggleMenu}>
                      <p className={`text-lg font-semibold ${pathname === "/about" && "text-orange-500"}`}>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"} passHref onClick={toggleMenu}>
                      <p className={`text-lg font-semibold ${pathname === "/contact" && "text-orange-500"}`}>Contact</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${status === "authenticated" ? "/dash" : "/admin/login"}`}
                      passHref
                      onClick={toggleMenu}
                      target="_blank"
                      title={`${status === "authenticated" ? "Go to dashboard" : "Login"}`}
                    >
                      <p className="text-lg font-semibold text-gray-300">
                        Dashboard <i className="ri-external-link-line"></i>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
