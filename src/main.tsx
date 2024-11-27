import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.tsx";
import { AppAuth0Context } from "./contexts/auth0.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppAuth0Context>
      <RouterProvider router={router} />
    </AppAuth0Context>
  </React.StrictMode>
);
