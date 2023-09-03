import NextAuthProvider from "../../utils/providers/NextAuthProvider";

export const metadata = {
  title: "Bstore - Administrator's page",
  robots: "noindex",
};

const RootAdminLayout = ({ children }) => {
  return (
    <>
      <NextAuthProvider>{children}</NextAuthProvider>
    </>
  );
};

export default RootAdminLayout;
