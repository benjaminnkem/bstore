"use client";

import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";

const DefaultWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultWrapper;
