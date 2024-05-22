import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import Register2 from "./Components/LogIn/Register2";
import LogIn2 from "./Components/LogIn/LogIn2";
import Contact from "./Components/Contact";
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
    path: "/register",
    element: <Register2></Register2>,
  },

  {
    path: "/signin",
    element: <LogIn2></LogIn2>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path:"/Payments",
    element: <Payments></Payments>
  }
]);
export default router;
