"use client";
import Footer from "../../app/components/Footer";
import Navbar from "../../app/components/Navbar";
import NextAuthProvider from "./NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "../../app/context/GlobalCartItems";
import SelectedItemDisplay from "../../app/components/SelectedItemDisplay";
import FavoriteItemProvider from "../../app/context/smaller__/FavoriteManager";
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
