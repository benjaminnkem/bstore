"use client";

import { useContext, useState } from "react";
import AddProductDetCart from "./AddToCartBtn";
import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";

// custom class
const itemDescClass = "flex justify-between items-center py-2 border-[#666666] border-t border-opacity-50";

const ProdDetails = ({ post }) => {
  const [customQuantity, setCustomQuantity] = useState(1);
  const { cartItems } = useContext(GlobalCartItemContext);

  const changeQuantity = (type) => {
    switch (type) {
      case "sub":
        if (customQuantity <= 0) return;
        setCustomQuantity((prev) => prev - 1);
      case "add":
        if (customQuantity > 100) return;
        setCustomQuantity((prev) => prev + 1);
      default:
        break;
    }
  };

  const getItemFromCart = () => {
    if (cartItems.find((itemCheck) => itemCheck._id === post._id)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="space-y-4">
        <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Details:</h2>
          <div className="mt-2">
            <div className={`${itemDescClass}`}>
              <p className="font-semibold">Item Name:</p>
              <p>
                <span className="font-light">{post.itemName}</span>
              </p>
            </div>
            <div className={`${itemDescClass}`}>
              <p className="font-semibold">Is Currently Available: </p>
              <p>
                <span className="font-light">{post.is_available ? "Yes ✅" : "Out of stock 😐❌"}</span>
              </p>
            </div>
            <div className={`${itemDescClass}`}>
              <p className="font-semibold">Category: </p>
              <p>
                <span className="font-light">{post.category}</span>
              </p>
            </div>

            <div className={`${itemDescClass}`}>
              <p className="font-semibold">Quantity:</p>
              <div className="flex items-center space-x-3">
                <i
                  className="cursor-pointer ri-restart-line"
                  onClick={() => setCustomQuantity(1)}
                  title="Reset Quantity"
                ></i>

                <div
                  className="flex items-center justify-center w-8 h-8 text-gray-800 duration-200 bg-orange-200 rounded-md shadow-md cursor-pointer select-none hover:bg-orange-300"
                  onClick={() => changeQuantity("sub")}
                >
                  -
                </div>
                <p>{customQuantity}</p>
                <div
                  className="flex items-center justify-center w-8 h-8 text-gray-800 duration-200 bg-orange-300 rounded-md shadow-md cursor-pointer select-none hover:bg-orange-400"
                  onClick={() => changeQuantity("add")}
                >
                  +
                </div>
              </div>
            </div>
            <div className={`${itemDescClass}`}>
              <p className="font-semibold">Price:</p>
              <p>
                <span className="text-xl">
                  {customQuantity} x {post.price} = ${customQuantity * parseInt(post.price)}
                </span>
              </p>
            </div>

            <div className="mt-2 md:text-right">
              <AddProductDetCart post={post} customQuantity={customQuantity} />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Ratings</h2>
          <div className="mt-2">
            {post.rating && post.rating?.length > 0 ? (
              <div>some rating</div>
            ) : (
              <p className="font-light">No ratings.</p>
            )}
          </div>
        </div>

        <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg max-w-2xl">
          <h2 className="text-2xl font-semibold">Description</h2>
          <div className="mt-2">
            <p className="font-light whitespace-pre-line">{post.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdDetails;
