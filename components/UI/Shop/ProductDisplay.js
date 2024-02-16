"use client";
import { createContext, useContext, useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import { GlobalCartItemContext } from "@/lib/contexts/default/cartitems-context";
import { tags } from "@/lib/data/tags";
import { publicApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { opacityVariant } from "@/lib/utils/variants";

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
  const [tagProducts, setTagProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const addItemToCart = (item) => updateCartItems(item);

  const getProductsByTag = async (tag) => {
    try {
      setLoading(true);
      const res = await publicApi.get(`/products/get-by-tag/${tag}`);

      const { data } = res;

      if (!data || data.length === 0) {
        toast.error("No products found", { id: "no-product" });
      } else {
        toast.dismiss("no-product");
      }

      setTagProducts(data ?? []);
    } catch {
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => calculateTotalCosts(), [calculateTotalCosts]);

  const contextValue = {
    items,
    addItemToCart,
    calculateTotalCosts,
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        <main>
          <div className="sm:grid gap-4 container my-8 grid-cols-12">
            <div className="sm:sticky self-start p-3 overflow-hidden col-span-3 mb-4 sm:mb-0 bg-white dark:bg-[#212121] duration-200 rounded-lg shadow-lg top-4">
              <h2 className="text-xl font-semibold">Categories</h2>

              <div className="flex flex-wrap mt-2 space-x-2">
                {tags.map((tag, id) => (
                  <button
                    key={id}
                    className="px-3 py-1 my-2 sm:text-xs text-[.5rem] font-semibold text-black 
                    duration-200 border border-orange-500 rounded-lg bg-orange-50 dark:bg-transparent dark:text-white
                    hover:bg-orange-500 hover:text-black"
                    onClick={() => getProductsByTag(tag.cursor)}
                  >
                    {tag.showcase}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              className={`grid items-center col-span-9 gap-4 mb-3 relative md:grid-cols-2 lg:grid-cols-3 self-start duration-100 overflow-hidden rounded-lg`}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* loading cover */}
              <AnimatePresence mode="wait" initial={false}>
                {loading && (
                  <motion.div
                    {...opacityVariant}
                    className="absolute top-0 left-0 w-full h-full backdrop-blur-xl flex justify-center z-50"
                  >
                    <div className="py-10 ">
                      <SyncLoader color="#ea580c" size={20} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {tagProducts.length < 1 ? (
                <>{items && items.map((item) => <ProductTemplate key={item._id} item={item} />)}</>
              ) : (
                <>
                  {tagProducts.map((item) => (
                    <ProductTemplate key={item._id} item={item} />
                  ))}
                </>
              )}
            </motion.div>
          </div>
          <div className="py-4"></div>
        </main>
      </ShopContext.Provider>
    </>
  );
};

export default ProductDisplay;
