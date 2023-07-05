"use client";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={`z-50 shadow-sm ${pathname === "/" && "text-white"}`}>
        <div className="px-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                <Link href={"/"}>BStore</Link>
              </h1>
            </div>
            <nav>
              <ul className="flex items-center py-4 space-x-2 select-none">
                <Link href="/">
                  <li
                    className={`relative duration-100 dark:hover:text-green-200 px-2 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/" ? "text-green-400" : ""
                    }`}
                  >
                    <i className="text-lg ri-home-7-line"></i>
                  </li>
                </Link>
                <Link href="/shop">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-2 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/shop" ? "text-green-400" : ""
                    }`}
                  >
                    Shop
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-2 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/about" ? "text-green-400" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-green-200 px-2 py-[6px] rounded-md hover:text-green-700 ${
                      pathname === "/contact" ? "text-green-400 " : ""
                    }`}
                  >
                    Contact
                  </li>
                </Link>

                <div>
                  <div className="dark:bg-[#212121] bg-gray-300 rounded-md px-2 py-1">
                    <input
                      type="text"
                      className="text-gray-300 bg-transparent cursor-pointer focus:outline-none"
                      placeholder="Search"
                    />
                    <i className="ri-search-2-line"></i>
                  </div>
                </div>
              </ul>
            </nav>
            {/* <div className="flex items-center space-x-3">
              <i className="text-2xl duration-200 cursor-pointer hover:text-blue-600 ri-facebook-fill"></i>
              <i className="text-2xl duration-200 cursor-pointer hover:text-red-500 ri-instagram-fill"></i>
              <i className="text-2xl duration-200 cursor-pointer hover:text-cyan-600 ri-telegram-fill"></i>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
