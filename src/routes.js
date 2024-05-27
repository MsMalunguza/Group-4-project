import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import UserProfile from "./Components/accounts";
import RegisterTwo from "./Components/RegisterTwo";
import LogInTwo from "./Components/LogInTwo";
import CustomerTicketingForm from "./Components/CustomerTicketingForm";
import Card from "./Components/Card";
import PaymentForm from "./Components/Payments";
import OrderTracking from "./Components/OrderTracking";
import About from "./Components/about";
import Contact from "./Components/contact";
import ChatRoom from "./Components/chatroom";
import Notification from "./Components/notification";
import CartWrapper from "./Components/CartWrapper";
import Catalog from "./Components/catalogue";

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
    path: "/accounts",
    element: <UserProfile></UserProfile>,
  },

  {
    path: "/Register2",
    element: <RegisterTwo></RegisterTwo>,
  },

  {
    path: "/LogIn2",
    element: <LogInTwo></LogInTwo>,
  },

  {
    path: "/CustomerTicketingForm",
    element: <CustomerTicketingForm></CustomerTicketingForm>,
  },

  {
    path: "/Card",
    element: <Card></Card>,
  },

  {
    path: "/Payments",
    element: <PaymentForm></PaymentForm>,
  },

  {
    path: "/OrderTracking",
    element: <OrderTracking></OrderTracking>,
  },

  {
    path: "/about",
    element: <About></About>,
  },

  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/chatroom",
    element: <ChatRoom></ChatRoom>,
  },
  {
    path: "/notification",
    element: <Notification></Notification>,
  },
  {
    path: "/CartWrapper",
    element: <CartWrapper></CartWrapper>,
  },
  {
    path: "/catalogue",
    element: <Catalog></Catalog>,
  },
]);
export default router;
