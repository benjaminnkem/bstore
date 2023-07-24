import DefaultWrapper from "./DefaultWrapper";
import "./components/styles/Default.css";

const Home = () => {
  return (
    <>
      <DefaultWrapper>
        <div id="def-p" className="-mt-20">
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
            <div className="flex h-[30rem] items-center text-white">
              <div className="mt-[75px]">
                <div>
                  <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold">Happy Shopping (😊)</h1>
                  <p className="max-w-3xl mx-auto mt-4 leading-relaxed lg:text-lg text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ratione deleniti vitae animi
                    nemo libero! Iste voluptates amet praesentium ipsa? Et error iure ratione eaque numquam quas aliquam
                    voluptatum?
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="h-[150px] overflow-hidden">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
              <path
                d="M-6.71,123.95 C255.78,87.95 360.78,43.95 502.66,102.95 L500.00,149.99 L0.01,149.99 Z"
                className="stroke-none fill-[#F8FAFB] dark:fill-[#131313] duration-500"
              ></path>
            </svg>
          </div>
        </div>

        <div className="h-[200px]"></div>
      </DefaultWrapper>
    </>
  );
};

export default Home;
