"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();

  if (status === "loading" || status === "unauthenticated") {
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
                <ul className="sm:flex hidden items-center py-4 space-x-1 select-none">
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

                  <div>
                    <div
                      className={`dark:bg-[#212121] bg-gray-300 rounded-md border-2 border-transparent duration-200 focus-within:border-white border-opacity-25 px-2 py-1 ${
                        pathname === "/" && "bg-opacity-20"
                      }`}
                    >
                      <input
                        type="text"
                        className={`dark:text-gray-300 text-gray-700 duration-200 bg-transparent outline-none ${
                          pathname === "/" && "bg-opacity-20 text-gray-100"
                        }`}
                        placeholder="Search"
                      />
                      <i className="ri-search-2-line"></i>
                    </div>
                  </div>
                </ul>

                <ul className="flex sm:hidden items-center py-4 space-x-1 select-none">
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

                  <li className="">
                    <i className="ri-menu-3-line text-2xl cursor-pointer"></i>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (status === "authenticated") {
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
                <ul className="sm:flex hidden items-center py-4 space-x-2 select-none">
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
                        <i className="ri-search-2-line cursor-pointer"></i>
                      </div>

                      <ShoppingCartIcon />

                      <Link href={"/dash"} target="_blank" passHref title="Go to dashboard">
                        <div className="w-8 duration-200 h-8 border bg-black bg-opacity-40 rounded-full cursor-pointer border-opacity-25 border-gray-300 grid place-content-center">
                          <i className="ri-user-5-fill"></i>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>

                <ul className="flex sm:hidden items-center py-4 space-x-1 select-none">
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

                  <li className="">
                    <i className="ri-menu-3-line text-2xl cursor-pointer"></i>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
