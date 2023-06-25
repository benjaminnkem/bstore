import "./loading.css";

const ShopLoading = () => {
  const loadingElementCount = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="md:max-w-[1024px] w-11/12 mx-auto">
        <p className="py-4 text-sm font-light text-center text-green-800 dark:text-green-200">
          *Please Hold...*
        </p>

        <div className="grid items-center grid-cols-1 gap-8 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
          {loadingElementCount.map((element) => (
            <div className="p-4 space-y-4 bg-gray-800 rounded-md" key={element}>
              <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
                <div className="w-16 h-16 bg-gray-300 rounded-full skeleton"></div>
                <div className="space-y-1">
                  <div className="py-1 bg-gray-300 rounded-sm skeleton"></div>
                  <div className="w-4/5 py-1 bg-gray-300 rounded-sm skeleton"></div>
                </div>
              </div>

              <div>
                <div className="space-y-2">
                  <div className="py-1 bg-gray-300 rounded-sm skeleton"></div>
                  <div className="py-1 bg-gray-300 rounded-sm skeleton"></div>
                  <div className="py-1 bg-gray-300 rounded-sm skeleton"></div>
                  <div className="py-1 bg-gray-300 rounded-sm skeleton"></div>
                  <div className="w-3/5 py-1 bg-gray-300 skeleton"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopLoading;
