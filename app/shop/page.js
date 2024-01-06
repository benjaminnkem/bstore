import HorizontalCategory from "@/components/UI/Shop/HorizontalCategory";
import ProductDisplay from "@/components/UI/Shop/ProductDisplay";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import { headers } from "next/headers";

export const metadata = {
  title: "Market",
  description: "Looking for a product? search, compare, rate any product here...",
};

const getInitialProducts = async () => {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/initialproducts`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) return [];
  return response.json();
};

const Shop = async () => {
  const items = await getInitialProducts();

  return (
    <>
      <div className="h-[7rem]"></div>
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
