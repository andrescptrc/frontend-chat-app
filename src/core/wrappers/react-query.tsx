import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

const ReactQueryWrapper = ({ children }: TReactQueryWrapper) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

type TReactQueryWrapper = {
  children: ReactNode;
};

export default ReactQueryWrapper;
