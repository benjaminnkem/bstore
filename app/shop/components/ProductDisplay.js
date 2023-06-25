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
          <div
            className="relative m-auto overflow-hidden duration-100 bg-green-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 md:m-4 group"
            key={item.id}
          >
            <Image
              src={item.image_url}
              alt="Def Image"
              width={256}
              height={256}
              className="object-cover w-full"
              draggable="false"
            />

            <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
              <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                <p className="text-2xl font-semibold">{item.name}</p>
                <p className="text-sm">{item.description}</p>

                <div className="flex items-center justify-center space-x-2">
                  <button
                    className="p-1 duration-100 border hover:bg-white hover:text-slate-900"
                    onClick={() => addItem(item)}
                  >
                    Add to cart <i className="ri-shopping-bag-line"></i>
                  </button>
                  <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                    Details <i className="ri-information-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductDisplay;
