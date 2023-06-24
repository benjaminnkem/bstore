import Image from "next/image";
import "./Shop.css";
import "remixicon/fonts/remixicon.css";

export const metadata = {
  title: "Shop - BStore",
};

const Shop = () => {
  return (
    <>
      <div id="shop">
      <p className="py-4 text-sm font-light text-center text-green-800">*Hover/Click products to view info.*</p>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/2.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 1</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Add to cart <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/4.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 2</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Add to cart <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/3.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 3</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Add to cart <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/4.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 1</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Add to cart <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/2.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 2</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Buy <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-auto overflow-hidden duration-100 hover:shadow-md rounded-2xl prody hover:outline outline-green-300 bg-slate-400 md:m-4 group">
              <Image
                src={`/images/uploads/1.jpg`}
                alt="Def Image"
                width={256}
                height={256}
                className="object-cover w-full"
                draggable="false"
              />

              <div className="absolute top-0 left-0 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-75 text-slate-50 place-content-center">
                <div className="space-y-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-2xl font-semibold">Some Product 3</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at ipsam inventore nobis impedit
                    distinctio earum
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Buy <i className="ri-shopping-bag-line"></i>
                    </button>
                    <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
                      Details <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
