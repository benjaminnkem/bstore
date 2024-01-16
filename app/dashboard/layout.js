import "./(dashboard)/styles/dashboard.css";
import DashboardMenuProvider from "@/lib/contexts/dashboard/dashboard-menu-context";
import DashboardSidebar from "@/components/UI/Dashboard/Main/DashboardSideBar";
import DashboardNavbar from "@/components/UI/Dashboard/Main/DashboardNavbar";
import { getSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const MainDashboardLayout = ({ children }) => {
  const session = getSession(authOptions);

  if (!session) {
    redirect("/account/login");
  }

  return (
    <>
      <div className="dash-clamper">
        <DashboardMenuProvider>
          <DashboardSidebar />

          <div className="dash-container md:ml-[240px] sm:ml-[180px] duration-200">
            <DashboardNavbar />

            <div className="dash-main-content">{children}</div>
          </div>
        </DashboardMenuProvider>
      </div>
    </>
  );
};

export default MainDashboardLayout;
