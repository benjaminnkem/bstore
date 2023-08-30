"use client";
import LoadingIcon from "@/partials/LoadingIcon";
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
      <div className="fixed z-50 top-0 left-0 w-full h-full grid place-content-center">
        <LoadingIcon />
        <p className="text-center">Verifying... Please hold</p>
      </div>
    );

  if (status === "unauthenticated")
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="md:py-0 py-5 text-slate-100 max-w-3xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="md:text-5xl text-3xl">It seems like you are not logged in 🤨.</h1>
            <p className="opacity-80 md:text-lg text-base">Don&apos;t worry 😏, choose an action below.</p>
          </div>

          <div className="space-x-2 mt-4">
            <Link href={"/"} passHref>
              <button className="mt-2 px-2 py-1 rounded-lg duration-200 border border-orange-500 hover:bg-orange-500 hover:text-primaryDark">
                Go Home <i className="ri-home-3-line"></i>
              </button>
            </Link>
            <Link href={"/account/login"} passHref>
              <button className="mt-2 px-2 py-1 rounded-lg duration-200 border border-orange-500 hover:bg-orange-500 hover:text-primaryDark">
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
        <CustomSessionDataContext.Provider value={sessionContent}>{children}</CustomSessionDataContext.Provider>
      </>
    );
  }
};

export default DashboardAuthWrapper;
