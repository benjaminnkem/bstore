"use client";
import { createContext, useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import Image from "next/image";

export const ShopContext = createContext();

const ProductDisplay = ({ items }) => {
  const [addedItems, setAddedItems] = useState([]);
  const [sideCartItemDisplay, setSideCartItemDisplay] = useState(false);
  const [totalItemsCost, setAddedItemsCost] = useState(0);

  // useEffect(() => {
  //   const itemsInLocalStorage = localStorage.getItem("cartItems");
  //   if (!itemsInLocalStorage) {
  //     setAddedItems([]);
  //     console.log(itemsInLocalStorage);
  //     return;
  //   }

  //   console.log(itemsInLocalStorage);
  //   setAddedItems(JSON.parse(itemsInLocalStorage));
  // }, [addedItems]);

  function toggleSideCartView() {
    if (!sideCartItemDisplay) {
      setSideCartItemDisplay(true);
    } else {
      setSideCartItemDisplay(false);
    }
  }

  function addItemToCart(item) {
    function sortAllSelectedItems() {
      addedItems.sort((a, b) => {
        if (a.id > b.id) return 1;
        return -1;
      });
    }

    const itemExists = addedItems.find((itemCheck) => itemCheck.id === item.id);
    if (itemExists) {
      toggleSideCartView();
      return;
    }

    // Adding the items to the list
    setAddedItems([...addedItems, item]);
    sortAllSelectedItems();
  }

  function removeItemFromCart(item) {
    const newItemList = addedItems.filter((itemIt) => itemIt.id !== item.id);
    setAddedItems(newItemList);
  }

  function calculateTotalCosts() {
    if (addedItems.length === 0) return;
    const totalCost = addedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setAddedItemsCost(totalCost);
  }

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

        {/* Mains */}
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="flex items-start space-x-4">
            <div
              className={`grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p duration-100`}
            >
              {/* Product Template */}
              {items && items.map((item) => <ProductTemplate key={item.id} item={item} />)}
            </div>

            {/* Shopping cart icon */}
            <div className={`font-semibold duration-100 dark:hover:text-orange-100 hover:text-orange-700 sticky top-6`}>
              <i
                className="text-2xl duration-100 ri-shopping-cart-2-line"
                id="nav-cart"
                title="Show Selected Items"
                data-shopping-items={`${addedItems.length}`}
                onClick={toggleSideCartView}
              ></i>
            </div>

            {/* Sidebar that opens */}
            <div
              className={`fixed right-0 space-y-2 top-0 h-full overflow-x-hidden duration-100 z-20 bg-orange-50 dark:bg-[#212121] ${
                sideCartItemDisplay ? "md:w-[360px] sm:w-[320px] w-full" : "w-[.05px]"
              }`}
            >
              {addedItems && addedItems.length > 0 ? (
                <div className="relative w-full h-full">
                  <div className="mb-5">
                    <div className="py-3 border-b border-orange-200">
                      <p className="text-2xl font-semibold text-center">Selected Items</p>
                    </div>

                    <div className="p-2">
                      <div className="space-y-2">
                        {addedItems.map((item) => (
                          <div
                            className="p-2 duration-100 border border-orange-300 border-opacity-20 rounded-md shadow-md hover:shadow-lg"
                            key={item.id}
                          >
                            <div className="flex items-center justify-between space-x-3">
                              <div className="flex items-center space-x-3">
                                <div>
                                  <Image
                                    src={item.image_url}
                                    alt={`${item.name} Image Cover`}
                                    width={40}
                                    height={40}
                                    className="rounded-full aspect-square"
                                    draggable={false}
                                  />
                                </div>
                                <div>
                                  <p className="font-semibold">{item.name}</p>
                                  <p>
                                    Quantity: <span>{item.quantity}</span>
                                  </p>

                                  <div className="flex mt-1 space-x-3">
                                    <p
                                      className="font-semibold text-red-500 cursor-pointer select-none dark:text-red-300"
                                      onClick={() => {
                                        removeItemFromCart(item);
                                      }}
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
                        <span className="py-2 border-b-2 border-orange-200 cursor-pointer" onClick={toggleSideCartView}>
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
      </ShopContext.Provider>
    </>
  );
};

export default ProductDisplay;
