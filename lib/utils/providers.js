"use client";

import NextAuthProvider from "@/lib/utils/NextAuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import GlobalCartItemsProvider from "../contexts/default/cartitems-context";
import FavoriteItemProvider from "../contexts/default/favorite-items-context";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import SelectedItemDisplay from "@/components/UI/Defaults/SelectedItemDisplay";

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
          <SessionProvider>
            <AnimatePresence>
              <GlobalCartItemsProvider>
                <FavoriteItemProvider>
                  <Toaster toastOptions={toastConfig} />
                  {children}
                  <SelectedItemDisplay />
                  <ReactQueryDevtools initialIsOpen={false} />
                </FavoriteItemProvider>
              </GlobalCartItemsProvider>
            </AnimatePresence>
          </SessionProvider>
        </NextAuthProvider>
      </QueryClientProvider>
    </>
  );
}
