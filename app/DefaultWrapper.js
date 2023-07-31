"use client";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <NextAuthProvider>
          <Navbar />
        </NextAuthProvider>
        <SessionProvider>{children}</SessionProvider>
        <Footer />
      </div>
    </>
  );
};

export default DefaultWrapper;
