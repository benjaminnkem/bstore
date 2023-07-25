import DashboardSidebar from "./components/SideBar";
import "./styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <DashboardSidebar />
      <div className="dash-container">
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
