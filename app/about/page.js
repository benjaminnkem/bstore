export const metadata = {
  title: "About - BStore",
};

const About = () => {
  return (
    <>
      <div>
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="flex justify-center py-20">
            <div className="grid items-center grid-cols-2 gap-4">
              <div>
                <div className="w-64 h-64 mx-auto border-4 border-green-600 rounded-md"></div>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl">BStore</h1>
                <p className="font-light leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero aliquid ab, laudantium delectus
                  vero molestias facere repudiandae expedita fuga ut. Minima vero sed a eaque culpa
                </p>

                <button className="px-4 py-2 mt-2 text-green-700 duration-100 border border-green-600 rounded-tl-2xl rounded-br-2xl hover:bg-green-600 hover:text-green-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
