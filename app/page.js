import Image from "next/image";
import DefaultWrapper from "./DefaultWrapper";
import "./components/styles/Default.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <DefaultWrapper>
        <header id="def-p" className="-mt-20">
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
            <svg viewBox="0 0 500 149" preserveAspectRatio="none" className="h-full w-full">
              <path
                d="M-6.71,123.95 C255.78,87.95 360.78,43.95 502.66,102.95 L500.00,149.99 L0.01,149.99 Z"
                className="stroke-none fill-[#F8FAFB] dark:fill-[#131313] duration-500"
              ></path>
            </svg>
          </div>
        </header>

        <section className="mt-20">
          <div className="flex justify-evenly flex-wrap gap-4 md:max-w-[1488px] w-11/12 mx-auto">
            <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
              <div className="text-center">
                <i className="ri-time-line text-5xl text-orange-400"></i>
              </div>
              <h3 className="font-bold text-xl my-1">100% Uptime</h3>

              <p className="mt-2 text-center text-lg text-gray-700 dark:text-gray-100 font-light">
                Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit quo!
              </p>
            </div>
            <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
              <div className="text-center">
                <i className="ri-rocket-2-line text-5xl text-orange-400"></i>
              </div>
              <h3 className="font-bold text-xl my-1">100% Uptime</h3>

              <p className="mt-2 text-center text-lg text-gray-700 dark:text-gray-100 font-light">
                Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit quo!
              </p>
            </div>
            <div className="shadow-md self-start text-center rounded-md mx-auto min-w-[5rem] max-w-sm p-5 bg-white dark:bg-[#363636]">
              <div className="text-center">
                <i className="ri-knife-blood-line text-5xl text-orange-400"></i>
              </div>
              <h3 className="font-bold text-xl my-1">100% Uptime</h3>

              <p className="mt-2 text-center text-lg text-gray-700 dark:text-gray-100 font-light">
                Lorem ipsum dolor sit amet consectetu quia, earum ullam sint odit culpa distinctio in autem impedit quo!
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className=" md:max-w-[1488px] w-11/12 mx-auto">
            <h2 className="text-4xl font-extrabold my-8 tp-text relative inline-block">Top Products</h2>

            <div className="first-showcase">
              {["", "", "", "", "", "", "", ""].map((img, idx) => (
                <div key={idx} className="max-h-[36rem] overflow-hidden rounded-md relative duration-200">
                  <Link href={"#"} passHref>
                    <Image
                      src={`/images/products/prod${idx + 1}.jpg`}
                      alt="idx"
                      width={800}
                      height={800}
                      className="rounded-md object-cover aspect-square h-full"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </DefaultWrapper>
    </>
  );
};

export default Home;
