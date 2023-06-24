"use client";
import Image from "next/image";
import "./Shop.css";
import "remixicon/fonts/remixicon.css";
import AddToCartButtonAction from "./components/AddToCartButtonAction";
import { useState } from "react";

export const metadata = {
  title: "Shop - BStore",
};

export async function getItems() {
  const response = await fetch("http://localhost:8000/items");

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
}

const Shop = async () => {
  const [itemTrack, setItemTrack] = useState([]);
  
  function addItem(item) {
    setItemTrack(...itemTrack, item);
  }

  // Others aside hooks
  const items = await getItems();

  return (
    <>
      <div id="shop">
        <p className="py-4 text-sm font-light text-center text-green-800 dark:text-green-200">
          *Hover/Click products to view info.*
        </p>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
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
                        <AddToCartButtonAction itemId={item.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
