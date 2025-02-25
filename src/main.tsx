import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TailNews } from "./TailNews";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <TailNews />
      </App>
    </BrowserRouter>
  </StrictMode>
);
