import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import Register2 from "./Components/LogIn/Register2";
import LogIn2 from "./Components/LogIn/LogIn2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/register",
    element: <Register2></Register2>,
  },
  {
    path: "/login",
    element: <LogIn2></LogIn2>,
  },
]);
export default router;
