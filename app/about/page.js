import Image from "next/image";
import DefaultWrapper from "../../lib/utils/DefaultWrapper";
import "./styles/about.css";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <div className="wrapper">
        <DefaultWrapper>
          <header className="min-h-[40rem] flex items-center -mt-[5rem] relative">
            <Image
              src={"/images/bg/about-bg.jpg"}
              alt="header cover"
              width={1920}
              height={1000}
              className="absolute top-0 left-0 object-cover w-full h-full -z-20"
            />

            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-t from-[#131313] to-transparent"></div>

            <div className="absolute top-0 left-0 flex items-center w-full h-full">
              <div className="md:max-w-[1488px] w-11/12 mx-auto mt-[2.5rem]">
                <div className="space-y-4 text-white">
                  <h1 className="inline-block text-3xl font-extrabold duration-200 md:text-5xl sm:text-4xl bstore">
                    About Us
                  </h1>
                  <p className="max-w-3xl text-lg text-shadow">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ratione nihil, voluptatem nam
                    quae esse sint consequuntur debitis cum optio ea pariatur nostrum dolor culpa tempore harum impedit,
                    velit ad?
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main>
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <div className="mb-16 -mt-8">
                <div className="flex flex-wrap justify-evenly">
                  <div className="grid max-w-xs p-6 m-4 mx-auto text-center duration-300 bg-white shadow-md cursor-default hover:-translate-y-3 ease-in-out rounded-2xl dark:bg-[#272727] place-content-center hover:shadow-2xl">
                    <i className="text-5xl text-orange-400 ri-time-line"></i>
                    <div className="mt-3">
                      <h3 className="text-lg font-semibold">Active 24/7</h3>
                      <p>
                        Our Customer Service agents are always available to attend to any of your complaints, need or
                        open suggestions 😇🥳
                      </p>
                    </div>
                  </div>
                  <div className="grid max-w-xs p-6 m-4 mx-auto text-center duration-300 bg-white shadow-md cursor-default hover:-translate-y-3 ease-in-out rounded-2xl dark:bg-[#272727] place-content-center hover:shadow-2xl">
                    <i className="text-5xl text-red-400 ri-phone-fill"></i>
                    <div className="mt-3">
                      <h3 className="text-lg font-semibold">Response Time</h3>
                      <p>
                        <span className="font-bold text-orange-500">@Bstore</span> Our upmost priority is response time,
                        we make sure no ones has any questions left unanswered
                      </p>
                    </div>
                  </div>
                  <div className="grid max-w-xs p-6 m-4 mx-auto text-center duration-300 bg-white shadow-md cursor-default hover:-translate-y-3 ease-in-out rounded-2xl dark:bg-[#272727] place-content-center hover:shadow-2xl">
                    <i className="text-5xl text-orange-400 ri-shopping-cart-2-line"></i>
                    <div className="mt-3">
                      <h3 className="text-lg font-semibold">Shipping</h3>
                      <p>We ship products worldwide and as fast as possible, we got you covered at all times 💖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </DefaultWrapper>
      </div>
    </>
  );
};

export default About;
