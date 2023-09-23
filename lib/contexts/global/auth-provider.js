"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const GlobalUserContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const { status, data: session } = useSession();
  const [userData, setUserData] = useState({});

  useEffect(() => setUserData(session ? session : {}), [status, session]);

  switch (status) {
    case "loading":
      return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <ClimbingBoxLoader color="#ea580c" size={20} />
        </div>
      );
    case "unauthenticated":
      return <GlobalUserContext.Provider value={userData}>{children}</GlobalUserContext.Provider>;
    case "authenticated":
      return <GlobalUserContext.Provider value={userData}>{children}</GlobalUserContext.Provider>;
    default:
      break;
  }
};

export const useUserData = () => {
  const context = useContext(GlobalUserContext);
  if (!context) throw new Error("useUserData must be used in AuthProvider");
  return context;
};

export default AuthProvider;
