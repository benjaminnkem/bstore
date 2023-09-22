"use client";
import { DashMenuContext } from "@/lib/contexts/default/dashboard-menu-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu } = useContext(DashMenuContext);

  const links = [
    { name: "Home", href: "/dash", icon: "ri-dashboard-2-fill" },
    { name: "Sales", href: "#", icon: "ri-money-dollar-circle-line" },
    { name: "Reviews", href: "#", icon: "ri-message-3-line" },
    { name: "Create", href: `/dash/create`, icon: "ri-add-line" },
  ];

  return (
    <>
      <div className="relative">
        <div
          className={`fixed top-0 left-0 overflow-hidden duration-200 h-screen dark:bg-primaryDarkShade-200 bg-gray-100 ${
            isMenuOpen ? "w-full md:w-[240px] sm:w-[180px] z-50 right-0" : "md:w-[240px] sm:w-[180px] w-0"
          }`}
        >
          <div className="user-img-con p-4">
            <div className="flex justify-between items-center">
              <div></div>
              <div className="user-img"></div>
              <i className="ri-close-line text-2xl opacity-80 sm:hidden hover:cursor-pointer" onClick={toggleMenu}></i>
            </div>
          </div>

          <div className="link-container">
            {links.map((link, i) => (
              <Link href={link.href} key={i} passHref onClick={toggleMenu}>
                <div
                  className={`py-2 px-3 duration-500 flex my-2 cursor-pointer rounded-lg dark:hover:bg-primaryDarkShade-500 hover:bg-gray-300 ${
                    pathname === link.href && "dark:bg-primaryDarkShade-400 bg-gray-200"
                  }`}
                >
                  <i className={link.icon}></i>
                  <p>{link.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bottom-profile dark:bg-primaryDarkShade-200 bg-gray-200">
            <div className="bottom-container">
              <div className="mini-user-details-container">
                <div className="mini-img"></div>
                <div>
                  <h3 className="mini-username">Benjamin Nkem</h3>
                  <p className="mini-status">Online</p>
                </div>
              </div>
              <i className="ri-settings-2-line setting-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
