"use client";
import { createContext, useContext, useEffect } from "react";
import ProductTemplate from "./ProductTemplate";
import Image from "next/image";
import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";

export const ShopContext = createContext();

const ProductDisplay = ({ items }) => {
  const {
    cartItems,
    updateCartItems,
    removeCartItem,
    calculateTotalCosts,
    totalItemsCost,
    sideCartItemDisplay,
    toggleSideCartView,
  } = useContext(GlobalCartItemContext);

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
        {/* Translucent Black Layer after sidebar opens */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black duration-100 ${
            sideCartItemDisplay ? "z-10 bg-opacity-80" : "-z-10 bg-opacity-0"
          }`}
          onClick={toggleSideCartView}
        ></div>

        <main>
          <div
            className="grid gap-4 md:max-w-[1488px] w-11/12 mx-auto my-8"
            style={{ gridTemplateColumns: "1.5fr 5fr" }}
          >
            <div className="self-start p-2 overflow-hidden bg-white rounded-lg shadow-lg">
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
                    className="px-3 py-1 my-2 text-xs font-semibold text-black border border-orange-500 rounded-lg bg-orange-50"
                  >
                    {cat ? cat : "Tag"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-4">
                <div
                  className={`grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p duration-100`}
                >
                  {/* Product Template */}
                  {items && items.map((item) => <ProductTemplate key={item._id} item={item} />)}
                </div>

                {/* Shopping Cart Icon */}
                {/* <div
                className={`font-semibold duration-100 dark:hover:text-orange-100 hover:text-orange-700 sticky top-6`}
              >
                <i
                  className="text-2xl duration-100 ri-shopping-cart-2-line"
                  id="nav-cart"
                  title="Show Selected Items"
                  data-shopping-items={`${cartItems.length}`}
                  onClick={toggleSideCartView}
                ></i>
              </div> */}

                {/* Sidebar that opens */}
                <div
                  className={`fixed right-0 space-y-2 top-0 h-full overflow-x-hidden duration-100 z-20 bg-orange-50 dark:bg-[#212121] ${
                    sideCartItemDisplay ? "md:w-[360px] sm:w-[320px] w-full" : "w-[.05px]"
                  }`}
                >
                  {cartItems && cartItems.length > 0 ? (
                    <div className="relative w-full h-full">
                      <div className="mb-5">
                        <div className="py-3 border-b border-orange-200">
                          <p className="text-2xl font-semibold text-center">Selected Items</p>
                        </div>

                        <div className="px-2 py-5">
                          <div className="space-y-2">
                            {cartItems &&
                              cartItems.map((item, idx) => (
                                <div
                                  className="p-2 duration-100 border border-orange-300 rounded-md shadow-md border-opacity-20 hover:shadow-lg"
                                  key={idx}
                                >
                                  <div className="flex items-center justify-between space-x-3">
                                    <div className="flex items-center space-x-3">
                                      <div>
                                        <Image
                                          src={item.images[0]}
                                          alt={`${item.itemName} Image Cover`}
                                          width={40}
                                          height={40}
                                          className="rounded-full aspect-square"
                                          draggable={false}
                                        />
                                      </div>
                                      <div>
                                        <p className="font-semibold">{item.itemName}</p>
                                        <p>
                                          Quantity: <span>{item.quantity}</span>
                                        </p>

                                        <div className="flex mt-1 space-x-3">
                                          <p
                                            className="font-semibold text-red-500 cursor-pointer select-none dark:text-red-300"
                                            onClick={() => removeCartItem(item)}
                                          >
                                            Remove
                                          </p>
                                          <p className="font-semibold text-orange-500 cursor-pointer dark:text-orange-300">
                                            Details
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div>
                                      <p>
                                        <span>{item.quantity}</span> x <span>${item.price}</span>
                                      </p>
                                      <p>
                                        ={" "}
                                        <span className="text-sm font-semibold">
                                          ${(item.quantity * item.price).toFixed(2)}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          <div>
                            {totalItemsCost > 0 && (
                              <div className="flex items-center justify-between p-2 text-2xl">
                                <p className="font-semibold">Total</p>

                                <p className="font-semibold">${totalItemsCost.toFixed(2)}</p>
                              </div>
                            )}

                            <button className="w-full py-3 mt-3 text-white duration-100 bg-orange-600 rounded-md shadow-sm hover:bg-orange-700">
                              Checkout <i className="ri-truck-line"></i>
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <span
                              className="py-1 border-b-2 border-orange-200 cursor-pointer"
                              onClick={toggleSideCartView}
                            >
                              Close Panel
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative grid w-full h-full space-y-5 place-content-center">
                      <p className="text-xl font-semibold md:text-2xl">No Items Selected</p>
                      <button
                        className="py-2 text-orange-500 duration-100 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-orange-50"
                        onClick={toggleSideCartView}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="py-4"></div>
            </div>
          </div>
        </main>
      </ShopContext.Provider>
    </>
  );
};

export default ProductDisplay;
