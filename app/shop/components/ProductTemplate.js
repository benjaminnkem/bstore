import Image from "next/image";
import AddToCartButtonAction from "./AddToCartButtonAction";
import { useContext, useState } from "react";
import CartItemsProvider, { CartItemContext } from "@/components/GlobalCartItems";

const ProductTemplate = ({ item, addItemToCart, calculateTotalCosts }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  // const { cartItems } = useContext(CartItemContext)

  function incrementQuantity() {
    if (itemQuantity >= 0) setItemQuantity(parseInt(itemQuantity) + 1);
  }

  function decrementQuantity() {
    if (itemQuantity > 0) setItemQuantity(parseInt(itemQuantity) - 1);
  }

  function changeItemQuantityManually(el) {
    const currentValue = el.target.value;
    if (currentValue === "") {
      setItemQuantity(0);
    } else if (!isNaN(parseInt(currentValue))) {
      setItemQuantity(currentValue);
    }
    return;
  }

  return (
    <>
      <CartItemsProvider>
        <div className="p-6 space-y-4 duration-100 bg-gray-300 rounded-md shadow-md md:p-4 hover:shadow-lg bg-opacity-70 dark:bg-[#212121]">
          <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
            <div className="overflow-hidden bg-gray-300 rounded-full bg-opacity-10">
              <Image
                src={item.image_url}
                alt={item.name}
                width={64}
                height={64}
                className="object-cover rounded-full aspect-square"
              />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-100">${item.price}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="dark:text-slate-200">{item.description}</p>
          </div>
          <AddToCartButtonAction
            item={item}
            addItemToCart={addItemToCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            changeItemQuantityManually={changeItemQuantityManually}
            calculateTotalCosts={calculateTotalCosts}
          />
        </div>
      </CartItemsProvider>
    </>
  );
};

export default ProductTemplate;
