import { AppProps } from "next/app";

import Wrappers from "src/core/wrappers/wrappers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrappers>
      <Component {...pageProps} />
    </Wrappers>
  );
};

export default MyApp;
