"use client";
import LoadingIcon from "@/partials/LoadingIcon";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";

export const CustomSessionDataContext = createContext();

const DashboardAuthWrapper = ({ children }) => {
  const { status, data: session } = useSession();
  const [sessionContent, setSessionContent] = useState({});

  useEffect(() => {
    if (status === "authenticated" && session) setSessionContent(session);
  }, [session, status]);

  if (status === "loading")
    return (
      <div className="fixed top-0 left-0 z-50 grid w-full h-full place-content-center">
        <LoadingIcon />
        <p className="text-center">Verifying... Please hold</p>
      </div>
    );

  if (status === "unauthenticated")
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="max-w-3xl py-5 mx-auto text-center md:py-0 text-slate-100">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl">It seems like you are not logged in 🤨.</h1>
            <p className="text-base opacity-80 md:text-lg">Don&apos;t worry 😏, choose an action below.</p>
          </div>

          <div className="mt-4 space-x-2">
            <Link href={"/"} passHref>
              <button className="px-2 py-1 mt-2 duration-200 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-primaryDark">
                Go Home <i className="ri-home-3-line"></i>
              </button>
            </Link>
            <Link href={"/account/login"} passHref>
              <button className="px-2 py-1 mt-2 duration-200 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-primaryDark">
                Login <i className="ri-login-box-line"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );

  if (status === "authenticated") {
    return (
      <>
        <CustomSessionDataContext.Provider value={sessionContent}>
          <AnimatePresence>{children}</AnimatePresence>
        </CustomSessionDataContext.Provider>
      </>
    );
  }
};

export default DashboardAuthWrapper;
