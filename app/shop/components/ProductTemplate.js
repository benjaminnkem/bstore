import Image from "next/image";
import AddToCartButtonAction from "./AddToCartButtonAction";
import { useState } from "react";

const ProductTemplate = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(0);

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
    } else if (!isNaN(Number(currentValue))) {
      setItemQuantity(currentValue);
    }
    return;
  }

  return (
    <>
      <div className="space-y-4 duration-100 min-w-[12rem] min-h-[12rem] sm:min-w-[14rem] sm:min-h-[14rem] xl:min-w-[16rem] xl:min-h-[16rem] overflow-hidden relative rounded-lg group hover:shadow-lg dark:bg-[#212121]">
        <Image
          src={item.images[0]}
          alt={item.itemName}
          width={420}
          height={420}
          className="absolute object-cover w-full h-full duration-300 ease-in-out group-hover:scale-105"
        />

        <i className="absolute top-0 text-white cursor-pointer ri-shopping-basket-2-line right-3" title="Add To Cart"></i>

        <div className="absolute bottom-0 w-full py-2 text-center text-white">
          <p className="font-semibold text-shadow">{item.itemName}</p>
          <p className="text-sm font-light text-shadow">${item.price}</p>
        </div>

        {/* <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
          <div className="overflow-hidden bg-gray-200 rounded-full bg-opacity-10">
            <Image
              src={item.images[0]}
              alt={item.itemName}
              width={64}
              height={64}
              className="object-cover rounded-full aspect-square"
            />
          </div>
          <div className="space-y-1">
            <p className="text-lg text-slate-900 dark:text-slate-100">{item.itemName}</p>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-100">${item.price}</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="dark:text-slate-200">
            {item?.description.length <= 120 ? item.description : `${item.description.substring(0, 120)}...`}
          </p>
        </div>
        <AddToCartButtonAction
          item={item}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          changeItemQuantityManually={changeItemQuantityManually}
        /> */}
      </div>
    </>
  );
};

export default ProductTemplate;
