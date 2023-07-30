"use client";
import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";

export const metadata = {
  title: "Shop - BStore",
};

const Shop = async () => {
  let items;
  async function getItems() {
    const response = await fetch(`/api/test-shop`);
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    return response.json();
  }

  items = await getItems();

  return (
    <>
      <DefaultWrapper>
        <div className="my-10">
          <ProductDisplay items={items} />
        </div>
      </DefaultWrapper>
    </>
  );
};

export default Shop;
