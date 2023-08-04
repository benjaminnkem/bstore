"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HorizontalProductShow = ({ products }) => {
  const slider = useRef();
  useEffect(() => console.log(products), [])

  const slideLeft = () => (slider.current.scrollLeft -= 500);
  const slideRight = () => (slider.current.scrollLeft += 500);

  return (
    <>
      <div className="relative flex items-center space-x-7">
        {/* Left arrow */}
        <div className="absolute left-0 top-1/2">
          <i
            className="text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl z-20 ri-arrow-left-circle-fill hover:opacity-75 dark:text-gray-100"
            onClick={slideLeft}
          ></i>
        </div>

        {/* Slider */}
        <div
          id="slider"
          ref={slider}
          className="w-full h-full px-2 py-4 space-x-8 -z-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
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
        <div className="absolute right-0 top-1/2">
          <i
            className="text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl z-20 ri-arrow-right-circle-fill hover:opacity-75 dark:text-gray-100"
            onClick={slideRight}
          ></i>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductShow;
