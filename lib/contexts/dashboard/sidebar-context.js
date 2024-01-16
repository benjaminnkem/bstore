import { createContext, useContext } from "react";

const SidebarContext = createContext(null);

const SidebarProvider = ({ children }) => {
  // const role = "ADMIN"

  const links = [
    {
      name: "Home",
      href: "/dashboard",
      icon: <i className="ri-home-2-line"></i>,
      iconFilled: <i className="ri-home-2-fill"></i>,
    },
    {
      name: "Sales",
      href: "#",
      icon: <i className="ri-money-dollar-circle-line"></i>,
      iconFilled: <i className="ri-money-dollar-box-fill"></i>,
    },
    {
      name: "Reviews",
      href: "/dashboard/reviews",
      icon: <i className="ri-message-3-line"></i>,
      iconFilled: <i className="ri-message-3-fill"></i>,
    },
    {
      name: "Add New",
      href: `/dashboard/create`,
      icon: <i className="ri-add-line"></i>,
      iconFilled: <i className="ri-add-fill"></i>,
    },
  ];

  return <SidebarContext.Provider value={{ links }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar should be used inside SidebarProvider");
  return context;
};

export default SidebarProvider;
