import DefaultWrapper from "@/app/DefaultWrapper";
import HorizontalCategory from "@/app/shop/components/HorizontalCategory";
import ProductFullImagePreview from "./components/FullImagePreview";
import "./styles/product-details.css";
import Link from "next/link";
import AddProductDetCart from "./components/AddToCartBtn";
import { checkHost, checkProtocol } from "@/app/reuseable/decideProtocol";

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

// custom class
const itemDescClass = "flex justify-between items-center py-2 border-[#666666] border-t border-opacity-50";

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
                  {post.itemName} (${post.price}){" "}
                  <span className="text-sm font-light">
                    posted by{" "}
                    <Link href={"https://github.com/benjaminnkem"} target="_blank" passHref>
                      <span className="text-orange-500 duration-200 border-b border-transparent hover:border-orange-300">
                        {post.seller[0].username}
                      </span>
                    </Link>
                  </span>
                </h1>

                <div className="space-y-4">
                  <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold">Details:</h2>
                    <div className="mt-2">
                      <div className={`${itemDescClass}`}>
                        <p className="font-semibold">Item Name:</p>
                        <p>
                          <span className="font-light">{post.itemName}</span>
                        </p>
                      </div>
                      <div className={`${itemDescClass}`}>
                        <p className="font-semibold">Price:</p>
                        <p>
                          <span className="font-light">${post.price}</span>
                        </p>
                      </div>
                      <div className={`${itemDescClass}`}>
                        <p className="font-semibold">Is Currently Available: </p>
                        <p>
                          <span className="font-light">{post.is_available ? "Yes ✅" : "Out of stock 😐❌"}</span>
                        </p>
                      </div>
                      <div className={`${itemDescClass}`}>
                        <p className="font-semibold">Category: </p>
                        <p>
                          <span className="font-light">{post.category}</span>
                        </p>
                      </div>
                      <div className={`${itemDescClass}`}>
                        <p className="font-semibold">Date Posted:</p>
                        <p>
                          <span className="font-light"> {new Date(post.date_posted).toDateString()}</span>
                        </p>
                      </div>

                      <div className="mt-2 md:text-right">
                        <AddProductDetCart post={post} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold">Ratings</h2>
                    <div className="mt-2">
                      {post.rating && post.rating?.length > 0 ? (
                        <div>some rating</div>
                      ) : (
                        <p className="font-light">No ratings.</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 bg-white shadow-md dark:bg-[#212121] p-4 rounded-lg max-w-2xl">
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <div className="mt-2">
                      <p className="font-light whitespace-pre-line">{post.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ProductDetails;
