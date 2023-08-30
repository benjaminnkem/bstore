"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "./context/GlobalCartItems";
import SelectedItemDisplay from "./components/SelectedItemDisplay";
import FavoriteItemProvider from "./context/smaller__/FavoriteManager";
import { AnimatePresence } from "framer-motion";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <GlobalCartItemsProvider>
          <FavoriteItemProvider>
            <AnimatePresence mode="wait">
              <Navbar />
              <SessionProvider>{children}</SessionProvider>
              <Footer />
            </AnimatePresence>
            <SelectedItemDisplay />
          </FavoriteItemProvider>
        </GlobalCartItemsProvider>
      </NextAuthProvider>
    </>
  );
};

export default DefaultWrapper;
