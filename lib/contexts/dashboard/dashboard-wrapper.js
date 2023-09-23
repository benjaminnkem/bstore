"use client";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import { AnimatePresence } from "framer-motion";
import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

export const CustomSessionDataContext = createContext();

const DashboardAuthWrapper = ({ children }) => {
  const { status, data: session } = useSession();
  const [sessionContent, setSessionContent] = useState({});

  useEffect(() => {
    if (status === "unauthenticated" && session) setSessionContent(session);
  }, [session, status]);

  if (status === "loading")
    return (
      <div className="fixed top-0 left-0 z-50 grid w-full h-full place-content-center">
        <HashLoader color="#ea580c" />
        <p className="text-center"></p>
      </div>
    );

  if (status === "unauthenticated")
    return (
      <AnimatePresence>
        <TransitionElement>
          <TransitionStart>
            <div className="flex items-center justify-center w-full h-full fixed top-0 left-0">
              <div className="max-w-3xl py-5 mx-auto text-center md:py-0 text-slate-100">
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl">It seems like you are not logged in.</h1>
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
          </TransitionStart>
        </TransitionElement>
      </AnimatePresence>
    );

  if (status === "authenticated") {
    return (
      <>
        <CustomSessionDataContext.Provider value={sessionContent}>
          <AnimatePresence>
            <SessionProvider>{children}</SessionProvider>
          </AnimatePresence>
        </CustomSessionDataContext.Provider>
      </>
    );
  }
};

export default DashboardAuthWrapper;
