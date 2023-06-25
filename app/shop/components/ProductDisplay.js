"use client";
import Image from "next/image";
import { useState } from "react";
import AddToCartButtonAction from "./AddToCartButtonAction";

const ProductDisplay = ({ items }) => {
  const [itemTrack, setItemTrack] = useState([]);

  function addItem(item) {
    setItemTrack([...itemTrack, item]);
    localStorage.setItem("cartItems", items);
  }

  return (
    <>
      <div className="md:max-w-[1024px] w-11/12 mx-auto">
        <div className="grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
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
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="dark:text-slate-200">{item.description}</p>
                </div>
                <AddToCartButtonAction />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
