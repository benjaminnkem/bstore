import "./styles/product-details.css";
import { checkHost, checkProtocol } from "@/lib/reuseables/SERVERCOMPONENTS/getProtocol";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import HorizontalCategory from "@/components/UI/Shop/HorizontalCategory";
import ProductFullImagePreview from "@/components/UI/ProductDetails/img-preview-details";
import SideProductDetails from "@/components/UI/ProductDetails/side-details";
import { publicApi } from "@/lib/config/axios-instance";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { productId } = params;

  const response = await publicApi.get(`/products/get-product-metadata/${productId}`);
  try {
    const [product] = await response.data; // Returns a list that needs destructuring

    // const {
    //   seller: [seller],
    // } = product;

    return {
      title: `${product.itemName} ($${product.price})`,
      description: product.description,
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
      <header className="mt-[5.5rem]">
        <HorizontalCategory />
      </header>

      <main>
        <DefaultWrapper>
          <div className="container ">
            <section className="my-10 lg:gap-20 md:gap-12 md:grid" style={{ gridTemplateColumns: "2.5fr 3fr" }}>
              <ProductFullImagePreview post={post} />

              <SideProductDetails post={post} />
            </section>
          </div>
        </DefaultWrapper>
      </main>
    </>
  );
};

export default ProductDetails;
