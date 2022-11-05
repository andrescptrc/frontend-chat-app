import { ReactNode } from "react";

import "@styles/globals.css";

const RootLayout = ({ children }: TRootLayout) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

type TRootLayout = {
  children: ReactNode;
};

export default RootLayout;
