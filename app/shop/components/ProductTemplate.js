import Image from "next/image";
import { useContext, useState } from "react";
import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";
import { ShopContext } from "./ProductDisplay";
import Link from "next/link";

const ProductTemplate = ({ item }) => {
  const [itemQuantity] = useState(1);
  const [addText, setAddText] = useState("Add to cart");

  const { updateCartItems } = useContext(GlobalCartItemContext);
  const { calculateTotalCosts } = useContext(ShopContext);

  const indicateAddedSuccess = () => {
    setAddText("Added successfully ✅");
    setTimeout(() => setAddText("Add to cart"), 3000);
  };

  return (
    <>
      <Link href={`/products/${item._id}`} passHref>
        <div className="space-y-4 duration-100 min-w-[12rem] min-h-[12rem] sm:min-w-[14rem] sm:min-h-[14rem] xl:min-w-[16rem] xl:min-h-[16rem] overflow-hidden relative rounded-lg group hover:shadow-lg dark:bg-[#212121]">
          <Image
            src={item.images[0]}
            alt={item.itemName}
            width={420}
            height={420}
            className="absolute top-0 left-0 object-cover w-full h-full duration-300 ease-in-out group-hover:scale-105"
          />

          {/* <div className="absolute top-0 text-center right-3">
            <button
              className="px-3 py-2 text-sm duration-500 bg-[#31313175] hover:border-orange11-300 border border-gray-300 border-opacity-40 rounded-md opacity-0 text-gray-50 group-hover:opacity-100"
              onClick={() => {
                updateCartItems({
                  _id: item._id,
                  itemName: item.itemName,
                  price: item.price,
                  quantity: itemQuantity,
                  images: item.images,
                  description: item.description,
                  date_posted: item.date_posted,
                });
                indicateAddedSuccess();
                calculateTotalCosts();
              }}
            >
              {addText}
            </button>
          </div> */}

          <div className="absolute bottom-0 w-full py-2 text-center text-white">
            <p className="font-semibold text-shadow">{item.itemName}</p>
            <p className="text-sm font-light text-shadow">${item.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductTemplate;
