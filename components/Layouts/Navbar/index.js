"use client";
import Link from "next/link";
import "./styles/Navbar.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import ShoppingCartIcon from "@/components/Common/Icons/ShoppingCartIcon";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "@/lib/contexts/global/auth-provider";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user } = useUserData();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Explore", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className={`z-50 ${(pathname === "/" || pathname === "/about") && "text-white bg-transparent"}`}>
        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl tracking-wide font-bold">
                <Link href={"/"}>
                  BS<span className="text-orange-500">.</span>
                </Link>
              </h1>
            </div>

            <nav>
              <ul className="items-center hidden py-4 space-x-2 select-none sm:flex">
                {navLinks.map((link, idx) => (
                  <Link passHref href={link.path} key={idx}>
                    <li
                      className={`relative font-semibold duration-300 dark:hover:text-orange-200 px-2 py-[6px] rounded-md hover:text-orange-500 ${
                        pathname === link.path && "text-orange-400 font-bold"
                      }`}
                    >
                      {link.label}
                    </li>
                  </Link>
                ))}

                <li>
                  <div className="flex items-center font-semibold space-x-4">
                    {!user ? (
                      <Link href={`/account/login`} target="_blank" passHref title={`Login or Signup`}>
                        <p>Account</p>
                      </Link>
                    ) : (
                      <>
                        <Link
                          href={`/dash`}
                          target="_blank"
                          passHref
                          title={`Go to dashboard`}
                          className="bg-orange-500 text-white px-3 py-1 rounded-3xl hover:bg-orange-600 duration-200"
                        >
                          <p>Dashboard</p>
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
                  <i className="text-2xl cursor-pointer ri-menu-3-line" onClick={toggleMenu}></i>
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
                      href={`${status === "authenticated" ? "/dash" : "/account/login"}`}
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
