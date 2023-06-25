"use client";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import ProductTemplate from "./ProductTemplate";

const ProductDisplay = ({ items }) => {
  const [addedItems, setAddedItems] = useState([]);
  const [quantityMeasure, setQuantityMeasure] = useState([]);
  const [sideCartItemDisplay, setSideCartItemDisplay] = useState(false);


  function addItemToCart(item) {
    // I tried my best e no work
    function algorithmToFixLater() {
      const exists = addedItems.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        function incrementQuantityProperty(itemToIncrement) {
          const itemCheck = quantityMeasure.find((existingItem) => existingItem.id === itemToIncrement.id);
          if (itemCheck) {
            quantityMeasure.splice(quantityMeasure.indexOf(itemCheck));
            return {
              id: itemToIncrement.id,
              name: itemToIncrement.name,
              description: itemToIncrement.description,
              image_url: itemToIncrement.image_url,
              quantity:
                itemToIncrement.defaultQuantity === 1 && !itemCheck.quantity
                  ? itemToIncrement.defaultQuantity + 1
                  : itemCheck.quantity + 1,
            };
          }
          return itemToIncrement;
        }
        setQuantityMeasure([...quantityMeasure, incrementQuantityProperty(item)]);
      }
    }

    // Sorting all items
    function sortAllSelectedItems() {
      addedItems.sort((a, b) => {
        if (a.id > b.id) return 1;
        return -1;
      });
    }

    // Adding the items to the list
    setAddedItems([...addedItems, item]);
    sortAllSelectedItems();
  }

  function toggleSideCartView() {
    if (!sideCartItemDisplay) {
      setSideCartItemDisplay(true);
    } else {
      setSideCartItemDisplay(false);
    }
  }

  return (
    <>
      {/* Translucent Black Layer after sidebar opens */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black duration-100 ${
          sideCartItemDisplay ? "z-10 bg-opacity-80" : "-z-10 bg-opacity-0"
        }`}
        onClick={toggleSideCartView}
      ></div>

      {/* Mains */}
      <div className="md:max-w-[1024px] w-11/12 mx-auto">
        <p className="py-4 text-sm font-light text-center text-green-800 dark:text-green-200">
          *Hover/Click products to view info.*
        </p>
        <div className="flex items-start space-x-4">
          <div
            className={`grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p duration-100`}
          >
          {/* Product Template Location */}
            {items &&
              items.map((item) => (
                <ProductTemplate key={item} item={item} addItemToCart={addItemToCart}/>
              ))}
          </div>

          {/* Shopping cart icon */}
          <div className={`font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 sticky top-6`}>
            <i
              className="text-2xl duration-100 ri-shopping-cart-2-line"
              id="nav-cart"
              data-shopping-items={`${addedItems.length}`}
              onClick={toggleSideCartView}
              title="Show Selected Items"
            ></i>
          </div>

          {/* Sidebar that opens */}
          <div
            className={`fixed right-0 space-y-2 top-0 h-full overflow-x-hidden duration-100 z-20 bg-green-100 ${
              sideCartItemDisplay ? "md:w-[360px] sm:w-[320px] w-full" : "w-[.05px]"
            }`}
          >
            {addedItems && addedItems.length > 0 ? (
              <div className="relative w-full h-full">
                <div className="mb-5">
                  <div className="py-3 border-b border-green-500">
                    <p className="text-2xl font-semibold text-center">Checkout</p>
                  </div>

                  <div className="p-2 space-y-2 select-none">
                    {addedItems.map((item) => (
                      <div
                        className="py-8 duration-100 border rounded-md shadow-md hover:shadow-lg"
                        key={item.id}
                      ></div>
                    ))}
                  </div>

                  <button className="w-full py-3 mt-4 text-white duration-100 bg-green-600 rounded-md hover:bg-green-700">
                    Checkout <i className="ri-truck-line"></i>
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative grid w-full h-full space-y-5 place-content-center">
                <p className="text-xl font-semibold md:text-2xl">No Items Selected</p>
                <button
                  className="py-2 text-green-500 duration-100 border border-green-500 rounded-md hover:bg-green-500 hover:text-green-50"
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
    </>
  );
};

export default ProductDisplay;
