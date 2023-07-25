const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <div className="nav-content">
          <h1>
            <span className="dash-text">Dashboard</span>
          </h1>

          <ul>
            <li>
              <i className="ri-home-3-line"></i>
            </li>
            <li>
              <p>Balance</p> <i className="ri-money-dollar-circle-line"></i>
            </li>
            <li>
              <p>Plan</p> <i className="ri-rest-time-line"></i>
            </li>
            <li>
              <p>Logout</p> <i className="ri-logout-box-r-line"></i>
            </li>
            <li>
              <div className="nav-search-box">
                <input type="text" placeholder="Search" autoComplete="off"/>
                <i className="ri-search-2-line"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;