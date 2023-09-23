"use client";

import { GlobalCartItemContext } from "@/lib/contexts/default/cartitems-context";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

const AddProductDetCart = ({ post, customQuantity }) => {
  const { updateCartItems } = useContext(GlobalCartItemContext);
  const [addText, setAddText] = useState("Add to cart");

  return (
    <button
      className="w-full px-2 py-2 text-sm duration-200 bg-transparent border border-orange-500 rounded-md md:bg-orange-500 hover:bg-orange-500 md:hover:bg-orange-600 md:border-none"
      onClick={() =>
        updateCartItems({
          _id: post._id,
          itemName: post.itemName,
          price: post.price,
          quantity: customQuantity,
          images: post.images,
          description: post.description,
          date_posted: post.date_posted,
        })
      }
    >
      {addText}
    </button>
  );
};

export default AddProductDetCart;
