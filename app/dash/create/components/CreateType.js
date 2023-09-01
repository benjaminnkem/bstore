"use client";
import { useContext } from "react";
import { DashCreateContext } from "../context/CreateContextProvider";

const CreateType = () => {
  const { curSelection, setCurSelection } = useContext(DashCreateContext);

  return (
    <>
      <div>
        <h2 className="font-extrabold text-2xl py-2">Content Type</h2>
        <div className="md:space-y-2 md:space-x-0 space-y-0 space-x-2 flex md:block items-center mt-2">
          <div
            className={`cat-el p-2 bg-primaryDarkShade-200 duration-200 rounded-md w-full ${
              curSelection === "product" && "bg-primaryDarkShade-300"
            } cursor-pointer`}
            onClick={() => setCurSelection("product")}
          >
            <p>Product</p>
          </div>
          <div
            className={`cat-el p-2 bg-primaryDarkShade-200 duration-200 rounded-md w-full ${
              curSelection === "category" && "bg-primaryDarkShade-300"
            } cursor-pointer`}
            onClick={() => setCurSelection("category")}
          >
            <p>Category</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateType;
