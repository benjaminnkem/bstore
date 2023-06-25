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
        <ProductDisplay items={items} />
        <div className="py-4"></div>
      </div>
    </>
  );
};

export default Shop;
