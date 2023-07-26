"use client";

import { useState } from "react";

const ProductCreation = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, err: false });

  const validateForm = () => {

  }

  const handleProductCreation = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h2 className="font-extrabold text-2xl py-2">Product Details</h2>

        <div className="mt-2">
          <form onSubmit={(e) => handleProductCreation(e)}>
            <div className="grid gap-4">
              <div className="space-y-1 ">
                <label htmlFor="itemName" className="font-semibold text-[#b4b8d8]">
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="What should this product be called?"
                  className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                />
              </div>
              <div className="">
                <div className="space-y-1">
                  <label htmlFor="itemName" className="font-semibold text-[#b4b8d8]">
                    Other Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    id="itemName"
                    placeholder="This will be used in keywords"
                    className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                  />
                </div>
                <p className="text-xs font-semibold text-[#5e6174]">Hint: Separate with a comma</p>
              </div>
              <div className="space-y-1 ">
                <label htmlFor="itemName" className="font-semibold text-[#b4b8d8]">
                  Price In USD ($)
                </label>
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  className="block w-full bg-transparent border rounded-md p-2 outline-none duration-200 border-[#2a2b35] focus:border-[#444554] placeholder:text-[#5e6174]"
                  placeholder="Item Price e.g 1.99, 200, 129.99"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className="w-full py-2 rounded-md border border-[#2a2b35] duration-200 hover:bg-[#2a2b35] hover:text-inherit"
                >
                  Create Product <i className="ri-creative-commons-line"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductCreation;
