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

      {/* <section>
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
      </section> */}

      <section className="stat1-con">
        <div className="stat1">
          <div className="sales-con self-start">
            <div>
              <h3 className="font-extrabold text-2xl">
                Sales Stats<span className="text-purple-500">.</span>
              </h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="p-1 self-start">
              <h4 className="font-extrabold text-xl">
                Today Stats<span className="text-purple-500">.</span>
              </h4>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eligendi possimus fuga ratione
                aspernatur harum quod unde accusamus dolorum a! Nobis similique harum eius quas libero quos et totam.
                Minus?
              </p>
            </div>
            <div className="p-1 self-start">
              <h4 className="font-extrabold text-xl">
                This Week Stats<span className="text-purple-500">.</span>
              </h4>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, adipisci!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardDefault;
