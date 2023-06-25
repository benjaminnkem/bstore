import "./Shop.css";
import "remixicon/fonts/remixicon.css";
import ProductDisplay from "./components/ProductDisplay";

export const metadata = {
  title: "Shop - BStore",
};

export async function getItems() {
  const response = await fetch("http://localhost:8000/items");

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
}

const Shop = async () => {
  const items = await getItems();
  return (
    <>
      <div id="shop">
        <p className="py-4 text-sm font-light text-center text-green-800 dark:text-green-200">
          *Hover/Click products to view info.*
        </p>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
            <ProductDisplay items={items}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
