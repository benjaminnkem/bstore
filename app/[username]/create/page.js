import DashboardLayout from "../layout";

export const metadata = {
  title: "Create New Product",
};

// for authorized users
const CreateProduct = () => {
  return (
    <>
      <DashboardLayout>
        <h1>Create new product</h1>
      </DashboardLayout>
    </>
  );
};

export default CreateProduct;
