"use client";
import { DashMenuContext } from "@/app/context/DashboardMenu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faRocket, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { TransitionStart } from "@/lib/utils/transition";
import { CustomSessionDataContext } from "./DashboardWrapper";

const DashboardNavbar = () => {
  const { toggleMenu, isMenuOpen } = useContext(DashMenuContext);
  const [navStatus, setNavStatus] = useState({ userIcoOpen: false, notiIcoOpen: false });
  const userInfo = useContext(CustomSessionDataContext);

  const toggleUserDropdown = () =>
    setNavStatus({ ...navStatus, userIcoOpen: !navStatus.userIcoOpen, notiIcoOpen: false });
  const toggleNotificationDropdown = () =>
    setNavStatus({ ...navStatus, notiIcoOpen: !navStatus.notiIcoOpen, userIcoOpen: false });

  useEffect(() => console.log(userInfo), [navStatus, userInfo]);

  return (
    <>
      <div className="md:p-4 p-3 sticky top-0 w-full left-0 bg-primaryDarkShade-200">
        <div className="nav-content">
          <h1>
            <Link href={`/dashboard`} passHref>
              <span className="dash-text">BDashboard</span>
            </Link>
          </h1>

          <ul className="sm:flex hidden space-x-1">
            <li className="hover:bg-primaryDarkShade-300 cursor-pointer">
              <Link passHref href="/">
                <i className="ri-home-3-line"></i>
              </Link>
            </li>
            <li className="hover:bg-primaryDarkShade-300 cursor-pointer">
              <p>Balance</p> <FontAwesomeIcon icon={faMoneyBill} />
            </li>
            <li className="hover:bg-primaryDarkShade-300 cursor-pointer">
              <p>Plan</p> <FontAwesomeIcon icon={faRocket} />
            </li>

            <li className="hover:bg-primaryDarkShade-300 cursor-pointer">
              <div className="relative">
                <div
                  className={`flex items-center justify-center duration-200 w-8 h-8 rounded-full cursor-pointer ${
                    navStatus.notiIcoOpen ? "bg-orange-500" : "bg-transparent"
                  }`}
                  onClick={toggleNotificationDropdown}
                >
                  <FontAwesomeIcon icon={faBell} />
                </div>

                {navStatus.notiIcoOpen && (
                  <TransitionStart>
                    <div
                      className={`min-w-[20rem] top-10 duration-200 rounded-md right-0 absolute bg-primaryDarkShade-200 border-primaryDarkShade-400 border-4 z-[500]`}
                    >
                      <div className="relative p-4">
                        <p className="text-center">No notifications.</p>
                      </div>
                    </div>
                  </TransitionStart>
                )}
              </div>
            </li>

            <li>
              <div className="relative">
                <div
                  className={`flex items-center justify-center duration-200 w-8 h-8 rounded-full cursor-pointer ${
                    navStatus.userIcoOpen ? "bg-orange-500" : "bg-transparent"
                  }`}
                  onClick={toggleUserDropdown}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>

                {navStatus.userIcoOpen && (
                  <TransitionStart>
                    <div
                      className={`min-w-[20rem] top-10 duration-200 rounded-md right-0 absolute bg-primaryDarkShade-200 border-primaryDarkShade-400 border-4 z-[500]`}
                  >
                      <div className="relative p-4">
                        <div className="text-right">
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="text-xl cursor-pointer"
                            onClick={toggleUserDropdown}
                          />
                        </div>

                        <div>
                          <div className="w-20 h-20 bg-orange-500 mx-auto rounded-full grid place-content-center">
                            <FontAwesomeIcon icon={faUser} className="text-2xl" />
                          </div>

                          <p className="text-sm font-bold text-center my-2 opacity-60">{userInfo?.user?.name}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="p-2 cursor-pointer bg-primaryDarkShade-300 w-full space-x-4 rounded-md duration-200 hover:bg-primaryDarkShade-400">
                            <FontAwesomeIcon icon={faUser} /> <span>Account</span>
                          </p>
                          <p className="p-2 cursor-pointer bg-primaryDarkShade-300 w-full space-x-4 rounded-md duration-200 hover:bg-primaryDarkShade-400">
                            <i className="ri-settings-3-fill"></i> <span>Setting</span>
                          </p>

                          <button
                            className="w-full text-orange-500 border hover:bg-orange-500 border-orange-500 hover:text-primaryDark py-2 rounded-md"
                            onClick={() => signOut()}
                          >
                            Sign out <i className="ri-logout-box-r-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </TransitionStart>
                )}
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
