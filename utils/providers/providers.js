"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import NextAuthProvider from "@/utils/providers/NextAuthProvider";
import SelectedItemDisplay from "@/app/components/SelectedItemDisplay";
import GlobalCartItemsProvider from "@/app/context/GlobalCartItems";
import FavoriteItemProvider from "@/app/context/smaller__/FavoriteManager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  const [client] = useState(new QueryClient());

  // Global configuration for react-hot-toast
  const toastConfig = {
    position: "top-center",
    duration: 3000,
    style: {
      minWidth: "200px",
    },
    
    success: {
      icon: "👍",
    },
    
    error: {
      icon: "❌",
    },

    loading: {
      icon: "⏳",
      duration: Infinity,
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  };

  return (
    <>
      <QueryClientProvider client={client}>
        <NextAuthProvider>
          <Toaster toastOptions={toastConfig} />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </NextAuthProvider>
      </QueryClientProvider>

      {/* <QueryClientProvider client={client}>
      <NextAuthProvider>
        <GlobalCartItemsProvider>
          <FavoriteItemProvider>
            <AnimatePresence mode="wait">
              <Navbar />
              <SessionProvider>
                <Toaster toastOptions={toastConfig} />
                {children}
              </SessionProvider>
              <Footer />
            </AnimatePresence>
            <ReactQueryDevtools initialIsOpen={false} />
            <SelectedItemDisplay />
          </FavoriteItemProvider>
        </GlobalCartItemsProvider>
      </NextAuthProvider>
    </QueryClientProvider> */}
    </>
  );
}
