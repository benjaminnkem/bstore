import "../styles/create.css";
import CreateType from "./components/CreateType";
import CreateContextProvider from "./context/CreateContextProvider";
import ProductCreation from "./components/ProductCreation";
import RecentProductsCreated from "./components/RecentlyCreated";

export const metadata = {
  title: "Administrator - Create",
};

const CreateNew = () => {
  return (
    <>
      <div className="create-con grid md:gap-4 gap-12 p-4 mt-2">
        <CreateContextProvider>
          <CreateType />

          <ProductCreation />

          <RecentProductsCreated />
        </CreateContextProvider>
      </div>
    </>
  );
};

export default CreateNew;
