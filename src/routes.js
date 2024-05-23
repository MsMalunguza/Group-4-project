import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./App.css";
import App from "./App";
import NotificationBell from "./Components/NotificationBell";

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
    path:"/NotificationBell",
    element:<NotificationBell/>
  },
  {
    path:"/NotificationList",
    element:<NotificationList/>
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
export default router;
