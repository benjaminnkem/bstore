import "../styles/create.css";
import CreateType from "../../../components/UI/Dashboard/Others/CreateType";
import CreationContextProvider from "../../../lib/contexts/dashboard/create-dashboard-context";
import RecentProductsCreated from "./components/RecentlyCreated";
import CategoryCreation from "../../../components/UI/Dashboard/Create/Category/CategoryCreation";
import ProductCreation from "@/components/UI/Dashboard/Product";

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
