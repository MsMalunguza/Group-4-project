import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./App.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
export default router;
