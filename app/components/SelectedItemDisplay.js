"use client";
import Image from "next/image";
import { useContext } from "react";
import { GlobalCartItemContext } from "../context/GlobalCartItems";
import Link from "next/link";

const SelectedItemDisplay = () => {
  const { cartItems, removeCartItem, totalItemsCost, sideCartItemDisplay, toggleSideCartView } =
    useContext(GlobalCartItemContext);
  return (
    <>
      {/* <div
        className={`fixed top-0 left-0 w-full h-full bg-black duration-100 ${
          sideCartItemDisplay ? "z-10 bg-opacity-80" : "-z-10 bg-opacity-0"
        }`}
        onClick={toggleSideCartView}
      ></div> */}

      <div
        className={`fixed right-0 space-y-2 top-0 h-full overflow-x-hidden duration-100 z-20 dark:bg-primaryDarkShade-200 bg-gray-100 ${
          sideCartItemDisplay ? "md:w-[420px] sm:w-[380px] w-full" : "w-0"
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
                        className="p-2 duration-100 border bg-white dark:bg-primaryDarkShade-300 border-orange-300 rounded-md shadow-md border-opacity-20 hover:shadow-lg"
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
                                <Link href={`/products/${item._id}`} passHref onClick={toggleSideCartView}>
                                  <p className="font-semibold text-orange-500 cursor-pointer dark:text-orange-300">
                                    Details
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p>
                              <span>{item.quantity}</span> x <span>${item.price}</span>
                            </p>
                            <p>
                              ={" "}
                              <span className="text-sm font-semibold">${(item.quantity * item.price).toFixed(2)}</span>
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
                  <span className="py-1 border-b-2 border-orange-200 cursor-pointer" onClick={toggleSideCartView}>
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
    </>
  );
};

export default SelectedItemDisplay;
