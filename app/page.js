import Image from "next/image";
import DefaultWrapper from "./DefaultWrapper";
import "./components/styles/Default.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <DefaultWrapper>
        <header className="relative w-full -mt-20 overflow-hidden -z-10" id="header-con">
          <div className="w-full min-h-[30rem] flex justify-center items-center">
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <div className="flex items-center text-white">
                <div className="mt-[75px]">
                  <div>
                    <h1 className="text-3xl font-extrabold duration-200 lg:text-6xl md:text-5xl">
                      Happy Shopping (<span className="cursor-pointer hover:scale-150">😊</span>)
                    </h1>
                    <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed duration-200 lg:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ratione deleniti vitae
                      animi nemo libero! Iste voluptates amet praesentium ipsa? Et error iure ratione eaque numquam quas
                      aliquam voluptatum?
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            {/* <div className="h-[150px] overflow-hidden">
              <svg viewBox="0 0 500 149" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M-6.71,123.95 C255.78,87.95 360.78,43.95 502.66,102.95 L500.00,149.99 L0.01,149.99 Z"
                  className="stroke-none fill-[#F8FAFB] dark:fill-[#131313] duration-500"
                ></path>
              </svg>
            </div> */}
          </div>
        </header>

        <main className="py-12">
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
            <div className="flex justify-center">
              <input
                type="text"
                className="w-full dark:bg-[#363636] md:p-4 p-2 text-base md:text-lg text-gray-700 dark:text-gray-100 rounded-md outline-none max-w-lg md:max-w-xl border-4 dark:border-transparent border-[#e4e4e4] shadow-md duration-200 dark:focus:border-[#5b5b5b] focus:border-[#d3d3d3]"
                placeholder="Search for anything..."
              />
            </div>
            <section className="mt-20">
              <div className="flex flex-wrap gap-4 justify-evenly">
                <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
                  <div className="text-center">
                    <i className="text-5xl text-orange-400 ri-time-line"></i>
                  </div>
                  <h3 className="my-1 text-xl font-bold">100% Uptime</h3>
                  <p className="mt-2 text-lg font-light text-center text-gray-700 dark:text-gray-100">
                    Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit
                    quo!
                  </p>
                </div>
                <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
                  <div className="text-center">
                    <i className="text-5xl text-orange-400 ri-rocket-2-line"></i>
                  </div>
                  <h3 className="my-1 text-xl font-bold">100% Uptime</h3>
                  <p className="mt-2 text-lg font-light text-center text-gray-700 dark:text-gray-100">
                    Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit
                    quo!
                  </p>
                </div>
                <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
                  <div className="text-center">
                    <i className="text-5xl text-orange-400 ri-lightbulb-flash-line"></i>
                  </div>
                  <h3 className="my-1 text-xl font-bold">100% Uptime</h3>
                  <p className="mt-2 text-lg font-light text-center text-gray-700 dark:text-gray-100">
                    Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit
                    quo!
                  </p>
                </div>
              </div>
            </section>
          </div>
          <section className="my-24">
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <h2 className="my-8 text-3xl font-extrabold lg:text-4xl tp-text">Top Products</h2>
              <div className="first-showcase">
                {["", "", "", "", "", "", "", ""].map((img, idx) => (
                  <div key={idx} className="max-h-[36rem] overflow-hidden rounded-md relative duration-200">
                    <Link href={"#"} passHref>
                      <Image
                        src={`/images/products/prod${idx + 1}.jpg`}
                        alt="idx"
                        width={800}
                        height={800}
                        className="object-cover h-full rounded-md aspect-square"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="md:my-48 my-36">
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">
                    Tech, Gadgets & Accessories
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil.
                    </p>
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Soluta, doloremque., et dolorum velit nostrum impedit magnam earum!
                    </p>
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia, et dolorum velit nostrum
                      impedit magnam earum!
                    </p>
                    <div>
                      <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                        Tech, Gadgets & Accessories <i className="ri-menu-unfold-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod1.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="md:my-48 my-36">
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod4.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">
                    Kitchen Utensils & Gadgets
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil.
                    </p>
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia, et dolorum velit nostrum
                      impedit magnam earum!
                    </p>
                    <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                      Kitchen Utensils & Gadgets <i className="ri-menu-unfold-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="md:my-48 my-36">
            <div className="md:max-w-[1488px] w-11/12 mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">Food & Groceries</h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil <br /> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eos quae voluptate obcaecati commodi consectetur nostrum vitae,
                      veritatis consequatur debitis? Quidem.
                    </p>
                    <div>
                      <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                        Food & Groceries <i className="ri-menu-unfold-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod2.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default Home;
