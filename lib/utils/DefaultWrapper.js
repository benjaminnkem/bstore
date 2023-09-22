"use client";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import NextAuthProvider from "./NextAuthProvider";
import { SessionProvider } from "next-auth/react";
import GlobalCartItemsProvider from "../contexts/default/cartitems-context";
import SelectedItemDisplay from "../../app/components/SelectedItemDisplay";
import FavoriteItemProvider from "../contexts/default/favorite-items-context";
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
