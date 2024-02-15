"use client";
import { createContext, useContext, useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import { GlobalCartItemContext } from "@/lib/contexts/default/cartitems-context";
import { motion } from "framer-motion";
import { tags } from "@/lib/data/tags";

export const ShopContext = createContext();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductDisplay = ({ items }) => {
  const { updateCartItems, calculateTotalCosts } = useContext(GlobalCartItemContext);
  const [tagSelect, setTagSelect] = useState("");
  const [tagProducts, setTagProducts] = useState([]);

  const addItemToCart = (item) => updateCartItems(item);

  const getProductsByTag = async () => {
    const res = await fetch(`/api/products/get-by-tag/${tagSelect}`);
    if (!res.ok) return;

    const products = await res.json();
    setTagProducts(products ? products : []);
  };

  useEffect(() => calculateTotalCosts(), [calculateTotalCosts]);

  useEffect(() => {
    getProductsByTag();
  });

  const chooseTag = (tag) => {
    setTagSelect(tag);
  };

  const contextValue = {
    items,
    addItemToCart,
    calculateTotalCosts,
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        <main>
          <div
            className="sm:grid gap-4 md:max-w-[1488px] w-11/12 mx-auto my-8"
            style={{ gridTemplateColumns: "1.5fr 5fr" }}
          >
            <div className="sm:sticky self-start p-2 overflow-hidden mb-4 sm:mb-0 bg-white dark:bg-[#212121] duration-200 rounded-lg shadow-lg top-4">
              <h2 className="text-xl font-semibold">Categories</h2>

              <div className="flex flex-wrap mt-2 space-x-2">
                {tags.map((tag, id) => (
                  <button
                    key={id}
                    className="px-3 py-1 my-2 sm:text-xs text-[.5rem] font-semibold text-black 
                    duration-200 border border-orange-500 rounded-lg bg-orange-50 dark:bg-transparent dark:text-white
                    hover:bg-orange-500 hover:text-black"
                    onClick={() => chooseTag(tag.cursor)}
                  >
                    {tag.showcase}
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              className={`grid items-center grid-cols-1 gap-4 mb-3 md:grid-cols-2 lg:grid-cols-3 justify-evenly def-p duration-100`}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {items && items.map((item) => <ProductTemplate key={item._id} item={item} />)}
            </motion.div>
          </div>
          <div className="py-4"></div>
        </main>
      </ShopContext.Provider>
    </>
  );
};

export default ProductDisplay;
