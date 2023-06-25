import "./loading.css";

const ShopLoading = () => {
  return (
    <>
      <div className="md:max-w-[1024px] w-11/12 mx-auto">
        <div className="grid items-center grid-cols-1 gap-4 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
          <div className="p-10 min-h-[200px] bg-slate-500 rounded-md">
            <div className="grid items-center" style={{ gridTemplateColumns: "1fr 4fr" }}>
              <div className="w-32 h-32 rounded-full bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLoading;
