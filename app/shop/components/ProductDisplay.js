"use client";
import Image from "next/image";
import { useState } from "react";

const ProductDisplay = ({ items }) => {
  const [itemTrack, setItemTrack] = useState([]);

  function addItem(item) {
    setItemTrack([...itemTrack, item]);
    localStorage.setItem("cartItems", items);
  }

  return (
    <>
      {items &&
        items.map((item) => (
          <div className="p-4 space-y-4 bg-gray-300 rounded-md shadow-md bg-opacity-70 dark:bg-gray-800" key={item.id}>
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
                <p className="text-lg font-semibold text-slate-900">{item.name}</p>
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductDisplay;
