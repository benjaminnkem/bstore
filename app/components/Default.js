const DefaultProducts = () => {
  return (
    <>
      <div id="def-p">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid items-center grid-cols-2 gap-8">
            <div className="h-[.5px] bg-green-600"></div>
            <div className="h-[.5px] bg-green-600"></div>
          </div>

          <div className="grid py-32 space-y-4 text-center place-content-center">
            <h1 className="text-4xl font-semibold">BStore - Covering all items 😎</h1>
            <p className="max-w-3xl mx-auto font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ratione deleniti vitae animi nemo
              libero! Iste voluptates amet praesentium ipsa? Et error iure ratione eaque numquam quas aliquam
              voluptatum?
            </p>
          </div>

          <div className="grid items-center grid-cols-2 gap-8">
            <div className="h-[.5px] bg-green-600"></div>
            <div className="h-[.5px] bg-green-600"></div>
          </div>
        </div>

        <div className="h-[200px]"></div>
      </div>
    </>
  );
};

export default DefaultProducts;
