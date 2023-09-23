import CategoryCreation from "@/components/UI/Dashboard/Category/CategoryCreation";
import CreateType from "@/components/UI/Dashboard/Others/CreateType";
import RecentProductsCreated from "@/components/UI/Dashboard/Others/RecentlyCreated";
import ProductCreation from "@/components/UI/Dashboard/Product";
import CreationContextProvider from "@/lib/contexts/dashboard/create-dashboard-context";

export const metadata = {
  title: "BDashboard - Create",
};

const CreateNew = () => {
  return (
    <>
      <div className="grid gap-6 p-4 mt-2 create-con">
        <CreationContextProvider>
          <div
            style={{ gridTemplateColumns: "2fr 5fr" }}
            className="lg:gap-10 md:gap-6 gap-4 space-y-10 md:space-y-0 md:grid"
          >
            <div className="space-y-4 flex md:flex-col flex-col-reverse">
              <CreateType />
              <RecentProductsCreated />
            </div>

            {/* Renders conditionally in the component */}
            <ProductCreation />
            <CategoryCreation />
          </div>
        </CreationContextProvider>
      </div>
    </>
  );
};

export default CreateNew;
