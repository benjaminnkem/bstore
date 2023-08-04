import { headers } from "next/headers";
import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";

async function getShopItems() {
  try {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV === "development" ? "http://" : "https://";
    const response = await fetch(`${protocol}${host}/api/test-shop`, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

const Shop = async () => {
  const items = await getShopItems();

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
