'use client'
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <SessionProvider>{children}</SessionProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
