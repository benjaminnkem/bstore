import "../styles/dashboard-default.css";
import DashTest from "./Test";

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
