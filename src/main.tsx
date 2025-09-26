import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./provider/theme.provider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >

      <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.StrictMode>
);