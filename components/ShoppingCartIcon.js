import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";
import { useContext, useEffect, useState } from "react";

const ShoppingCartIcon = () => {
  const { cartItems, toggleSideCartView } = useContext(GlobalCartItemContext);

  return (
    <>
      <div>
        <i
          className="relative text-2xl font-semibold duration-100 cursor-pointer ri-shopping-cart-2-line cart-ico"
          title="Show Selected Items"
          data-shopping-items={`${cartItems ? cartItems.length : 0}`}
          onClick={toggleSideCartView}
        ></i>
      </div>
    </>
  );
};

export default ShoppingCartIcon;
