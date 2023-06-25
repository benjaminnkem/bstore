import Image from "next/image";
import AddToCartButtonAction from "./AddToCartButtonAction";
import { useState } from "react";

const ProductTemplate = ({ item, addItemToCart }) => {
  const [defaultItemQuantity, setDefaultItemQuantity] = useState(0);

  function incrementQuantity() {
    if (defaultItemQuantity >= 0) setDefaultItemQuantity(defaultItemQuantity + 1);
  }

  function decrementQuantity() {
    if (defaultItemQuantity > 0) setDefaultItemQuantity(defaultItemQuantity - 1);
  }

  function changeItemQuantityManually(el) {
    const currentValue = parseInt(el.target.value);
    setDefaultItemQuantity(currentValue);
  }

  return (
    <>
      <div
        className="p-4 space-y-4 duration-100 bg-gray-300 rounded-md shadow-md hover:shadow-lg bg-opacity-70 dark:bg-gray-800"
        key={item.id}
      >
        <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
          <div className="overflow-hidden bg-gray-300">
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
          defaultItemQuantity={defaultItemQuantity}
          setDefaultItemQuantity={setDefaultItemQuantity}
          changeItemQuantityManually={changeItemQuantityManually}
        />
      </div>
    </>
  );
};

export default ProductTemplate;
