import DefaultWrapper from "../../lib/utils/DefaultWrapper";
import "./styles/loading.css";

const ShopLoading = () => {
  return (
    <>
      <DefaultWrapper>
        <div className="md:max-w-[1488px] w-11/12 mx-auto mt-[5.5rem]">
          <div className="flex items-center p-2 space-x-4 overflow-y-auto scroll-smooth horizontal-cat">
            {Array(14)
              .fill()
              .map((_, idx) => (
                <div key={idx}>
                  <div className="px-3 w-20 h-6 py-1 rounded-lg skeleton text-sm duration-200 dark:hover:bg-[#2d2d2d] dark:bg-[#212121] bg-white hover:bg-[#f6f6f6]"></div>
                </div>
              ))}
          </div>

          <div className="gap-4 mx-auto my-8 sm:grid" style={{ gridTemplateColumns: "1.5fr 5fr" }}>
            <div className="sm:sticky self-start p-2 overflow-hidden mb-4 sm:mb-0 bg-white dark:bg-[#212121] duration-200 rounded-lg shadow-lg top-4">
              <div className="w-full h-6 mb-2 rounded-lg skeleton"></div>

              <div className="flex flex-wrap mt-2 space-x-2">
                {Array(23)
                  .fill()
                  .map((_, id) => (
                    <div
                      key={id}
                      className="w-20 h-6 px-3 py-1 my-2 duration-200 border border-gray-500 rounded-lg skeleton"
                    ></div>
                  ))}
              </div>
            </div>

            <div className="grid items-center grid-cols-1 gap-8 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
              {Array(10)
                .fill()
                .map((_, id) => (
                  <div className="p-6 space-y-4 bg-white rounded-lg dark:bg-[#212121]" key={id}>
                    <div className="py-4 text-center">
                      <i className="rounded-md ri-image-line text-9xl skeleton"></i>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="w-3/5 py-1 mx-auto bg-white rounded-md skeleton"></div>
                      <div className="w-2/5 py-1 mx-auto bg-white rounded-md skeleton"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </DefaultWrapper>
    </>
  );
};

export default ShopLoading;
