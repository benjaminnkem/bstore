"use client";
import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";

const Shop = async () => {
  async function getItems() {
    try {
      const response = await fetch(`/api/test-shop`);
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  const items = await getItems();

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
