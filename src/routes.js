
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css"
import App from "./App";
<<<<<<< HEAD
import Payments from "./Components/Payments";
import Contact from "./Components/contact";
import About from "./Components/about";
import ChatRoom from "./Components/chatroom";
import Notification from "./Components/notification";
import Register2 from "./Components/Register2";
import LogIn2 from "./Components/LogIn2";
import OrderTracking from "./Components/OrderTracking";
import UserProfile from "./Components/accounts";

=======
import NotificationBell from "./Components/NotificationBell";
>>>>>>> bsc-inf-14-21

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
<<<<<<< HEAD
    path: "/contact",
    element: <Contact></Contact>
=======
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
>>>>>>> bsc-inf-14-21
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
  {
    path: "OrderTracking",
    element: <OrderTracking></OrderTracking>
  },
  
  {
    path:"accounts",
    element: <UserProfile></UserProfile>
  },

  
]);
export default router;