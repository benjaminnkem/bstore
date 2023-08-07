import DefaultWrapper from "@/app/DefaultWrapper";
import HorizontalCategory from "@/app/shop/components/HorizontalCategory";
import { headers } from "next/headers";
import ProductFullImagePreview from "./components/FullImagePreview";
import "./styles/product-details.css";
import Link from "next/link";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const productId = params.productId;
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http://" : "https://";

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
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http://" : "https://";

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
            <section className="md:grid gap-4 my-10" style={{ gridTemplateColumns: "2fr 3fr" }}>
              <ProductFullImagePreview post={post} />

              <div>
                <h1 className="font-extrabold md:text-4xl sm:text-3xl text-2xl duration-200 my-4">
                  {post.itemName} (${post.price}){" "}
                  <span className="text-sm font-light">
                    posted by{" "}
                    <Link href={"https://github.com/benjaminnkem"} target="_blank" passHref>
                      <span className="text-orange-500 border-b border-transparent hover:border-orange-300 duration-200">
                        {post.seller[0].username}
                      </span>
                    </Link>
                  </span>
                </h1>

                <div className="space-y-4">
                  <div className="mt-4 bg-[#282828] p-4 rounded-lg">
                    <h2 className="font-semibold text-2xl">Details:</h2>
                    <div className="mt-2">
                      <div className="flex justify-between items-center py-1 border-[#666666] border-t border-opacity-50">
                        <p className="font-semibold">Item Name:</p>
                        <p>
                          <span className="font-light">{post.itemName}</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-1 border-[#666666] border-t border-opacity-50">
                        <p className="font-semibold">Price:</p>
                        <p>
                          <span className="font-light">${post.price}</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-1 border-[#666666] border-t border-opacity-50">
                        <p className="font-semibold">Is Currently Available: </p>
                        <p>
                          <span className="font-light">{post.is_available ? "Yes ✅" : "Out of stock 😐❌"}</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-1 border-[#666666] border-t border-opacity-50">
                        <p className="font-semibold">Category: </p>
                        <p>
                          <span className="font-light">{post.category}</span>
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-1 border-[#666666] border-t border-opacity-50">
                        <p className="font-semibold">Date Posted:</p>
                        <p>
                          <span className="font-light"> {new Date(post.date_posted).toDateString()}</span>
                        </p>
                      </div>

                      <div className="md:text-right mt-2">
                        <button className="md:bg-orange-500 duration-200 w-full md:w-auto hover:bg-orange-500 md:hover:bg-orange-600 border border-orange-500 bg-transparent md:border-none rounded-md text-sm px-2 py-1">
                          Add to cart <i className="ri-shopping-cart-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-[#282828] p-4 rounded-lg">
                    <h2 className="font-semibold text-2xl">Ratings</h2>
                    <div className="mt-2">
                      {post.rating && post.rating?.length > 0 ? (
                        <div>some rating</div>
                      ) : (
                        <p className="font-light">No ratings.</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 bg-[#282828] p-4 rounded-lg max-w-2xl">
                    <h2 className="font-semibold text-2xl">Description</h2>
                    <div className="mt-2">
                      <p className="whitespace-pre-line font-light">{post.description}</p>
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
