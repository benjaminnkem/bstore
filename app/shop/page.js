import { headers } from "next/headers";
import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";
import GlobalCartItemsProvider from "../context/GlobalCartItems";

async function getShopItems() {
  try {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV === "development" ? "http://" : "https://";
    const response = await fetch(`${protocol}${host}/api/initialproducts`, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return response.json();
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
          <GlobalCartItemsProvider>
            <ProductDisplay items={items} />
          </GlobalCartItemsProvider>
        </div>
      </DefaultWrapper>
    </>
  );
};

export default Shop;
