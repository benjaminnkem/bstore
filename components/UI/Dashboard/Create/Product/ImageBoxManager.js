import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProductImageBox = ({
  errors,
  setFormInput,
  formInput,
  defaultCon,
  addNewImage,
  images,
  imageBoxId,
  removeImage,
}) => {
  // Max Images allowed
  const maxImages = 5;
  const imageBoxMainId = images[imageBoxId].id;

  // File Upload
  const hiddenFileInput = useRef(null);
  const [localImageUrl, setLocalImageUrl] = useState("");
  const handleClick = () => hiddenFileInput.current.click(); // handle input click

  const handleFilePick = (e) => {
    const imageFiles = e.target.files;

    if (imageFiles && imageFiles.length > 0) {
      const img = imageFiles[0];
      setFormInput({ ...formInput, productImages: [...formInput.productImages, { id: images[imageBoxId].id, img }] });
      setLocalImageUrl(URL.createObjectURL(img));
      if (images.length >= maxImages) return;
      addNewImage();
    }
  };

  return (
    <>
      <div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          name="productImage"
          className="hidden"
          multiple
          ref={hiddenFileInput}
          onChange={(e) => handleFilePick(e)}
        />

        {localImageUrl ? (
          <div className="max-w-[210px]">
            <div className="w-52 h-52 mx-auto overflow-hidden relative group duration-200 border-2 rounded-md border-[#474856] focus:border-[#444554] hover:border-opacity-50 z-0">
              {/* <div className="absolute top-0 left-0 w-full h-full group-hover:bg-opacity-80 bg-opacity-0 bg-black duration-200 flex items-center justify-center">
                <div>
                  <button>Add New</button>
                  <button>Delete</button>
                </div>
              </div> */}
              <Image
                src={localImageUrl}
                alt="Product Image"
                width={320}
                height={320}
                className="object-cover absolute top-0 left-0 w-full h-full mx-auto -z-10"
              />
            </div>

            <button
              className="py-1 mt-2 w-full rounded-lg border border-transparent duration-200 hover:border-red-500 text-red-500 text-sm"
              onClick={() => removeImage(imageBoxMainId)}
            >
              Delete
            </button>
          </div>
        ) : (
          images.length <= maxImages && (
            <>
              <div
                className="w-52 h-52 flex space-x-2 items-center justify-center border-dashed rounded-lg py-2 mx-auto text-center duration-200 border-2 border-opacity-50 border-slate-400"
                role="button"
                onClick={() => handleClick()}
              >
                <span>Pick Image</span> <FontAwesomeIcon icon={faUpload} />
              </div>
              {errors.productImage && (
                <p className="text-xs font-bold text-center text-red-500 text-opacity-75">{errors.productImage}</p>
              )}
            </>
          )
        )}
      </div>
    </>
  );
};

export default ProductImageBox;
