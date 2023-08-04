"use client";
import useCustomSlider from "@/app/hooks/useCustomSlider";

const HorizontalCategory = () => {
  const { slider, slideLeft, slideRight } = useCustomSlider(200);

  return (
    <>
      <div className="relative md:max-w-[1488px] w-11/12 mx-auto">
        <div className="flex items-center p-2 space-x-4 overflow-y-auto scroll-smooth horizontal-cat" ref={slider}>
          {["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((item, idx) => (
            <div key={idx}>
              <button className="px-3 py-1 rounded-lg text-sm duration-200 hover:bg-[#2d2d2d] bg-[#212121]">
                Category
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
