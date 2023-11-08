"use client";

import { usePathname } from "next/navigation";

const NavbarSpace = () => {
  const pathname = usePathname();

  const forbidden = ["/", "/about", "/account/signup", "/account/login"];
  for (const route of forbidden) if (route === pathname) return null;
  return <div className="h-[7rem]"></div>;
};

export default NavbarSpace;
