import NextAuthProvider from "../components/NextAuthProvider";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardWrapper from "./components/DashboardWrapper";
import DashboardSidebar from "./components/SideBar";
import "./styles/dashboard.css";

export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <div className="dash-clamper">
          <DashboardWrapper>
            <DashboardSidebar />
            <div className="dash-container">
              <DashboardNavbar />
              <div className="dash-main-content">{children}</div>
            </div>
          </DashboardWrapper>
        </div>
      </NextAuthProvider>
    </>
  );
};

export default DashboardLayout;
