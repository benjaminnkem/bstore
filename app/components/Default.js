import "./styles/Default.css";
import "remixicon/fonts/remixicon.css";

const DefaultProducts = () => {
  return (
    <>
      <div id="def-p">
        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="relative flex h-[30rem] items-center text-white" id="def-con">
            <div>
              <div>
                <h1 className="text-5xl font-bold">Happy Shopping (😊)</h1>
                <p className="max-w-3xl mx-auto mt-4 font-light leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ratione deleniti vitae animi
                  nemo libero! Iste voluptates amet praesentium ipsa? Et error iure ratione eaque numquam quas aliquam
                  voluptatum?
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200px]"></div>
    </>
  );
};

export default DefaultProducts;
