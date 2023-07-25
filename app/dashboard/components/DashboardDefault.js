import "../styles/dashboard-default.css";

const DashboardDefault = () => {
  return (
    <>
      <div className="dashboard-default">
        <div>
          <h2 className="welcome-text">Welcome Back</h2>
          <p className="welcome-tip">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aspernatur sed eligendi ab sit sunt
            veritatis ut fugit alias provident!
          </p>
        </div>
      </div>

      <section>
        <div className="cards-con">
          <div className="card">
            <h3 className="card-head">
              This Month Sales (<i className="ri-money-dollar-box-line"></i>)
            </h3>

            <div className="card-con">
              <p>
                {
                  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
                    new Date().getMonth()
                  ]
                }
              </p>
              <p>$1.4k</p>
            </div>
          </div>
          <div className="card">
            <h3 className="card-head">
              Pending Sales (<i className="ri-money-dollar-box-line"></i>)
            </h3>

            <div className="card-con">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, consequuntur deserunt fugit
                architecto iure laborum totam animi nulla ipsa. Atque illum eius laborum quibusdam aut suscipit ratione
                tempore commodi inventore.
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="card-head">
              This Month Sales (<i className="ri-money-dollar-box-line"></i>)
            </h3>

            <div className="card-con">
              <p>
                {
                  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
                    new Date().getMonth()
                  ]
                }
              </p>
              <p>$1.4k</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardDefault;
