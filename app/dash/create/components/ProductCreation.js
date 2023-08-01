"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { CustomSessionDataContext } from "../../components/DashboardWrapper";
import CustAlert from "@/components/Alert";
import { DashCreateContext } from "../context/CreateContextProvider";
import Image from "next/image";

const ProductCreation = () => {
  const [errors, setErrors] = useState({});
  const [localImageUrl, seLocalImageUrl] = useState("/images/products/prod2.jpg");
  const [status, setStatus] = useState({ loading: false, success: false, err: false });
  const [formInput, setFormInput] = useState({
    itemName: "",
    otherName: "",
    price: "",
    category: "",
    description: "",
    productImage: undefined,
  });

  // Contexts
  const sessionContent = useContext(CustomSessionDataContext);
  const { curSelection } = useContext(DashCreateContext);

  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState("");

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

  const validateForm = () => {
    const errors = {};

    if (!formInput.itemName) errors.itemName = "An Item name is required";

    if (!formInput.price) {
      errors.price = "Enter price for item";
    } else if (isNaN(Number(formInput.price))) errors.price = "Invalid Price enter only numbers";

    if (!formInput.category) errors.category = "A category must be specified";
    if (!formInput.description) errors.description = "Please enter a description for the product";

    return errors;
  };

  // File Upload
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFilePick = (e) => {
    const imageFiles = e.target.files;

    if (!imageFiles || !imageFiles.length === 0) return;
    const mainImgFile = imageFiles[0];

    setFormInput({ ...formInput, productImage: mainImgFile });
    seLocalImageUrl(URL.createObjectURL(mainImgFile));
  };

  const handleUpdateFormInput = (event) => setFormInput({ ...formInput, [event.target.name]: event.target.value });
  const handleProductCreation = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, success: false, err: false });

    const validator = validateForm();
    setErrors(validator);

    if (Object.keys(validator).length === 0) {
      const { itemName, otherName, price, category, description } = formInput;
      const response = await fetch("/api/create/product", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          itemName,
          otherName,
          price,
          category,
          description,
          seller_id: sessionContent.user.id && sessionContent.user.id,
        }),
      });

      if (!response.ok) {
        setStatus({ ...status, loading: false, err: true });
        return;
      }

      setStatus({ ...status, loading: false, success: true, err: false });
      setFormInput({ itemName: "", otherName: "", price: "", category: "", description: "" });
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
            <form onSubmit={(e) => handleProductCreation(e)}>
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
                  <div className="text-center">
                    <button
                      className="w-40 py-2 duration-200 border-2 border-opacity-50 rounded-md border-slate-400"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                      }}
                    >
                      Upload Image <i className="ri-upload-2-line"></i>
                    </button>
                  </div>
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
                    <label htmlFor="otherName" className="font-semibold text-[#b4b8d8]">
                      Keywords (Optional)
                    </label>
                    <input
                      type="text"
                      name="otherName"
                      id="otherName"
                      placeholder="This will be used in keywords for searches"
                      className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                      value={formInput.otherName}
                      onChange={(e) => handleUpdateFormInput(e)}
                    />
                  </div>
                  {errors.otherName && (
                    <p className="text-xs font-bold text-red-500 text-opacity-75">{errors.otherName}</p>
                  )}
                  <p className="text-xs font-bold text-[#5e6174]">Hint: Separate with a comma</p>
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
