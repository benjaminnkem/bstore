import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";

export const metadata = {
  title: "Shop - BStore",
};

export async function getItems() {
  const response = await fetch(`${process.env.BASE_URL}/api/test-shop`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  return response.json();
}

const Shop = async () => {
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
