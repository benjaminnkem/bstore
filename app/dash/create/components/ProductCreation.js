"use client";
import { useContext, useEffect, useRef, useState } from "react";
import CustAlert from "@/components/Alert";
import { DashCreateContext } from "../context/CreateContextProvider";
import Image from "next/image";
import axios from "axios";

const ProductCreation = () => {
  const [errors, setErrors] = useState({});
  const [localImageUrl, seLocalImageUrl] = useState("/images/default/default-img.png");
  const [status, setStatus] = useState({ loading: false, success: false, err: false });
  const [formInput, setFormInput] = useState({
    itemName: "",
    otherName: "",
    price: "",
    category: "",
    description: "",
    productImage: undefined,
  });

  // For tag
  const [tagList, setTagList] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const { curSelection } = useContext(DashCreateContext);

  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState("");

  // Others
  useEffect(() => {
    if (status.success) {
      setAlertShow(true);
      setAlertText("Posted Successfully ✅☑");
      setTimeout(() => setAlertShow(false), 4000);
    }

    if (status.err) {
      setAlertShow(true);
      setAlertText("Sorry, An error occurred ❌😢");
      setTimeout(() => setAlertShow(false), 4000);
    }
  }, [status.success, status.err]);

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
    if (!formInput.productImage) errors.productImage = "Product image is required";
    if (tagList.length === 0) errors.tagList = "Please enter a tag list for the product";

    return errors;
  };

  // File Upload
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFilePick = (e) => {
    const imageFiles = e.target.files;

    if (imageFiles && imageFiles.length > 0) {
      const mainImgFile = imageFiles[0];
      setFormInput({ ...formInput, productImage: mainImgFile });
      seLocalImageUrl(URL.createObjectURL(mainImgFile));
    }
  };

  // Text fields
  const handleUpdateFormInput = (event) => setFormInput({ ...formInput, [event.target.name]: event.target.value });

  // Main upload...
  const handleProductCreation = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, success: false, err: false });

    const validator = validateForm();
    setErrors(validator);

    if (Object.keys(validator).length === 0) {
      try {
        const formData = new FormData();
        for (const keys of Object.keys(formInput)) {
          formData.append(keys, formInput[keys]);
        }
        formData.append("tags", tagList);

        const response = await axios.post("/api/pages/create/product", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.statusText.toLocaleLowerCase() != "ok") {
          setStatus({ ...status, loading: false, err: true });
          return;
        }

        setStatus({ ...status, loading: false, success: true, err: false });
        setFormInput({
          itemName: "",
          otherName: "",
          price: "",
          category: "",
          description: "",
          productImage: undefined,
        });
        setTagList([]);
        seLocalImageUrl("/images/default/default-img.png");
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
        <div className="relative">
          <h2 className="py-2 text-2xl font-extrabold">Product Details</h2>

          <div className="mt-2">
            <form onSubmit={(e) => handleProductCreation(e)} encType="multipart/form-data">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    name="productImage"
                    className="hidden"
                    ref={hiddenFileInput}
                    onChange={(e) => handleFilePick(e)}
                  />

                  <div className="w-64 h-64 mx-auto overflow-hidden duration-200 border-2 rounded-md border-[#474856] focus:border-[#444554] hover:border-opacity-50">
                    <Image
                      src={localImageUrl}
                      alt="Product Image"
                      width={320}
                      height={320}
                      className="object-cover w-full h-full mx-auto"
                    />
                  </div>
                  {/* Upload buttony */}
                  <div
                    className="w-40 py-2 duration-200 text-center mx-auto border-2 border-opacity-50 rounded-md border-slate-400"
                    role="button"
                    onClick={(e) => {
                      handleClick();
                    }}
                  >
                    Upload Image <i className="ri-upload-2-line"></i>
                  </div>
                  {errors.productImage && (
                    <p className="text-xs font-bold text-center text-red-500 text-opacity-75">{errors.productImage}</p>
                  )}
                </div>

                <div>
                  <div className="space-y-1">
                    <label htmlFor="itemName" className="font-semibold text-[#b4b8d8]">
                      Item Name
                    </label>
                    <input
                      type="text"
                      name="itemName"
                      id="itemName"
                      placeholder="What should this product be called?"
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
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
                    <label htmlFor="tags" className="font-semibold text-[#b4b8d8]">
                      Tags
                    </label>
                    <div className="border-[#2a2b35] flex space-x-1 items-center border rounded-md outline-none overflow-y-auto duration-200 focus-within:border-[#444554] bg-transparent p-2">
                      <div className="flex space-x-1 items-center flex-shrink-0">
                        {tagList.map((tag, id) => (
                          <div
                            key={id}
                            className="px-2 py-1 rounded-md flex-shrink-0 bg-[#444554] duration-200 hover:bg-[#5b5d70]"
                          >
                            <span>{tag}</span>{" "}
                            <span>
                              <i
                                className="ri-close-line cursor-pointer"
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
                        className="w-full bg-transparent outline-none placeholder:text-[#5e6174]"
                        value={tagInput}
                        onChange={(e) => {
                          setTagInput(e.target.value);
                          checkForTag(e);
                        }}
                      />
                    </div>
                  </div>
                  {errors.tagList && <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.tagList}</p>}
                  <p className="text-xs font-bold text-[#80849c]">Hint: Separate with a comma</p>
                </div>

                <div>
                  <div className="space-y-1">
                    <label htmlFor="price" className="font-semibold text-[#b4b8d8]">
                      Price In USD ($)
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                      placeholder="Item Price e.g 1.99, 200, 129.99"
                      value={formInput.price}
                      onChange={(e) => handleUpdateFormInput(e)}
                    />
                  </div>
                  {errors.price && <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.price}</p>}
                </div>

                <div>
                  <div className="space-y-1">
                    <label htmlFor="category" className="font-semibold text-[#b4b8d8]">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
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
                    <label htmlFor="category" className="font-semibold text-[#b4b8d8]">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                      placeholder="Describe the item you're selling..."
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                      value={formInput.description}
                      onChange={(e) => handleUpdateFormInput(e)}
                    ></textarea>
                  </div>
                  {errors.description && (
                    <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.description}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-md border border-[#2a2b35] duration-200 hover:bg-[#2a2b35] hover:text-inherit disabled:opacity-40 disabled:bg-[#111115] disabled:hover:bg-[#111115]"
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
            </form>
          </div>

          {alertShow && <CustAlert message={alertText} status={alertText.startsWith("Sorry") ? "red" : "green"} />}
        </div>
      </>
    );
};

export default ProductCreation;
