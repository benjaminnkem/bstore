import "remixicon/fonts/remixicon.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About - BStore",
};

const About = () => {
  return (
    <>
      <div>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="flex justify-center py-20">
            <div className="grid items-center grid-cols-2 gap-4">
              <div>
                <div className="w-64 h-64 mx-auto border-4 border-green-600 rounded-md"></div>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl">BStore</h1>
                <p className="font-light leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero aliquid ab, laudantium delectus
                  vero molestias facere repudiandae expedita fuga ut. Minima vero sed a eaque culpa
                </p>

                <button className="px-4 py-2 mt-2 text-green-700 duration-100 border border-green-600 rounded-tl-2xl rounded-br-2xl hover:bg-green-600 hover:text-green-50">
                  Learn More <i className="ri-leaf-line"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="my-16">
            <div className="flex flex-wrap justify-evenly">
              <div className="grid max-w-xs p-6 m-4 mx-auto text-center rounded-md shadow-md place-content-center hover:shadow-2xl cursor-default duration-200">
                <i className="text-5xl text-green-400 ri-time-line"></i>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">Active 24/7</h3>
                  <p>
                    Our Customer Service agents are always available to attend to any of your complaints, need or open
                    suggestions 😇🥳
                  </p>
                </div>
              </div>
              <div className="grid max-w-xs p-6 m-4 mx-auto text-center rounded-md shadow-md place-content-center hover:shadow-2xl cursor-default duration-200">
                <i className="text-5xl text-red-400 ri-phone-fill"></i>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">Response Time</h3>
                  <p>
                    We <span className="font-bold text-green-800">@Bstore</span> response quickly to any request sent by
                    our users and visitors, to give you the users the best Xperience on our website. 😎
                  </p>
                </div>
              </div>
              <div className="grid max-w-xs p-6 m-4 mx-auto text-center rounded-md shadow-md place-content-center hover:shadow-2xl cursor-default duration-200">
                <i className="text-5xl text-green-400 ri-shopping-cart-2-line"></i>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">Shipping</h3>
                  <p>We ship products worldwide and as fast as possible, we got you covered at all times 💖</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
