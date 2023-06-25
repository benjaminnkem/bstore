"use client";

const AddToCartButtonAction = ({ item, addItemToCart }) => {
  return (
    <>
      <div className="flex space-x-3">
        <button
          className="px-2 py-1 text-sm duration-100 border border-green-600 rounded-md md:text-base hover:bg-green-600 hover:text-green-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
          onClick={() => {
            addItemToCart(item);
          }}
        >
          Add to cart <i className="ri-shopping-bag-line"></i>
        </button>
        <button className="px-2 py-1 text-sm duration-100 border border-white rounded-md md:text-base hover:bg-white hover:text-slate-900 dark:border-slate-600">
          Details <i className="ri-information-line"></i>
        </button>
      </div>
    </>
  );
};

export default AddToCartButtonAction;
