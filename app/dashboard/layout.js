import NextAuthProvider from "../components/NextAuthProvider";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NextAuthProvider>{children}</NextAuthProvider>
    </>
  );
};

export default DashboardLayout;
