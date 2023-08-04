"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "./context/GlobalCartItems";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <GlobalCartItemsProvider>
          <Navbar />
          <SessionProvider>{children}</SessionProvider>
        </GlobalCartItemsProvider>
      </NextAuthProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
