"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";

const DashboardSidebar = () => {
  const [username, setUsername] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") setUsername(session.user.name);
  }, [session, status]);

  const links = [
    { name: "Dashboard", href: "/" + username, icon: "ri-dashboard-2-fill" },
    { name: "Sales", href: "#", icon: "ri-money-dollar-circle-line" },
    { name: "Reviews", href: "#", icon: "ri-message-3-line" },
    { name: "Create", href: `/${username}/create`, icon: "ri-add-line" },
  ];

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="user-img-con">
            <div className="user-img"></div>
          </div>

          <div className="link-container">
            {links.map((link, i) => (
              <Link href={link.href} key={i} passHref>
                <div className="sidebar-links">
                  <i className={link.icon}></i>
                  <p>{link.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bottom-profile">
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
