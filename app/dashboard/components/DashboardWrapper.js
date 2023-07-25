"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardWrapper = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "unauthenticated")
    return (
      <div className="fixed z-50 top-0 left-0 w-full h-full grid place-content-center">
        <div className="text-center p-4 rounded-md bg-[#1f2029] text-slate-100 shadow-md">
          <h1>You are not authorized to view this page</h1>
          <Link href={"/admin/login"} passHref>
            <button className="mt-2 bg-[#191a23] px-2 py-1 rounded-lg duration-200 hover:bg-[#22242f]">
              Login <i className="ri-login-box-line"></i>
            </button>
          </Link>
        </div>
      </div>
    );

  if (!session) return null;
  if (session) return <>{children}</>;
};

export default DashboardWrapper;
