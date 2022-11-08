"use client";

import { ProvidersWrapper } from "@wrappers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
