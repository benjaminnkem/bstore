"use client";
import { useContext } from "react";
import { DashCreateContext } from "../../../../lib/contexts/dashboard/create-dashboard-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup, faShop } from "@fortawesome/free-solid-svg-icons";

const CreateType = () => {
  const { curSelection, setCurSelection } = useContext(DashCreateContext);

  return (
    <>
      <div>
        <h2 className="py-2 text-2xl font-extrabold">Type</h2>
        <div className="flex items-center mt-2 space-x-2 space-y-0 md:space-y-2 md:space-x-0 md:block">
          <div
            className={`cat-el p-2 dark:bg-primaryDarkShade-200 bg-gray-200 duration-200 rounded-md w-full ${
              curSelection === "product" && "dark:bg-primaryDarkShade-300 bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurSelection("product")}
          >
            <p>
              Product <FontAwesomeIcon icon={faShop} />
            </p>
          </div>
          <div
            className={`cat-el p-2 dark:bg-primaryDarkShade-200 bg-gray-200 duration-200 rounded-md w-full ${
              curSelection === "category" && "dark:bg-primaryDarkShade-300 bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurSelection("category")}
          >
            <p>
              Category <FontAwesomeIcon icon={faObjectGroup} />{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateType;
