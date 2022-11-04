import { ReactNode } from "react";

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
