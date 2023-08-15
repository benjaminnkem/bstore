"use client";

import Image from "next/image";
import { useState } from "react";

const ProductFullImagePreview = ({ post }) => {
  const [imgSrc, setImgSrc] = useState(post.images[0]);
  const [previewShow, setPreviewShow] = useState(false);

  const togglePreview = () => setPreviewShow(!previewShow);

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-screen full-prev duration-200 ease-in grid text-white place-content-center ${
          previewShow ? "z-50 bg-[#000000b1]" : "-z-50 bg-transparent"
        }`}
      >
        {/* Image preview */}
        <div className={`overflow-hidden duration-200 ${previewShow ? "opacity-100" : "opacity-0"}`}>
          <Image src={imgSrc} alt="Full Image Preview" width={600} height={600} />

          <div className="text-center">
            <p
              className="inline-block mx-auto mt-4 text-center border-b border-red-500 cursor-pointer select-none opacity-80"
              onClick={togglePreview}
            >
              Close Full Image
            </p>
          </div>
        </div>

        <i
          className={`absolute right-2 top-2 ri-close-line lg:text-5xl md:text-3xl sm:text-2xl text-xl cursor-pointer opacity-80 ${
            previewShow ? "block" : "hidden"
          }`}
          title="Close Preview"
          onClick={togglePreview}
        ></i>
      </div>

      {/* Main Image */}
      <div>
        <div className="md:sticky top-4">
          <div className="rounded-lg overflow-hidden group shadow-md max-h-96 min-h-[20rem] md:min-h-[24rem] relative flex items-center justify-center md:max-h-[auto] duration-200">
            <Image
              src={imgSrc}
              alt={`${post.itemName}`}
              width={600}
              height={600}
              draggable="false"
              className="absolute top-0 left-0 object-cover w-full h-full duration-200 group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-white font-bold grid place-content-center bg-[#0000008a] duration-200 w-full h-full">
              <button onClick={togglePreview}>
                View Full Image <i className=" ri-external-link-line"></i>
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Date Posted: <span className="font-light">{new Date(post.date_posted).toDateString()}</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductFullImagePreview;
