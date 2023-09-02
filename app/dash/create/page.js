import "../styles/create.css";
import CreateType from "./components/CreateType";
import CreationContextProvider from "./context/CreateContextProvider";
import ProductCreation from "./components/ProductCreation";
import RecentProductsCreated from "./components/RecentlyCreated";
import CategoryCreation from "./components/CategoryCreation";

export const metadata = {
  title: "BDashboard - Create",
};

const CreateNew = () => {
  return (
    <>
      <div className="grid gap-6 p-4 mt-2 create-con">
        <CreationContextProvider>
          <div className="space-y-4">
            <CreateType />
            <RecentProductsCreated />
          </div>

          {/* Renders conditionally in the component */}
          <ProductCreation />
          <CategoryCreation />
        </CreationContextProvider>
      </div>
    </>
  );
};

export default CreateNew;
