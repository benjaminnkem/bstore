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
        className={`absolute top-0 left-0 w-full h-screen full-prev duration-200 ease-in grid place-content-center ${
          previewShow ? "z-50 bg-[#000000b1]" : "-z-50 bg-transparent"
        }`}
      >
        <div className={`overflow-hidden duration-200 ${previewShow ? "opacity-100" : "opacity-0"}`}>
          <Image src={imgSrc} alt="Full Image Preview" width={600} height={600} />

          <div className="text-center">
            <p
              className="select-none text-center border-b border-red-500 opacity-80 cursor-pointer inline-block mt-4 mx-auto"
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

      <div>
        <div className="rounded-lg overflow-hidden group shadow-md max-h-96 md:min-h-[24rem] relative flex items-center justify-center md:max-h-[auto] duration-300 ease-in-out">
          <Image
            src={imgSrc}
            alt={`${post.itemName}`}
            width={600}
            height={600}
            draggable="false"
            className="object-cover w-full h-full absolute top-0 left-0 duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-white font-bold grid place-content-center bg-[#0000008a] duration-300 w-full h-full">
            <button onClick={togglePreview}>
              View Full Image <i className=" ri-external-link-line"></i>
            </button>
          </div>
        </div>

        <p className="text-lg">Date Posted: {new Date(post.date_posted).toLocaleDateString()} </p>
      </div>
    </>
  );
};

export default ProductFullImagePreview;
