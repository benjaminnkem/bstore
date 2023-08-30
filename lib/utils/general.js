import { Toaster } from "react-hot-toast";

const GeneralProvider = ({ children }) => {
  // Global configuration for react-hot-toast
  const toastConfig = {
    position: "top-center",
    duration: 3000,
    style: {
      minWidth: "200px",
    },
    success: {
      icon: "👍🏽",
    },
    error: {
      icon: "❌",
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
    },
  };

  return (
    <>
      <Toaster toastOptions={toastConfig} />
      {children}
    </>
  );
};

export default GeneralProvider;
