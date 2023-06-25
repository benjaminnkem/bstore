"use client";

import { useState } from "react";

const AddToCartButtonAction = ({ uniqueItem }) => {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
    console.log(items);
  }

  return (
    <>
      <div className="flex space-x-3">
        <button
          className="px-2 py-1 duration-100 border border-green-600 rounded-md hover:bg-green-600 hover:text-green-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
          onClick={() => {
            addItem(uniqueItem);
          }}
        >
          Add to cart <i className="ri-shopping-bag-line"></i>
        </button>
        <button className="px-2 py-1 duration-100 border border-white rounded-md hover:bg-white hover:text-slate-900 dark:border-slate-600">
          Details <i className="ri-information-line"></i>
        </button>
      </div>
    </>
  );
};

export default AddToCartButtonAction;
