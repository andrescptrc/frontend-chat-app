"use client";

import { ReactNode } from "react";

import { ProvidersWrapper } from "@wrappers";
import "@styles/globals.css";

const RootLayout = ({ children }: TRootLayout) => {
  return (
    <html>
      <head></head>
      <body className="font-display">
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
};

type TRootLayout = {
  children: ReactNode;
};

export default RootLayout;
