import NextAuthProvider from "../components/NextAuthProvider";

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
