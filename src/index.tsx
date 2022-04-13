import React from "react";
import { render } from "react-dom";

import App from "./App";

import ThemeContextWrapper from "./theme/ThemeWrapper";

const rootElement = document.getElementById("root");
render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>,
  rootElement
);
