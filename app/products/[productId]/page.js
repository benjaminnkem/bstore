import DefaultWrapper from "@/app/DefaultWrapper";
import HorizontalCategory from "@/app/shop/components/HorizontalCategory";
import ProductFullImagePreview from "./components/FullImagePreview";
import "./styles/product-details.css";
import Link from "next/link";
import { checkHost, checkProtocol } from "@/app/reuseable/decideProtocol";
import ProdDetails from "./components/Details";

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
            <section className="gap-16 my-10 md:grid" style={{ gridTemplateColumns: "2.5fr 3fr" }}>
              <ProductFullImagePreview post={post} />

              <div>
                <h1 className="my-4 text-2xl font-extrabold duration-200 md:text-4xl sm:text-3xl">
                  {post.itemName}{" "}
                  <span className="text-sm font-light">
                    posted by{" "}
                    <Link href={"https://github.com/benjaminnkem"} target="_blank" passHref>
                      <span className="text-orange-500 duration-200 border-b border-transparent hover:border-orange-300">
                        {post.seller[0].username}
                      </span>
                    </Link>
                  </span>
                </h1>

                <ProdDetails post={post}/>
              </div>
            </section>
          </div>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ProductDetails;
