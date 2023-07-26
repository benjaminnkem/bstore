"use client";
import LoadingIcon from "@/partials/LoadingIcon";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardAuthWrapper = ({ children }) => {
  const { status } = useSession();

  if (status === "loading")
    return (
      <div className="fixed z-50 top-0 left-0 w-full h-full grid place-content-center">
        <LoadingIcon />
        <p className="text-center">Verifying... Please hold</p>
      </div>
    );

  if (status === "unauthenticated")
    return (
      <div className="fixed z-50 top-0 left-0 w-full h-full grid place-content-center">
        <div className="text-center p-4 rounded-md bg-[#1f2029] text-slate-100 shadow-md max-w-md mx-auto">
          <h1 className="text-lg">You are not authorized to view this page</h1>
          <div className="space-x-2">
            <Link href={"/"} passHref>
              <button className="mt-2 bg-[#191a23] px-2 py-1 rounded-lg duration-200 border border-transparent hover:border-[#4a4c61] hover:bg-[#22242f]">
                Home <i className="ri-home-3-line"></i>
              </button>
            </Link>
            <Link href={"/admin/login"} passHref>
              <button className="mt-2 bg-[#191a23] px-2 py-1 rounded-lg duration-200 border border-transparent hover:border-[#4a4c61] hover:bg-[#22242f]">
                Login <i className="ri-login-box-line"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );

  if (status === "authenticated") return <>{children}</>;
};

export default DashboardAuthWrapper;
