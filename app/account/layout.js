import AuthProvider from "@/lib/store/auth-provider";

export const metadata = {
  title: "Account - Bstore",
  robots: "noindex",
};

const RootAdminLayout = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default RootAdminLayout;
