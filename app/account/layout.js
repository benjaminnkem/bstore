import AuthProvider from "@/lib/store/auth-provider";

export const metadata = {
  title: "Account",
};

const RootAdminLayout = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default RootAdminLayout;
