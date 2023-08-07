import DefaultWrapper from "@/app/DefaultWrapper";
import HorizontalCategory from "@/app/shop/components/HorizontalCategory";
import { headers } from "next/headers";
import Image from "next/image";

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
            <section className="grid gap-4 my-10" style={{ gridTemplateColumns: "2fr 3fr" }}>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl max-h-96 duration-300 ease-in-out">
                <Image
                  src={post.images[0]}
                  alt={`${post.itemName}`}
                  width={600}
                  height={600}
                  draggable="false"
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <h1 className="font-bold text-4xl duration-200 my-4">
                  {post.itemName}{" "}
                  <span className="text-sm font-light">
                    posted by <span className="text-orange-500">{post.seller[0].username}</span>
                  </span>
                </h1>

                <div className="mt-4">
                  <h2 className="font-semibold text-2xl">Details:</h2>
                  <ul className="ml-4 font-light list-disc">
                    <li>Item Name: {post.itemName}</li>
                  </ul>
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
