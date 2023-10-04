import "./(dashboard)/styles/dashboard.css";
import DashboardAuthWrapper from "@/lib/contexts/dashboard/dashboard-wrapper";
import DashboardMenuProvider from "@/lib/contexts/dashboard/dashboard-menu-context";
import DashboardSidebar from "@/components/UI/Dashboard/Main/DashboardSideBar";
import DashboardNavbar from "@/components/UI/Dashboard/Main/DashboardNavbar";

const MainDashboardLayout = ({ children }) => {
  return (
    <>
      <div className="dash-clamper">
        <DashboardAuthWrapper>
          <DashboardMenuProvider>
            <DashboardSidebar />

            <div className="dash-container md:ml-[240px] sm:ml-[180px] duration-200">
              <DashboardNavbar />

              <div className="dash-main-content">{children}</div>
            </div>
          </DashboardMenuProvider>
        </DashboardAuthWrapper>
      </div>
    </>
  );
};

export default MainDashboardLayout;
