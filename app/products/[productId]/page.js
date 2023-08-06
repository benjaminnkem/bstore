import DefaultWrapper from "@/app/DefaultWrapper";
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
          <div className="md:max-w-[1488px] w-11/12 mx-auto">
            <h1 className="font-bold text-4xl duration-200 my-4">{post.itemName}</h1>

            <section className="grid grid-cols-2 gap-2">
              <div className="rounded-md overflow-hidden">
                <Image
                  src={post.images[0]}
                  alt={`${post.itemName}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </section>
          </div>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default ProductDetails;
