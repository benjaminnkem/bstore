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
      <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900" onClick={() => {addItem(uniqueItem)}}>
        Add to cart <i className="ri-shopping-bag-line"></i>
      </button>
      <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
        Details <i className="ri-information-line"></i>
      </button>
    </>
  );
};

export default AddToCartButtonAction;
