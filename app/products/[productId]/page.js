import { checkHost, checkProtocol } from "@/lib/reuseables/SERVERCOMPONENTS/getProtocol";
import "./styles/product-details.css";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import HorizontalCategory from "@/components/UI/Shop/HorizontalCategory";
import ProductFullImagePreview from "@/components/UI/ProductDetails/img-preview-details";
import NextAuthProvider from "@/lib/utils/NextAuthProvider";
import SideProductDetails from "@/components/UI/ProductDetails/side-details";

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

  try {
    const response = await fetch(`${protocol}${host}/api/products/get-product-details/${param?.productId}`, {
      next: { revalidate: 120 },
    });

    return await response.json();
  } catch (e) {
    console.log("Error from get post: ", e.message);
  }
};

const ProductDetails = async ({ params }) => {
  const [post] = await getPost(params); // Requires destructuring

  return (
    <>
      <main>
        <DefaultWrapper>
          <header>
            <HorizontalCategory />
          </header>
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
            <section className="my-10 lg:gap-20 md:gap-12 md:grid" style={{ gridTemplateColumns: "2.5fr 3fr" }}>
              <ProductFullImagePreview post={post} />

              <NextAuthProvider>
                <SideProductDetails post={post} />
              </NextAuthProvider>
            </section>
          </div>
        </DefaultWrapper>
      </main>
    </>
  );
};

export default ProductDetails;
