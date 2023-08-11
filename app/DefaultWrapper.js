"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "./context/GlobalCartItems";
import SelectedItemDisplay from "./components/SelectedItemDisplay";
import FavoriteItemProvider from "./context/smaller__/FavoriteManager";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <GlobalCartItemsProvider>
          <FavoriteItemProvider>
            <Navbar />
            <SessionProvider>{children}</SessionProvider>
            <SelectedItemDisplay />
          </FavoriteItemProvider>
        </GlobalCartItemsProvider>
      </NextAuthProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
