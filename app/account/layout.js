import NextAuthProvider from "../../lib/utils/NextAuthProvider";

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
