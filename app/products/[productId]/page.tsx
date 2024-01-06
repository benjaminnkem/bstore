import "./styles/product-details.css";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import HorizontalCategory from "@/components/UI/Shop/HorizontalCategory";
import ProductFullImagePreview from "@/components/UI/ProductDetails/img-preview-details";
import SideProductDetails from "@/components/UI/ProductDetails/side-details";
import { publicApi } from "@/lib/config/axiosInstance";

export const dynamicParams = true;

interface Params {
  productId: string;
}

interface ParamsObj {
  params: Params;
}

export async function generateMetadata({ params }: ParamsObj) {
  const { productId } = params;

  try {
    const response = await publicApi.get(`/api/products/get-product-details/${productId}`);

    const [productData] = response.data; // Returns a list tht needs destructuring
    const {
      seller: [seller],
    } = productData;

    return {
      title: `${productData.itemName} ${seller ? `by ${seller?.username}` : ""}`,
      description: productData.description,
    };
  } catch (e) {
    console.log(e);
    return {
      title: "Product Not Found",
    };
  }
}

const getPost = async (param: Params) => {
  try {
    const response = await publicApi.get(`/api/products/get-product-details/${param?.productId}`);

    return response.data;
  } catch (e) {
    console.log("Error from get post: ", e.message);
  }
};

const ProductDetails = async ({ params }: ParamsObj) => {
  const [post] = await getPost(params); // Requires destructuring

  return (
    <>
      <div className="h-[7rem]"></div>
      <main>
        <DefaultWrapper>
          <header>
            <HorizontalCategory />
          </header>
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
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
