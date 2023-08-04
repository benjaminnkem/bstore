import DefaultWrapper from "../DefaultWrapper";
import "../shop/styles/loading.css";

const ContactPage = () => {
  const loadingElementCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <DefaultWrapper>
        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="flex items-center p-2 space-x-4 overflow-y-auto scroll-smooth horizontal-cat">
            {["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""].map((item, idx) => (
              <div key={idx}>
                <div className="px-3 w-20 h-6 py-1 rounded-lg skeleton text-sm duration-200 dark:hover:bg-[#2d2d2d] dark:bg-[#212121] bg-white hover:bg-[#f6f6f6]"></div>
              </div>
            ))}
          </div>

          <div className="grid items-center grid-cols-1 gap-8 my-6 mb-3 sm:grid-cols-2 md:grid-cols-3 justify-evenly def-p">
            {loadingElementCount.map((element) => (
              <div className="p-4 space-y-4 bg-white rounded-lg dark:bg-[#212121]" key={element}>
                <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 4fr" }}>
                  <div className="w-16 h-16 bg-white rounded-full skeleton"></div>
                  <div className="space-y-1">
                    <div className="py-1 bg-white rounded-sm skeleton"></div>
                    <div className="w-4/5 py-1 bg-white rounded-sm skeleton"></div>
                  </div>
                </div>

                <div>
                  <div className="space-y-2">
                    <div className="py-1 bg-white rounded-sm skeleton"></div>
                    <div className="py-1 bg-white rounded-sm skeleton"></div>
                    <div className="py-1 bg-white rounded-sm skeleton"></div>
                    <div className="py-1 bg-white rounded-sm skeleton"></div>
                    <div className="w-3/5 py-1 bg-white skeleton"></div>
                  </div>

                  <div className="grid w-3/5 grid-cols-2 mt-4 space-x-2">
                    <div className="py-4 bg-white rounded-md skeleton"></div>
                    <div className="py-4 bg-white rounded-md skeleton"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DefaultWrapper>
    </>
  );
};

export default ContactPage;
