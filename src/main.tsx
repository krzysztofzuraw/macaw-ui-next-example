import React from "react";
import { render } from "react-dom";

import { ThemeProvider } from "@saleor/macaw-ui/next";
import "@saleor/macaw-ui/next/style";

import { App } from "./App";

render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
