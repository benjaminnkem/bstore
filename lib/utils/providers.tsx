"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ToastOptions, Toaster } from "react-hot-toast";
import GlobalCartItemsProvider from "../contexts/default/cartitems-context";
import FavoriteItemProvider from "../contexts/default/favorite-items-context";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import SelectedItemDisplay from "@/components/UI/Defaults/SelectedItemDisplay";
import AuthProvider from "./auth-provider";
import SidebarProvider from "../contexts/dashboard/sidebar-context";

export default function Providers({ children }) {
  const [client] = useState(new QueryClient());

  // Global configuration for react-hot-toast
  const toastConfig: ToastOptions = {
    position: "top-center",
    duration: 3000,
    style: {
      minWidth: "200px",
    },

    // success: {
    //   icon: "👍",
    // },

    // error: {
    //   icon: "❌",
    // },

    // loading: {
    //   icon: "⏳",
    //   duration: Infinity,
    // },
  };

  return (
    <>
      <QueryClientProvider client={client}>
        <SessionProvider>
          <AuthProvider>
            <AnimatePresence>
              <SidebarProvider>
                <GlobalCartItemsProvider>
                  <FavoriteItemProvider>
                    <Toaster toastOptions={toastConfig} />
                    {children}
                    <SelectedItemDisplay />
                    <ReactQueryDevtools initialIsOpen={false} />
                  </FavoriteItemProvider>
                </GlobalCartItemsProvider>
              </SidebarProvider>
            </AnimatePresence>
          </AuthProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
