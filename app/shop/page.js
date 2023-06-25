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
      <ProductDisplay items={items} />
    </>
  );
};

export default Shop;
