import { render, RenderOptions } from "@testing-library/react";

import { RootState, RootStore, setupStore } from "../src/core/store";
import React, { PropsWithChildren, ReactElement } from "react";
import { PreloadedState } from "@reduxjs/toolkit";

import Wrappers from "../src/core/wrappers/wrappers";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: RootStore;
}

export function renderWithProviders(
  ui: ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) {
  const RootProvidersWrapper = ({ children }: PropsWithChildren) => {
    return <Wrappers>{children}</Wrappers>;
  };

  return {
    store,
    ...render(ui, { wrapper: RootProvidersWrapper, ...renderOptions }),
  };
}

export * from "@testing-library/react";
export { renderWithProviders as render };
