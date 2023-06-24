"use client";

const AddToCartButtonAction = ({ itemId }) => {
  function addToCart() {
    console.log("something happened", itemId);
  }

  return (
    <>
      <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900" onClick={addToCart}>
        Add to cart <i className="ri-shopping-bag-line"></i>
      </button>
      <button className="p-1 duration-100 border hover:bg-white hover:text-slate-900">
        Details <i className="ri-information-line"></i>
      </button>
    </>
  );
};

export default AddToCartButtonAction;
