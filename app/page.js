import "./styles/Default.css";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import DefaultWrapper from "@/lib/utils/DefaultWrapper";
import HorizontalProductShow from "@/components/UI/Defaults/HorizontalProductShow";
import HeartReaction from "@/components/Common/Icons/HeartReaction";
import HomeHeader from "@/components/UI/Home/header";
import { publicApi } from "@/lib/config/axios-instance";

export const metadata = {
  title: "BStore - Quality Eyewear, Clothes & Accessories",
  description: "BStore, a web application that makes online shopping and payments online easier and faster",
  keywords: "Online Store, Online Shopping, Eyewear, Gadgets, Products, Appliances, Clothes & Accessories",
};

const getInitialProducts = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/initialproducts`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data;
};

const Home = async () => {
  const products = await getInitialProducts();

  return (
    <>
      <DefaultWrapper>
        <HomeHeader />

        <main className="py-12">
          <section className="my-24">
            <div className="container ">
              <h2 className="my-8 text-2xl font-extrabold md:text-3xl lg:text-4xl tp-text">Recommended For You</h2>
              <HorizontalProductShow products={products} />
            </div>
          </section>

          <section className="my-24">
            <div className="container ">
              <h2 className="my-8 text-2xl font-extrabold md:text-3xl lg:text-4xl tp-text">Top Products</h2>
              <div className="first-showcase">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="max-h-[36rem] overflow-hidden rounded-md text-white relative duration-300"
                  >
                    <Link href={`/products/${product._id}`} passHref>
                      <Image
                        src={product.images[0]}
                        alt="Some Image"
                        width={800}
                        height={800}
                        className="object-cover h-full rounded-md aspect-square"
                      />
                      <div className="absolute top-0 left-0 w-full h-full p-2 duration-300 ease-in-out bg-black bg-opacity-0 group hover:bg-opacity-20">
                        <div className="relative w-full h-full duration-300 group-hover:scale-[0.97]">
                          <p className="text-base font-bold left-2 top-2 md:text-lg product-text">{product.itemName}</p>
                          <HeartReaction product={product} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="md:my-48 my-36">
            <div className="container ">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">
                    Tech, Gadgets & Accessories
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil.
                    </p>
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Soluta, doloremque., et dolorum velit nostrum impedit magnam earum!
                    </p>
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia, et dolorum velit nostrum
                      impedit magnam earum!
                    </p>
                    <div>
                      <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                        Tech, Gadgets & Accessories <i className="ri-menu-unfold-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod1.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="md:my-48 my-36">
            <div className="container ">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod4.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">
                    Kitchen Utensils & Gadgets
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil.
                    </p>
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ipsa corporis qui. Mollitia
                      suscipit sed illum? Nulla facilis, minima labore nesciunt, mollitia, et dolorum velit nostrum
                      impedit magnam earum!
                    </p>
                    <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                      Kitchen Utensils & Gadgets <i className="ri-menu-unfold-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="md:my-48 my-36">
            <div className="container ">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold lg:text-4xl md:text-3xl tp-text">Food & Groceries</h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base font-lightj">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum quas possimus rem.
                      Voluptatum minima perspiciatis magni neque error nihil <br /> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eos quae voluptate obcaecati commodi consectetur nostrum vitae,
                      veritatis consequatur debitis? Quidem.
                    </p>
                    <div>
                      <button className="px-4 py-2 duration-200 border-2 border-orange-500 rounded-md hover:bg-orange-500">
                        Food & Groceries <i className="ri-menu-unfold-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md md:max-h-96 max-h-56 category-image">
                  <Image
                    src={`/images/products/prod2.jpg`}
                    alt="Some image"
                    className="object-cover w-full h-full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultWrapper>
    </>
  );
};

export default Home;
