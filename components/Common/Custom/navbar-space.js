"use client";

import { usePathname } from "next/navigation";

const NavbarSpace = () => {
  const pathname = usePathname();

  const forbidden = ["/", "/about", "/account", "/dashboard"];
  for (const route of forbidden) if (pathname.startsWith(route)) return null;
  return <div className="h-[7rem]"></div>;
};

export default NavbarSpace;
