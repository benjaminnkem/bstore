"use client";
import { useState } from "react";

const DashboardSidebar = () => {
  const [links] = useState([
    { name: "Dashboard", href: "/dashboard", icon: "ri-dashboard-2-fill" },
    { name: "Sales", href: "#", icon: "ri-money-dollar-circle-line" },
    { name: "Reviews", href: "#", icon: "ri-message-3-line" },
  ]);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="user-img-con">
            <div className="user-img"></div>
          </div>

          <div className="link-container">
            {links.map((link, i) => (
              <div key={i} className="sidebar-links">
                <i className={link.icon}></i>
                <p>{link.name}</p>
              </div>
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
