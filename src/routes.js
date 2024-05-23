
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css"
import App from "./App";
import Payments from "./Components/Payments";
import Contact from "./Components/contact";
import About from "./Components/about";
import ChatRoom from "./Components/chatroom";
import Notification from "./Components/notification";
import Register2 from "./Components/Register2";
import LogIn2 from "./Components/LogIn2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {path: "/home",
  element: <App />,
},

  {
    path: "/Payments",
    element: <Payments></Payments>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/chatRoom",
    element: <ChatRoom></ChatRoom>
  },
  {
    path: "/notification",
    element: <Notification></Notification>
  },
  {
    path: "/Register2",
    element: <Register2></Register2>
  },
  {
    path: "Login2",
    element: <LogIn2></LogIn2>
  },

  
]);
export default router;