"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProductFullImagePreview = ({ post }) => {
  const [selectedImagePrev, setSelectedImagePrev] = useState(0);

  const [imgSrc, setImgSrc] = useState(post.images[selectedImagePrev]);
  const [previewShow, setPreviewShow] = useState(false);

  const changeSelectedImage = (id) => setSelectedImagePrev(id);
  useEffect(() => setImgSrc(post.images[selectedImagePrev]), [selectedImagePrev]);

  const togglePreview = () => setPreviewShow(!previewShow);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen full-prev duration-200 ease-in grid text-white place-content-center ${
          previewShow ? "z-[9000] bg-[#000000b1]" : "-z-50 bg-transparent"
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
      <div className="space-y-8">
        <div>
          <div
            className="rounded-lg overflow-hidden group shadow-md max-h-96 min-h-[24rem] md:min-h-[26rem] lg:min-h-[30rem] relative flex items-center justify-center md:max-h-[auto] duration-200"
            onClick={togglePreview}
          >
            <Image
              src={imgSrc}
              alt={`${post.itemName}`}
              width={600}
              height={600}
              draggable="false"
              className="absolute top-0 left-0 object-cover w-full h-full duration-100 group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-white font-bold grid place-content-center bg-[#0000008a] duration-200 w-full h-full">
              <button>View Full Image</button>
            </div>
          </div>

          {post.images.length > 1 && (
            <div className="flex items-center gap-2 mt-2 overflow-x-auto multi-img">
              {post.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`w-[5rem] h-[5rem] overflow-hidden rounded-lg duration-200 border-2 ${
                    selectedImagePrev === idx ? "border-orange-500" : "border-transparent"
                  }`}
                  onClick={() => changeSelectedImage(idx)}
                >
                  <Image
                    src={image}
                    alt="More Images"
                    width={100}
                    height={100}
                    className="object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          )}

          <p className="mt-4 text-sm">
            Date Posted: <span className="font-light">{new Date(post.date_posted).toDateString()}</span>{" "}
          </p>
        </div>

        <div className="p-4 leading-loose duration-100 bg-white rounded-lg shadow-md dark:bg-transparent dark:p-0">
          <h2 className="text-2xl font-semibold">Product Description</h2>
          <div className="mt-2">
            <p className="font-light whitespace-pre-line">{post.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFullImagePreview;
