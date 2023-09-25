"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const DashboardAuthWrapper = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    toast.error("You are not logged in", { id: "notlogged" });
    router.push("/account/login");
    return;
  }

  if (status === "authenticated") {
    return (
      <>
        <SessionProvider>{children}</SessionProvider>
      </>
    );
  }
};

export default DashboardAuthWrapper;
