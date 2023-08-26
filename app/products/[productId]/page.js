import DefaultWrapper from "@/app/DefaultWrapper";
import HorizontalCategory from "@/app/shop/components/HorizontalCategory";
import ProductFullImagePreview from "./components/FullImagePreview";
import "./styles/product-details.css";
import { checkHost, checkProtocol } from "@/app/reuseable/decideProtocol";
import ProdDetails from "./components/Details";
import NextAuthProvider from "@/app/components/NextAuthProvider";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const productId = params.productId;

  const host = checkHost();
  const protocol = checkProtocol();

  const response = await fetch(`${protocol}${host}/api/products/get-product-metadata/${productId}`, {
    cache: "force-cache",
  });
  try {
    const [productData] = await response.json(); // Returns a list tht needs destructuring
    const {
      seller: [seller],
    } = productData;

    return {
      title: `${productData.itemName} by ${seller.username} - Bstore`,
      description: productData.description,
    };
  } catch (e) {
    return null;
  }
}

const getPost = async (param) => {
  const host = checkHost();
  const protocol = checkProtocol();

  const response = await fetch(`${protocol}${host}/api/products/get-product-details/${param.productId}`, {
    next: { revalidate: 120 },
  });

  return response.json();
};

const ProductDetails = async ({ params }) => {
  const [post] = await getPost(params); // Requires destructuring

  return (
    <>
      <DefaultWrapper>
        <main>
          <header>
            <HorizontalCategory />
          </header>
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
            <section className="my-10 lg:gap-20 md:gap-12 md:grid" style={{ gridTemplateColumns: "2.5fr 3fr" }}>
              <ProductFullImagePreview post={post} />

              <NextAuthProvider>
                <ProdDetails post={post} />
              </NextAuthProvider>
            </section>
          </div>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ProductDetails;
