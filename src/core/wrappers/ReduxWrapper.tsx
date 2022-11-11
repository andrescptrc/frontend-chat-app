import { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "@store";

const ReduxWrapper = ({ children }: TReduxWrapper) => {
  return <Provider store={store}>{children}</Provider>;
};

type TReduxWrapper = {
  children: ReactNode;
};

export default ReduxWrapper;
