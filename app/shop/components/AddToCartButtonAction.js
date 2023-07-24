"use client";

const AddToCartButtonAction = ({
  item,
  addItemToCart,
  itemQuantity,
  incrementQuantity,
  decrementQuantity,
  setItemQuantity,
  changeItemQuantityManually,
  calculateTotalCosts,
}) => {
  function changeTextAfterAction(e) {
    const element = e.target;
    if (itemQuantity > 0) {
      element.textContent = "Added to cart ✅";
    } else {
      element.textContent = "Enter Quantity ☝";
    }
    setTimeout(() => {
      element.innerHTML = 'Add to cart <i className="ri-shopping-bag-line">';
    }, 3000);
  }

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-evenly">
          <div
            className="px-2 py-1 duration-100 border border-white rounded-full cursor-pointer md:text-base hover:bg-white hover:text-slate-900 dark:border-slate-600"
            onClick={decrementQuantity}
          >
            <i className="ri-subtract-line"></i>
          </div>
          <input
            type="text"
            value={itemQuantity}
            className="text-center bg-transparent rounded-md w-14 white focus:outline-none"
            placeholder="Quantity"
            onChange={(e) => changeItemQuantityManually(e)}
          />
          <div
            className="px-2 py-1 duration-100 border border-orange-600 rounded-full cursor-pointer md:text-base hover:bg-orange-600 hover:text-orange-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
            onClick={incrementQuantity}
          >
            <i className="ri-add-line"></i>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <button
            className="px-2 py-1 text-base duration-100 border border-orange-600 rounded-md md:text-base hover:bg-orange-600 hover:text-orange-50 dark:hover:text-slate-900 dark:hover:bg-white dark:border-slate-600"
            onClick={(e) => {
              changeTextAfterAction(e);
              if (itemQuantity > 0)
                addItemToCart({
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  image_url: item.image_url,
                  price: item.price,
                  quantity: itemQuantity,
                });
              calculateTotalCosts();
              setItemQuantity(0);
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
