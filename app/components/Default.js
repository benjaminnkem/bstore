import "./styles/Default.css";
import "remixicon/fonts/remixicon.css";

const DefaultProducts = () => {
  return (
    <>
      <div className="-mt-20" id="def-p">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid space-y-4 text-center h-[40rem] place-content-center text-white" id="def-con">
            <div className="mt-20">
              <h1 className="text-4xl font-semibold">BStore - Covering all items 😎</h1>
              <p className="max-w-3xl mx-auto mt-4 font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ratione deleniti vitae animi
                nemo libero! Iste voluptates amet praesentium ipsa? Et error iure ratione eaque numquam quas aliquam
                voluptatum?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200px]"></div>
    </>
  );
};

export default DefaultProducts;
