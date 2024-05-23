import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import Payments from "./Components/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/Payments",
    element: <Payments></Payments>,
  },
]);
export default router;
