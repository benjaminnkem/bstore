"use client";
import { DashMenuContext } from "@/lib/contexts/dashboard/dashboard-menu-context";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { TransitionStart } from "@/lib/utils/transition";
import { useUserData } from "@/lib/utils/auth-provider";
import { User, Rocket, DollarSign } from "lucide-react";

const DashboardNavbar = () => {
  const { toggleMenu } = useContext(DashMenuContext);
  const [navStatus, setNavStatus] = useState({ userIcoOpen: false, notiIcoOpen: false });
  const userInfo = useUserData();

  const toggleUserDropdown = () =>
    setNavStatus({ ...navStatus, userIcoOpen: !navStatus.userIcoOpen, notiIcoOpen: false });
  const toggleNotificationDropdown = () =>
    setNavStatus({ ...navStatus, notiIcoOpen: !navStatus.notiIcoOpen, userIcoOpen: false });

  return (
    <>
      <nav className="sticky top-0 left-0 w-full p-3 bg-white md:p-4 dark:bg-primaryDarkShade-200">
        <div className="nav-content">
          <h1>
            <Link href={`/dash`} passHref>
              <span className="dash-text">
                BS<span className="text-orange-500">.</span> Dashboard
              </span>
            </Link>
          </h1>

          <ul className="hidden space-x-1 sm:flex">
            <li className="cursor-pointer dark:hover:bg-primaryDarkShade-300 hover:bg-gray-300">
              <Link passHref href="/">
                <i className="ri-home-3-line"></i>
              </Link>
            </li>
            <li className="cursor-pointer dark:hover:bg-primaryDarkShade-300 hover:bg-gray-300">
              <p>Balance</p> <DollarSign />
            </li>
            <li className="cursor-pointer dark:hover:bg-primaryDarkShade-300 hover:bg-gray-300">
              <p>Plan</p> <Rocket />
            </li>

            <li className="cursor-pointer dark:hover:bg-primaryDarkShade-300 hover:bg-gray-300">
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
                      className={`min-w-[20rem] top-10 duration-200 rounded-md right-0 absolute dark:bg-primaryDarkShade-200 bg-gray-200 dark:border-primaryDarkShade-400 border-gray-300 border-4 z-[500]`}
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
                  className={`flex items-center justify-center duration-200 w-8 h-8 rounded-full dark:hover:bg-primaryDarkShade-300 cursor-pointer ${
                    navStatus.userIcoOpen ? "bg-orange-500" : "bg-transparent hover:bg-gray-300"
                  }`}
                  onClick={toggleUserDropdown}
                >
                  <User />
                </div>

                {navStatus.userIcoOpen && (
                  <TransitionStart>
                    <div
                      className={`min-w-[20rem] top-10 duration-200 rounded-2xl right-0 absolute dark:bg-primaryDarkShade-200 bg-white shadow-xl dark:border-primaryDarkShade-400 border-gray-100 border-4 z-[500]`}
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
                          <div className="grid w-20 h-20 mx-auto bg-orange-500 rounded-full place-content-center">
                            <User />
                          </div>

                          <p className="my-2 text-sm font-bold text-center opacity-60">{userInfo?.user?.name}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="w-full p-2 space-x-4 duration-200 rounded-md cursor-pointer dark:bg-primaryDarkShade-300 dark:hover:bg-primaryDarkShade-400 hover:bg-gray-300">
                            <User /> <span>Account</span>
                          </p>
                          <p className="w-full p-2 space-x-4 duration-200 rounded-md cursor-pointer dark:bg-primaryDarkShade-300 dark:hover:bg-primaryDarkShade-400 hover:bg-gray-300">
                            <i className="ri-settings-3-fill"></i> <span>Setting</span>
                          </p>

                          <button
                            className="w-full py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-primaryDark"
                            onClick={() => signOut({ callbackUrl: `/account/login` })}
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

          <ul className="flex space-x-1 sm:hidden">
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
      </nav>
    </>
  );
};

export default DashboardNavbar;
