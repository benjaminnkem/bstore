"use client";
import { useSidebar } from "@/lib/contexts/dashboard/sidebar-context";
import { DashMenuContext } from "@/lib/contexts/dashboard/dashboard-menu-context";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { isMenuOpen, toggleMenu } = useContext(DashMenuContext);

  const { links } = useSidebar();

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
              <div className="user-img relative overflow-hidden">
                <Image
                  src={"/images/avatars/avatar-full.jpg"}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <i className="ri-close-line text-2xl opacity-80 sm:hidden hover:cursor-pointer" onClick={toggleMenu}></i>
            </div>
          </div>

          <div className="link-container">
            {links.map((link, i) => (
              <Link href={link.href} as={`${link.href}/?`} key={i} passHref onClick={toggleMenu}>
                <div
                  className={`py-2 px-3 duration-500 flex my-2 cursor-pointer rounded-lg dark:hover:bg-primaryDarkShade-500 hover:bg-gray-300 ${
                    pathname === link.href && "dark:bg-primaryDarkShade-400 bg-gray-200"
                  }`}
                >
                  {pathname === link.href ? <>{link.iconFilled}</> : <>{link.icon}</>}
                  <p>{link.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bottom-profile dark:bg-primaryDarkShade-200 bg-gray-200">
            <div className="bottom-container">
              <div className="mini-user-details-container">
                <div className="mini-img overflow-hidden">
                  <Image
                    src={"/images/avatars/avatar-full.jpg"}
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
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
