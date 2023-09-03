import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const GeneralProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster toastOptions={toastConfig} />
        {children}
      </QueryClientProvider>
    </>
  );
};

export default GeneralProvider;
