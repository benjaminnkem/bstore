import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";
import HorizontalCategory from "./components/HorizontalCategory";
import { headers } from "next/headers";
import axios from "axios";

export const metadata = {
  title: "Market - Bstore",
  description: "Looking for a product? search, compare, rate any product here...",
};

const getInitialProducts = async () => {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  // const response = await fetch(`${protocol}://${host}/api/initialproducts`, { next: { revalidate: 60 } });
  const response = await axios.get(`${protocol}://${host}/api/initialproducts`);

  if (response.statusText.toLocaleLowerCase() !== "ok") throw new Error(response.statusText);
  return response.data;
};

const Shop = async () => {
  const items = await getInitialProducts();

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
