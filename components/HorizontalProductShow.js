"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const HorizontalProductShow = ({ products }) => {
  const slider = useRef();

  const slideLeft = () => (slider.current.scrollLeft -= 500);
  const slideRight = () => (slider.current.scrollLeft += 500);

  return (
    <>
      <div className="relative flex items-center space-x-7">
        {/* Left arrow */}
        <div className="absolute left-0 top-1/2">
          <i
            className="text-3xl text-purple-300 duration-200 cursor-pointer md:text-4xl ri-arrow-left-s-fill hover:opacity-75 dark:text-white"
            onClick={slideLeft}
          ></i>
        </div>

        {/* Slider */} 
        <div
          id="slider"
          ref={slider}
          className="w-full h-full px-2 py-4 space-x-8 overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {products
            .sort((pA, pB) => (pB.date_posted > pA.date_posted ? -1 : 1))
            .map((product) => (
              <Link href={"#"} passHref key={product.id}>
                <div className="relative inline-block duration-300 ease-in-out border-4 rounded-lg shadow-md w-80 h-80 hover:scale-105" title={product.itemName}>
                  <Image
                    src={product.images[0]}
                    alt="Some Image"
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
            className="text-3xl text-purple-300 duration-200 cursor-pointer md:text-4xl ri-arrow-right-s-fill hover:opacity-75 dark:text-white"
            onClick={slideRight}
          ></i>
        </div>
      </div>
    </>
  );
};

export default HorizontalProductShow;
