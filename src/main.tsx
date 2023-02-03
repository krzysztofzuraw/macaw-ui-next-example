import React from "react";
import { render } from "react-dom";

import { ThemeProvider as LegacyThemeProvider } from "@saleor/macaw-ui";
import { ThemeProvider } from "@saleor/macaw-ui/next";
import "@saleor/macaw-ui/next/style";

import { App } from "./App";

render(
  <React.StrictMode>
    <LegacyThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LegacyThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
