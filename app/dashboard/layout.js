import { SessionProvider } from "next-auth/react";

const DashboardLayout = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <SessionProvider session={session}>{pageProps}</SessionProvider>
    </>
  );
};

export default DashboardLayout;
