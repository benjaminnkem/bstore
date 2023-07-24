"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={`z-50 shadow-sm`}>
        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                <Link href={"/"}>BStore</Link>
              </h1>
            </div>
            <nav>
              <ul className="flex items-center py-4 space-x-2 select-none">
                <Link href={"/"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-700 ${
                      pathname === "/" ? "text-orange-400" : ""
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link href={"/shop"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-700 ${
                      pathname === "/shop" ? "text-orange-400" : ""
                    }`}
                  >
                    Explore
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-700 ${
                      pathname === "/about" ? "text-orange-400" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link href={"/contact"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-700 ${
                      pathname === "/contact" ? "text-orange-400 " : ""
                    }`}
                  >
                    Contact
                  </li>
                </Link>

                <div>
                  <div className="dark:bg-[#212121] bg-gray-300 rounded-md px-2 py-1">
                    <input
                      type="text"
                      className="dark:text-gray-300 text-gray-700 bg-transparent focus:outline-none"
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
