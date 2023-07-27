import "../styles/create.css";
import CreateType from "./components/CreateType";
import CreationContextProvider from "./context/CreateContextProvider";
import ProductCreation from "./components/ProductCreation";
import RecentProductsCreated from "./components/RecentlyCreated";
import CategoryCreation from "./components/CategoryCreationPage";

export const metadata = {
  title: "Administrator - Create",
};

const CreateNew = () => {
  return (
    <>
      <div className="create-con grid md:gap-4 gap-6 p-4 mt-2">
        <CreationContextProvider>
          <CreateType />

          {/* Renders conditionally in the component */}
          <ProductCreation />
          <CategoryCreation />

          <RecentProductsCreated />
        </CreationContextProvider>
      </div>
    </>
  );
};

export default CreateNew;
