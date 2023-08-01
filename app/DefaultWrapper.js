"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/NextAuthProvider";
import { SessionProvider } from "next-auth/react";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <NextAuthProvider>
        <Navbar />
      </NextAuthProvider>
      <SessionProvider>{children}</SessionProvider>
      <Footer />
    </>
  );
};

export default DefaultWrapper;
