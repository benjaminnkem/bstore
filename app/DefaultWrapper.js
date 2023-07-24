import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
