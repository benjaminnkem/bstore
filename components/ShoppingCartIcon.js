import { useId } from "react";

const ShoppingCartIcon = () => {
  const cartId = useId();
  return (
    <>
      <div>
        <i className="ri-shopping-cart-line cursor-pointer" id={cartId} title="View Shopping Cart"></i>
      </div>
    </>
  );
};

export default ShoppingCartIcon;
