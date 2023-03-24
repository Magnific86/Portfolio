import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AppProvider } from "./hooks/contextAPI";
import App from "./App";
import "./App.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
