import { ReactNode } from "react";

import ReactQueryWrapper from "./react-query";
import ReduxWrapper from "./redux";

const ProvidersWrapper = ({ children }: TProvidersWrapper) => {
  return (
    <ReduxWrapper>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </ReduxWrapper>
  );
};

type TProvidersWrapper = {
  children: ReactNode;
};

export default ProvidersWrapper;
