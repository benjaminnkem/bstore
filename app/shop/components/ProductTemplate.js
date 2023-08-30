import Image from "next/image";
import { useContext, useState } from "react";
import { GlobalCartItemContext } from "@/app/context/GlobalCartItems";
import { ShopContext } from "./ProductDisplay";
import Link from "next/link";
import { motion } from "framer-motion";

const childrenVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
        <motion.div
          variants={childrenVariant}
          className="space-y-4 duration-100 min-w-[12rem] min-h-[12rem] sm:min-w-[14rem] sm:min-h-[14rem] xl:min-w-[16rem] xl:min-h-[16rem] overflow-hidden relative rounded-lg group hover:shadow-lg dark:bg-[#212121]"
        >
          <Image
            src={item.images[0]}
            alt={item.itemName}
            width={420}
            height={420}
            className="absolute top-0 left-0 object-cover w-full h-full duration-300 ease-in-out group-hover:scale-105"
          />

          <div className="absolute bottom-0 w-full py-2 text-center text-white">
            <p className="font-semibold text-shadow">{item.itemName}</p>
            <p className="text-sm font-light text-shadow">${item.price}</p>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default ProductTemplate;
