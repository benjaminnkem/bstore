import { checkHost, checkProtocol } from "@/lib/reuseables/SERVERCOMPONENTS/getProtocol";
import "./styles/product-details.css";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import HorizontalCategory from "@/components/UI/Shop/HorizontalCategory";
import ProductFullImagePreview from "@/components/UI/ProductDetails/FullImagePreview";
import NextAuthProvider from "@/lib/utils/NextAuthProvider";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const productId = params.productId;

  const host = checkHost();
  const protocol = checkProtocol();

  const response = await fetch(`${protocol}${host}/api/products/get-product-metadata/${productId}`);
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

  if (!param) [];

  console.log("param", param);
  const response = await fetch(`${protocol}${host}/api/products/get-product-details/${param?.productId}`, {
    next: { revalidate: 120 },
  });

  const body = await response.json();

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
                <ProductDetails post={post} />
              </NextAuthProvider>
            </section>
          </div>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ProductDetails;
