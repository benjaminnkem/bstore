"use client";
import { useContext } from "react";
import { DashCreateContext } from "../../../../lib/contexts/dashboard/create-dashboard-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup, faShop } from "@fortawesome/free-solid-svg-icons";

const CreateType = () => {
  const { curSelection, setCurSelection } = useContext(DashCreateContext);

  const creationTypes = [
    { label: "Product", tag: "product", icon: <FontAwesomeIcon icon={faShop} /> },
    { label: "Category", tag: "category", icon: <FontAwesomeIcon icon={faObjectGroup} /> },
  ];

  return (
    <>
      <div>
        <h2 className="py-2 text-2xl font-extrabold">Type</h2>
        <div className="flex items-center mt-2 space-x-2 space-y-0 md:space-y-2 md:space-x-0 md:block">
          {creationTypes.map((cType, idx) => (
            <div
              key={idx}
              className={`cat-el p-2 dark:bg-primaryDarkShade-200 border-2 duration-200 rounded-md w-full ${
                curSelection === cType.tag
                  ? "dark:bg-primaryDarkShade-300 bg-gray-200 border-gray-400"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              } cursor-pointer`}
              onClick={() => setCurSelection(cType.tag)}
            >
              <p>
                {cType.label} {cType.icon}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateType;
