"use client";

import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";
import { useContext, useState } from "react";

const AddProductDetCart = ({ post, customQuantity }) => {
  const { updateCartItems } = useContext(GlobalCartItemContext);
  const [addText, setAddText] = useState("Add to cart");

  const indicateAddedSuccess = () => {
    setAddText("Added successfully ✅");
    setTimeout(() => setAddText("Add to cart"), 3000);
  };

  return (
    <button
      className="w-full px-2 py-2 text-sm duration-200 bg-transparent border border-orange-500 rounded-md md:bg-orange-500 hover:bg-orange-500 md:hover:bg-orange-600 md:border-none"
      onClick={() => {
        updateCartItems({
          _id: post._id,
          itemName: post.itemName,
          price: post.price,
          quantity: customQuantity,
          images: post.images,
          description: post.description,
          date_posted: post.date_posted,
        });
        indicateAddedSuccess();
      }}
    >
      {addText}
    </button>
  );
};

export default AddProductDetCart;
