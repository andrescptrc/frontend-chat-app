import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import store from "@store";

import "@styles/globals.css";

const RootLayout = ({ children }: TRootLayout) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  return (
    <html>
      <head></head>
      <body>
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

type TRootLayout = {
  children: ReactNode;
};

export default RootLayout;
