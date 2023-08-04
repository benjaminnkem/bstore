"use client";
import Image from "next/image";
import Link from "next/link";
import useCustomSlider from "../hooks/useCustomSlider";

const HorizontalProductShow = ({ products }) => {
  const { slider, slideLeft, slideRight } = useCustomSlider();

  return (
    <>
      <div className="relative flex items-center space-x-7">
        {/* Left arrow */}
        <div className="absolute left-0 top-1/2">
          <i
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl ri-arrow-left-circle-fill hover:opacity-75 dark:text-gray-300"
            onClick={slideLeft}
          ></i>
        </div>

        {/* Slider */}
        <div
          ref={slider}
          className="w-full h-full px-2 py-4 space-x-8 overflow-x-scroll overflow-y-auto -z-10 scroll whitespace-nowrap scroll-smooth slider"
        >
          {products
            .sort((pA, pB) => (pB.date_posted > pA.date_posted ? -1 : 1))
            .map((product) => (
              <Link href={"#"} passHref key={product._id}>
                <div
                  className="relative inline-block duration-300 ease-in-out border-4 rounded-lg shadow-md w-80 h-80 hover:scale-105"
                  title={product.itemName}
                >
                  <Image
                    src={product.images[0]}
                    alt={`Some Image`}
                    width={360}
                    height={360}
                    className="object-cover h-full rounded-md aspect-square"
                  />
                </div>
              </Link>
            ))}
        </div>

        {/* Right arrow */}
        <div className="absolute -right-4 top-1/2">
          <i
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl ri-arrow-right-circle-fill hover:opacity-75 dark:text-gray-300"
            onClick={slideRight}
          ></i>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductShow;
