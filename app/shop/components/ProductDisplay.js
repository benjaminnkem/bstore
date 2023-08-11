"use client";
import { createContext, useContext, useEffect } from "react";
import ProductTemplate from "./ProductTemplate";
import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";

export const ShopContext = createContext();

const ProductDisplay = ({ items }) => {
  const { updateCartItems, calculateTotalCosts, sideCartItemDisplay, toggleSideCartView } =
    useContext(GlobalCartItemContext);

  const addItemToCart = (item) => updateCartItems(item);
  useEffect(() => calculateTotalCosts(), []);

  const contextValue = {
    items,
    addItemToCart,
    calculateTotalCosts,
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        <main>
          <div
            className="sm:grid gap-4 md:max-w-[1488px] w-11/12 mx-auto my-8"
            style={{ gridTemplateColumns: "1.5fr 5fr" }}
          >
            <div className="sm:sticky self-start p-2 overflow-hidden mb-4 sm:mb-0 bg-white dark:bg-[#212121] duration-200 rounded-lg shadow-lg top-4">
              <h2 className="text-xl font-semibold">Categories</h2>

              <div className="flex flex-wrap mt-2 space-x-2">
                {[
                  "#General",
                  "Cloth 👚",
                  "TV 📺",
                  "Fish 🐟",
                  "Motorbike 🏍",
                  "Chair 🪑",
                  "Fashion 💄",
                  "Tech ⚙",
                  "PC 📺",
                  "Speakers 🔊",
                  "Airpods",
                  "Musical Instruments 🎹🎷",
                  "Electronics ⚡",
                  "Kitchen Utensils 🔪",
                  "Laundry 🧺",
                  "Sports 🏒🏅",
                  "Cars 🚗",
                  "Art 🎨",
                  "Music 🎧",
                  "Gym 💪🏋️‍♀️",
                  "Junks 🍧",
                  "Groceries 🍀",
                  "Airplanes ✈🛫",
                ].map((cat, id) => (
                  <button
                    key={id}
                    className="px-3 py-1 my-2 sm:text-xs text-[.5rem] font-semibold text-black duration-200 border border-orange-500 rounded-lg bg-orange-50 dark:bg-transparent dark:text-white"
                  >
                    {cat ? cat : "Tag"}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={`grid items-center grid-cols-1 gap-4 mb-3 md:grid-cols-2 lg:grid-cols-3 justify-evenly def-p duration-100`}
            >
              {items && items.map((item) => <ProductTemplate key={item._id} item={item} />)}
            </div>
          </div>
          <div className="py-4"></div>
        </main>
      </ShopContext.Provider>
    </>
  );
};

export default ProductDisplay;
