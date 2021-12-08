import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";

import App from "./components/App/App";
import "@shopify/polaris/build/esm/styles.css";

ReactDOM.render(
  <AppProvider i18n={en}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
