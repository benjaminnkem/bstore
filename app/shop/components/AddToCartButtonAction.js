"use client";

const AddToCartButtonAction = ({
  item,
  addItemToCart,
  defaultItemQuantity,
  incrementQuantity,
  decrementQuantity,
  setDefaultItemQuantity,
  changeItemQuantityManually,
}) => {
  function changeTextAfterAction(e) {
    if (defaultItemQuantity > 0) {
      e.target.textContent = "Added to cart ✅";
    } else {
      e.target.textContent = "Enter Quantity ☝";
    }
    setTimeout(() => {
      e.target.textContent = `Add to cart`;
    }, 2000);
  }

  return (
    <>
      <div className="space-y-1">
        <div className="flex items-center justify-evenly">
          <button
            className="px-2 py-1 text-sm duration-100 border border-white rounded-full md:text-base hover:bg-white hover:text-slate-900 dark:border-slate-600"
            onClick={decrementQuantity}
          >
            <i className="ri-subtract-line"></i>
          </button>
          <input
            type="text"
            value={defaultItemQuantity}
            className="text-center bg-transparent rounded-md w-14 white focus:outline-none"
            placeholder="Quantity"
            onChange={(e) => changeItemQuantityManually(e)}
          />
          <button
            className="px-2 py-1 text-sm duration-100 border border-green-600 rounded-full md:text-base hover:bg-green-600 hover:text-green-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
            onClick={incrementQuantity}
          >
            <i className="ri-add-line"></i>
          </button>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <button
            className="px-2 py-1 text-sm duration-100 border border-green-600 rounded-md md:text-base hover:bg-green-600 hover:text-green-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
            onClick={(e) => {
              if (defaultItemQuantity > 0) addItemToCart(item);
              changeTextAfterAction(e);
              setDefaultItemQuantity(0);
            }}
          >
            Add to cart <i className="ri-shopping-bag-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToCartButtonAction;
