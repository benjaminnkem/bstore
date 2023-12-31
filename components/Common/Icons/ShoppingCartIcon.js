import { GlobalCartItemContext } from "@/lib/contexts/default/cartitems-context";
import { useContext, useEffect, useState } from "react";

const ShoppingCartIcon = ({ size }) => {
  const { cartItems, toggleSideCartView } = useContext(GlobalCartItemContext);

  return (
    <>
      <div>
        {/* <span className="text-xl text-base"></span> */}
        <i
          className={`relative font-semibold duration-100 cursor-pointer ri-shopping-cart-2-line cart-ico ${size}`}
          title="Show Selected Items"
          data-shopping-items={`${cartItems ? cartItems.length : 0}`}
          onClick={toggleSideCartView}
        ></i>
      </div>
    </>
  );
};

export default ShoppingCartIcon;
