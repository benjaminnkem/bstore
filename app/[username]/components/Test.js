"use client";

import { useSession } from "next-auth/react";
import { useLayoutEffect } from "react";

const DashTest = () => {
  const { data: session, status } = useSession();

  useLayoutEffect(() => {
    console.log(session, status);
  }, [session, status]);

  return null;
};

export default DashTest;
