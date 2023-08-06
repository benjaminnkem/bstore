"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "./context/GlobalCartItems";
import SelectedItemDisplay from "./components/SelectedItemDisplay";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <GlobalCartItemsProvider>
          <Navbar />
          <SessionProvider>{children}</SessionProvider>
          <SelectedItemDisplay />
        </GlobalCartItemsProvider>
      </NextAuthProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
