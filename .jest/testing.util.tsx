import { render, RenderOptions } from "@testing-library/react";

import { RootState, RootStore, setupStore } from "../src/core/store";
import React, { PropsWithChildren, ReactElement } from "react";
import { PreloadedState } from "@reduxjs/toolkit";

import ProvidersWrapper from "../src/core/wrappers/providers-wrapper";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: RootStore;
}

export function renderWithProviders(
  ui: ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) {
  const RootProvidersWrapper = ({ children }: PropsWithChildren) => {
    return <ProvidersWrapper>{children}</ProvidersWrapper>;
  };

  return {
    store,
    ...render(ui, { wrapper: RootProvidersWrapper, ...renderOptions }),
  };
}

export * from "@testing-library/react";
export { renderWithProviders as render };
