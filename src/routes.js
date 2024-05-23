import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ticketing from "./Components/ticketing"; // Correct the component name to start with an uppercase letter

import "./App.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ticketing",
    element: <Ticketing />, // Correct the component name to start with an uppercase letter
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
