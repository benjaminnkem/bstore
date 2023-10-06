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
          <div className="p-4 user-img-con">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="relative overflow-hidden user-img">
                <Image
                  src={"/images/avatars/avatar-full.jpg"}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <i className="text-2xl ri-close-line opacity-80 sm:hidden hover:cursor-pointer" onClick={toggleMenu}></i>
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

          <div className="bg-gray-200 bottom-profile dark:bg-primaryDarkShade-200">
            <div className="bottom-container">
              <div className="mini-user-details-container">
                <div className="overflow-hidden mini-img">
                  <Image
                    src={"/images/avatars/avatar-full.jpg"}
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="mini-username">Benjamin Nkem</h3>
                  <p className="mini-status">Online</p>
                </div>
              </div>
              <Link href={"/dash/settings"}>
                <i className="ri-settings-2-line setting-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
