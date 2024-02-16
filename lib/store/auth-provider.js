"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { create } from "zustand";

const GlobalUserContext = createContext(undefined);

export const useStore = create((set) => ({
  user: null,
  updateUserData: (user) => set((state) => ({ ...state, user })),
}));

const AuthProvider = ({ children }) => {
  const { status, data: session } = useSession();
  const [userData, setUserData] = useState({});

  const state = useStore();

  useEffect(
    () => (setUserData(session ? session : {}), state.updateUserData(session ? session.user : null)),
    [status, session]
  );

  switch (status) {
    case "loading":
      return (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <SyncLoader color="#ea580c" size={20} />
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
  if (!context) throw new Error("useStore must be used in AuthProvider");
  return context;
};

export default AuthProvider;
