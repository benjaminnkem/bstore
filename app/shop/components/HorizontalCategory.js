"use client";
import useCustomSlider from "@/app/hooks/useCustomSlider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HorizontalCategory = () => {
  const { slider, slideLeft, slideRight } = useCustomSlider();

  return (
    <>
      <div className="relative md:max-w-[1488px] w-11/12 mx-auto -mt-2">
        <div className="flex items-center p-2 space-x-4 overflow-y-auto scroll-smooth horizontal-cat" ref={slider}>
          {[
            "Games",
            "Clothes",
            "Food",
            "Tech",
            "Pets",
            "Automobiles",
            "Aqua",
            "Shoes",
            "PC",
            "Art",
            "Lab",
            "Utensils",
            "Gadgets",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ].map((item, idx) => (
            <div key={idx}>
              <button className="px-5 py-1 min-w-[2rem] rounded-lg text-sm duration-200 dark:hover:bg-[#2d2d2d] dark:bg-[#212121] bg-white hover:bg-[#f6f6f6]">
                {item ? item : "Category"}
              </button>
            </div>
          ))}
        </div>

        {/* Controllers */}
        <div className="absolute top-[2px] -left-[14px]">
          <i
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl ri-arrow-left-s-fill hover:opacity-75 dark:text-gray-300"
            onClick={slideLeft}
          ></i>
          {/* <FontAwesomeIcon /> */}
        </div>

        <div className="absolute -right-[14px] top-[2px]">
          <i
            className="z-20 text-3xl text-gray-400 duration-200 cursor-pointer md:text-4xl ri-arrow-right-s-fill hover:opacity-75 dark:text-gray-300"
            onClick={slideRight}
          ></i>
        </div>
      </div>
    </>
  );
};

export default HorizontalCategory;
