"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { DashCreateContext } from "../../../../lib/contexts/dashboard/create-dashboard-context";
import axios from "axios";
import { toast } from "react-hot-toast";
import { TransitionStart } from "@/lib/utils/transition";
import ProductImageBox from "./ImageBoxManager";

const uuid = require("uuid").v4;

let newConCount = 0;
let maxImageCount = 5;

const ProductCreation = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, err: false });
  const [formInput, setFormInput] = useState({
    itemName: "",
    otherName: "",
    price: "",
    category: "",
    description: "",
    productImages: [{}],
  });
  const [images, setImages] = useState([{ id: uuid() }]); // '' represents an image - for id sake

  // For tag
  const [tagList, setTagList] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const { curSelection } = useContext(DashCreateContext);

  // Tag creation
  const checkForTag = (e) => {
    const curValue = e.target?.value.trim();
    if (curValue === "" || curValue.indexOf(",") <= 1) return;

    const taggyString = curValue.substring(0, curValue.indexOf(","));
    const tagExists = tagList.find((tag) => tag === taggyString);
    if (tagExists) {
      setTagInput("");
      return;
    }

    setTagList((prev) => [...prev, taggyString]);
    setTagInput("");
  };

  const deleteTag = (tagName) => {
    const updatedTags = tagList.filter((tag) => tag !== tagName);
    setTagList(updatedTags);
  };

  const validateForm = () => {
    const errors = {};

    if (!formInput.itemName) errors.itemName = "An Item name is required";

    if (!formInput.price) {
      errors.price = "Enter price for item";
    } else if (isNaN(Number(formInput.price))) errors.price = "Invalid Price enter only numbers";

    if (!formInput.category) errors.category = "A category must be specified";
    if (!formInput.description) errors.description = "Please enter a description for the product";
    if (!formInput.productImages) errors.productImages = "Product image is required";
    if (tagList.length === 0) errors.tagList = "Please enter a tag list for the product";

    return errors;
  };

  // Text fields
  const handleUpdateFormInput = (event) => setFormInput({ ...formInput, [event.target.name]: event.target.value });

  // Images
  const addNewImage = () => setImages((prev) => [...prev, { id: uuid() }]);
  const removeImage = (imageId) => {
    const updatedImages = images.filter((image) => image.id !== imageId);
    const updatedFormProductImages = formInput.productImages.filter((imgData) => imgData.id !== imageId);

    setFormInput({ ...formInput, productImages: updatedFormProductImages });
    setImages(updatedImages);

    // if (updatedImages.length <= 5)
    if (newConCount < 1) {
      newConCount++;
      addNewImage();
    }
  };

  // Main upload...
  const handleProductCreation = async (e) => {
    e.preventDefault();

    const validator = validateForm();
    setErrors(validator);

    const productImages = formInput.productImages.filter((image) => formInput.productImages.indexOf(image) !== 0);
    if (formInput.productImages.length <= 1) {
      toast.error("No product Image selected");
      return;
    }

    if (Object.keys(validator).length === 0) {
      setStatus({ ...status, loading: true, success: false, err: false });
      try {
        const formData = new FormData();
        formData.append("itemName", formInput.itemName);
        formData.append("otherName", formInput.otherName);
        formData.append("price", formInput.price);
        formData.append("category", formInput.category);
        formData.append("description", formInput.description);
        formData.append("tags", tagList);
        productImages.forEach((prodImage) => {
          formData.append("productImage", prodImage.img);
        });

        const response = await axios.post("/api/pages/create/product", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.statusText.toLocaleLowerCase() != "ok") {
          setStatus({ ...status, loading: false, err: true });
          toast.error("Sorry, an error occurred");
          return;
        }

        toast.success("Product successfully uploaded");
        setStatus({ ...status, loading: false, success: true, err: false });
        setFormInput({
          itemName: "",
          otherName: "",
          price: "",
          category: "",
          description: "",
          productImage: [{}],
        });
        setImages([{ id: uuid() }]);
        setTagList([]);
      } catch (e) {
        setStatus({ ...status, loading: false, err: true });
        console.log(e);
      }
    } else {
      setStatus({ ...status, loading: false });
      return;
    }
  };

  if (curSelection === "product")
    return (
      <>
        <TransitionStart>
          <div>
            <h2 className="py-2 text-2xl font-extrabold">New Product</h2>

            <div className="mt-2">
              <form onSubmit={(e) => handleProductCreation(e)} encType="multipart/form-data">
                <div className="grid gap-4">
                  {/* Handling all images picked and container */}
                  <div className="flex items-start space-x-2 overflow-x-auto py-4 productImageSlider">
                    {images.map((_, idx) => (
                      <ProductImageBox
                        key={_.id}
                        errors={errors}
                        imageBoxId={idx}
                        formInput={formInput}
                        addNewImage={addNewImage}
                        removeImage={removeImage}
                        setFormInput={setFormInput}
                        defaultCon={images.length === 1 ? true : false}
                        images={images}
                      />
                    ))}
                  </div>

                  <div className="md:grid flex flex-col gap-4 grid-cols-2">
                    <div>
                      <div className="space-y-1">
                        <label htmlFor="itemName" className="font-semibold dark:text-[#d6d6d6]">
                          Item Name
                        </label>
                        <input
                          type="text"
                          name="itemName"
                          id="itemName"
                          placeholder="What should this product be called?"
                          className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-primaryDarkShade-300 focus:border-[#444554] placeholder:text-[#6e6e6e]"
                          value={formInput.itemName}
                          onChange={(e) => handleUpdateFormInput(e)}
                        />
                      </div>
                      {errors.itemName && (
                        <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.itemName}</p>
                      )}
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label htmlFor="tags" className="font-semibold dark:text-[#d6d6d6]">
                          Tags
                        </label>
                        <div className="border-primaryDarkShade-300 flex space-x-1 items-center border rounded-md outline-none overflow-y-auto duration-200 focus-within:border-[#444554] bg-transparent p-2">
                          <div className="flex items-center flex-shrink-0 space-x-1">
                            {tagList.map((tag, id) => (
                              <div
                                key={id}
                                className="px-2 py-1 rounded-md flex-shrink-0 bg-[#444554] duration-200 hover:bg-[#5b5d70]"
                              >
                                <span>{tag}</span>{" "}
                                <span>
                                  <i
                                    className="cursor-pointer ri-close-line"
                                    title={`Remove ${tag}`}
                                    onClick={() => deleteTag(tag)}
                                  ></i>
                                </span>
                              </div>
                            ))}
                          </div>
                          <input
                            type="text"
                            name="tags"
                            id="tags"
                            placeholder="Tags: game, tech..."
                            className="w-full bg-transparent outline-none placeholder:text-[#6e6e6e]"
                            value={tagInput}
                            onChange={(e) => {
                              setTagInput(e.target.value);
                              checkForTag(e);
                            }}
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      {errors.tagList && (
                        <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.tagList}</p>
                      )}
                      <p className="text-xs font-bold text-[#80849c]">Hint: Separate with a comma</p>
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label htmlFor="price" className="font-semibold dark:text-[#d6d6d6]">
                          Price In USD ($)
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-primaryDarkShade-300 focus:border-[#444554] placeholder:text-[#6e6e6e]"
                          placeholder="Item Price e.g 1.99, 200, 129.99"
                          value={formInput.price}
                          onChange={(e) => handleUpdateFormInput(e)}
                        />
                      </div>
                      {errors.price && <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.price}</p>}
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label htmlFor="category" className="font-semibold dark:text-[#d6d6d6]">
                          Category
                        </label>
                        <input
                          type="text"
                          name="category"
                          id="category"
                          className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-primaryDarkShade-300 focus:border-[#444554] placeholder:text-[#6e6e6e]"
                          placeholder="Tech, Phone, Automobile"
                          value={formInput.category}
                          onChange={(e) => handleUpdateFormInput(e)}
                        />
                      </div>
                      {errors.category && (
                        <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.category}</p>
                      )}
                    </div>
                    <div>
                      <div className="space-y-1">
                        <label htmlFor="category" className="font-semibold dark:text-[#d6d6d6]">
                          Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          cols="30"
                          rows="5"
                          placeholder="Describe the item you're selling..."
                          className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-primaryDarkShade-300 focus:border-[#444554] placeholder:text-[#6e6e6e]"
                          value={formInput.description}
                          onChange={(e) => handleUpdateFormInput(e)}
                        ></textarea>
                      </div>
                      {errors.description && (
                        <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.description}</p>
                      )}
                    </div>
                    <div></div>

                    <div style={{ gridColumn: "1/3" }}>
                      <button
                        type="submit"
                        className="w-full py-2 rounded-md border border-primaryDarkShade-300 duration-200 hover:bg-primaryDarkShade-300 hover:text-inherit disabled:opacity-40 disabled:bg-[#111115] disabled:hover:bg-[#111115]"
                        disabled={status.loading}
                      >
                        {!status.loading ? (
                          <span>
                            Post Product <i className="ri-rocket-line"></i>
                          </span>
                        ) : (
                          <span>
                            Posting... <i className="ri-loader-line"></i>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionStart>
      </>
    );
};

export default ProductCreation;
