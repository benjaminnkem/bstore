"use client";
import Image from "next/image";
import { useState } from "react";
import AddToCartButtonAction from "./AddToCartButtonAction";

const ProductDisplay = ({ items }) => {
  const [addedItems, setAddedItems] = useState([]);
  const [quantityMeasure, setQuantityMeasure] = useState([]);
  const [sideCartItemDisplay, setSideCartItemDisplay] = useState(false);

  function addItemToCart(item) {
    setAddedItems([...addedItems, item]);

    function algorithmToFixLater() {
      const exists = addedItems.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        function incrementQuantity(itemToIncrement) {
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

        setQuantityMeasure([...quantityMeasure, incrementQuantity(item)]);
      }
    }
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
      <div className="md:max-w-[1024px] w-11/12 mx-auto">
        <p className="py-4 text-sm font-light text-center text-green-800 dark:text-green-200">
          *Hover/Click products to view info.*
        </p>
        <div className="flex items-start space-x-4">
          <div className={`grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p duration-100 ${
              sideCartItemDisplay ? "lg:mr-[200px]" : "mr-0"
            }`}>
            {items &&
              items.map((item) => (
                <div
                  className="p-4 space-y-4 duration-100 bg-gray-300 rounded-md shadow-md hover:shadow-lg bg-opacity-70 dark:bg-gray-800"
                  key={item.id}
                >
                  <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
                    <div className="w-16 h-16 overflow-hidden bg-gray-300 rounded-full">
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
                      <p className="text-lg font-semibold text-slate-700 dark:text-slate-100">${item.price}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="dark:text-slate-200">{item.description}</p>
                  </div>
                  <AddToCartButtonAction setAddedItems={setAddedItems} item={item} addItemToCart={addItemToCart} />
                </div>
              ))}
          </div>
          <div className={`font-semibold duration-100 dark:hover:text-green-200 hover:text-green-700 sticky top-6`}>
            <i
              className="text-2xl duration-100 ri-shopping-cart-2-line"
              id="nav-cart"
              data-shopping-items={`${addedItems.length}`}
              onClick={toggleSideCartView}
            ></i>
          </div>
          <div
            className={`fixed right-0 space-y-2 top-0 h-full overflow-x-hidden duration-100 z-10 bg-green-100 ${
              sideCartItemDisplay ? "md:w-[360px] sm:w-[320px] w-[300px]" : "w-[.05px]"
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 left-0 w-full text-center text-slate-950">
                <button className="w-full py-3 text-white duration-100 bg-green-600 rounded-md hover:bg-green-700">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4"></div>
      </div>
    </>
  );
};

export default ProductDisplay;
