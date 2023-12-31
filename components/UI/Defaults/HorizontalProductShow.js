"use client";
import Image from "next/image";
import Link from "next/link";
import useCustomSlider from "../../../lib/hooks/useCustomSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HorizontalProductShow = ({ products }) => {
  const { slider, slideLeft, slideRight } = useCustomSlider();

  return (
    <>
      <div className="relative flex items-center space-x-7">
        {/* Slider */}
        <div
          ref={slider}
          className="w-full h-full px-2 py-4 space-x-8 overflow-x-scroll overflow-y-auto scroll whitespace-nowrap scroll-smooth slider"
        >
          {products
            .slice(0, 12)
            .sort((pA, pB) => (pB.date_posted > pA.date_posted ? -1 : 1))
            .map((product) => (
              <Link href={`/products/${product._id}`} passHref key={product._id}>
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

        {/* Left arrow */}
        <div className="absolute -left-8 top-1/2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200"
            onClick={slideLeft}
          />
        </div>

        {/* Right arrow */}
        <div className="absolute -right-2 top-1/2">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl text-shadow hover:opacity-75 dark:text-gray-200"
            onClick={slideRight}
          />
        </div>
      </div>
    </>
  );
};

export default HorizontalProductShow;
