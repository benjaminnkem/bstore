import DefaultWrapper from "../DefaultWrapper";
import ProductDisplay from "./components/ProductDisplay";
import HorizontalCategory from "./components/HorizontalCategory";
import { headers } from "next/headers";

export const metadata = {
  title: "Market - Bstore",
  description: "Looking for a product? search, compare, rate any product here...",
};

const getInitialProducts = async () => {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/initialproducts`, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error(response);
  return response.json();
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
