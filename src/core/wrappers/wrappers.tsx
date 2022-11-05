import { ReactNode } from "react";

import ReactQueryWrapper from "./react-query";
import ReduxWrapper from "./redux";

const Wrappers = ({ children }: TWrappers) => {
  return (
    <ReduxWrapper>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </ReduxWrapper>
  );
};

type TWrappers = {
  children: ReactNode;
};

export default Wrappers;
