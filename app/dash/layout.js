import NextAuthProvider from "../components/NextAuthProvider";
import DashboardMenuProvider from "../context/DashboardMenu";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardAuthWrapper from "./contexts/DashboardWrapper";
import DashboardSidebar from "./components/DashboardSideBar";
import "./styles/dashboard.css";

const MainDashboardLayout = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
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
      </NextAuthProvider>
    </>
  );
};

export default MainDashboardLayout;
