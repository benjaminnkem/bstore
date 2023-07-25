import NextAuthProvider from "../components/NextAuthProvider";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardSidebar from "./components/SideBar";
import "./styles/dashboard.css";

const MainDashboardLayout = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <div className="dash-clamper">
          <DashboardSidebar />
          <div className="dash-container">
            <DashboardNavbar />
            <div className="dash-main-content">{children}</div>
          </div>
        </div>
      </NextAuthProvider>
    </>
  );
};

export default MainDashboardLayout;
