"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@/components/Common/Icons/ShoppingCartIcon";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/lib/store/auth-provider";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [];
  const { user } = useStore();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  if (user) {
    navLinks.push(
      { label: "Explore", path: "/shop", action: () => {} },
      { label: "About", path: "/about", action: () => {} },
      { label: "Contact", path: "/contact", action: () => {} }
    );
  } else {
    navLinks.push(
      { label: "Home", path: "/", action: () => {} },
      { label: "Explore", path: "/shop", action: () => {} },
      { label: "About", path: "/about", action: () => {} },
      { label: "Contact", path: "/contact", action: () => {} }
    );
  }

  return (
    <>
      <div className={`z-[2000] fixed w-full top-0 left-0 mt-4`}>
        <div className="md:max-w-[1488px] bg-white dark:bg-primaryDarkShade-300 dark:text-white rounded-full px-6 py-3 shadow-lg w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-wide">
                <Link href={"/"}>
                  B<span className="text-orange-500">.</span>
                </Link>
              </h1>
            </div>

            <nav>
              <ul className="items-center hidden space-x-2 select-none sm:flex">
                {navLinks.map((link, idx) => (
                  <Link passHref href={link.path} key={idx}>
                    <li
                      className={`relative font-semibold duration-300 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                        pathname === link.path && "text-orange-400 font-bold"
                      }`}
                      onClick={link.action}
                    >
                      {link.label}
                    </li>
                  </Link>
                ))}

                <li>
                  <div className="flex items-center space-x-4 font-semibold">
                    {!user ? (
                      <Link href={`/account/login`} target="_blank" passHref title={`Login or Signup`}>
                        <p>Login</p>
                      </Link>
                    ) : (
                      <>
                        <Link
                          href={`/dashboard`}
                          target="_blank"
                          passHref
                          title={`Go to dashboard`}
                          className="px-3 py-1 text-white duration-200 bg-orange-500 rounded-3xl hover:bg-orange-600"
                        >
                          <span>Dashboard</span>
                        </Link>
                      </>
                    )}
                    <div>
                      <i className="cursor-pointer ri-search-2-line"></i>
                    </div>
                    <ShoppingCartIcon size={"text-2xl"} />
                  </div>
                </li>
              </ul>

              <ul className="flex items-center space-x-1 select-none sm:hidden">
                <Link passHref href={"/"}>
                  <li
                    className={`relative font-semibold duration-100 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                      pathname === "/" && "text-orange-400"
                    }`}
                  >
                    <i className="ri-home-2-line"></i>
                  </li>
                </Link>
                <ShoppingCartIcon size={"text-base"} />
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
                  <i className="text-2xl cursor-pointer ri-menu-line" onClick={toggleMenu}></i>
                </li>
              </ul>
            </nav>
          </div>

          {/* Side Menu panel */}
          <div
            className={`fixed top-0 right-0 h-full bg-black z-[100] duration-500 overflow-hidden text-white md:hidden block ${
              mobileMenuOpen ? "w-full opacity-90" : "w-[.05px] opacity-0"
            }`}
          >
            <div
              className={`grid w-full h-full p-6 place-content-center ${
                mobileMenuOpen ? "opacity-100" : "opacity-0"
              } duration-200`}
            >
              <div>
                {/* Close button */}
                <FontAwesomeIcon
                  icon={faClose}
                  className="absolute mx-auto text-3xl text-center -translate-y-4 cursor-pointer ri-close-circle-line top-1/2 right-4"
                  onClick={toggleMenu}
                  title="Close"
                />

                <ul className={`duration-200 space-y-4 text-center`}>
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
                      href={`${status === "authenticated" ? "/dashboard" : "/account/login"}`}
                      passHref
                      onClick={toggleMenu}
                      target="_blank"
                      title={`${status === "authenticated" ? "Go to dashboard" : "Sign Up / Login"}`}
                    >
                      <p className="text-lg font-semibold text-gray-300">
                        {status === "authenticated" ? "Dashboard" : "Login/Sign up"}
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
