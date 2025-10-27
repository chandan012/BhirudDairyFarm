import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/pages/index.css";
import App from "@/react-app/pages/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
