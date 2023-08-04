import { headers } from "next/headers";
import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";
import HorizontalCategory from "./components/HorizontalCategory";
import "./styles/shop.css";

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
        <header>
          <HorizontalCategory />
        </header>
        <ProductDisplay items={items} />
      </DefaultWrapper>
    </>
  );
};

export default Shop;
