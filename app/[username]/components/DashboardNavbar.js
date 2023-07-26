"use client";
import { DashMenuContext } from "@/app/context/DashboardMenu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useContext, useEffect } from "react";

const DashboardNavbar = () => {
  const { toggleMenu, isMenuOpen } = useContext(DashMenuContext);

  return (
    <>
      <div className="md:p-4 p-3 sticky top-0 w-full left-0 dash-nav">
        <div className="nav-content">
          <h1>
            <span className="dash-text">Dashboard</span>
          </h1>

          <ul className="sm:flex hidden space-x-1">
            <li>
              <Link passHref href="/">
                <i className="ri-home-3-line"></i>
              </Link>
            </li>
            <li>
              <p>Balance</p> <i className="ri-money-dollar-circle-line"></i>
            </li>
            <li>
              <p>Plan</p> <i className="ri-rest-time-line"></i>
            </li>
            <li onClick={() => signOut()}>
              <p>Logout</p> <i className="ri-logout-box-r-line"></i>
            </li>
            <li className="focus-within:border-[#4a4c61] border border-transparent">
              <div className="nav-search-box">
                <input type="text" placeholder="Search" autoComplete="off" />
                <i className="ri-search-2-line"></i>
              </div>
            </li>
          </ul>

          <ul className="flex sm:hidden space-x-1">
            <li>
              <Link passHref href="/">
                <i className="ri-home-3-line"></i>
              </Link>
            </li>
            <li className="border border-transparent">
              <i className="ri-user-3-line"></i>
            </li>
            <li className="border border-transparent">
              <i className="ri-search-2-line"></i>
            </li>
            <li className="border border-transparent" role="menubar" aria-label="Open Menu List" title="Open Menu">
              <i className="ri-menu-4-line" onClick={() => toggleMenu()}></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
