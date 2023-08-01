"use client";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";
import { SessionProvider } from "next-auth/react";

export const MenuOpenContext = createContext();

const DefaultWrapper = ({ children }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <NextAuthProvider>
        <MenuOpenContext.Provider value={{ toggleMenu }}>
          <Navbar />
        </MenuOpenContext.Provider>

        {/* Side Menu panel */}
        <div
          className={`fixed top-0 right-0 h-full bg-black bg-opacity-80 z-[100] duration-500 overflow-hidden md:hidden block ${
            mobileMenuOpen ? "w-full" : "w-[.5px]"
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
                  <Link href={"/dash"} passHref onClick={toggleMenu} target="_blank">
                    <p className="text-lg font-semibold text-gray-300">
                      Dashboard <i className="ri-external-link-line"></i>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NextAuthProvider>
      <SessionProvider>{children}</SessionProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
