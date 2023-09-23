"use client";

import { AnimatePresence } from "framer-motion";
import GlobalCartItemsProvider from "../contexts/default/cartitems-context";
import FavoriteItemProvider from "../contexts/default/favorite-items-context";
import NextAuthProvider from "./NextAuthProvider";
import Navbar from "@/components/Layouts/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Layouts/Footer";
import SelectedItemDisplay from "@/components/UI/Defaults/SelectedItemDisplay";

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
