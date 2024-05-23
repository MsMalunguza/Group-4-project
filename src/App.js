import "./App.css";
import React from "react";
import Contact from "./pages/contact";
import About from "./pages/about";
import Messaging from "./pages/message";
import Notification from "./pages/notification";
import UserProfile from "./Components/accounts";
import ChatRoom from "./Components/chatroom";
import OrderTracking from "./Components/OrderTracking";
import LogIn2 from "./Components/LogIn2";
import Register2 from "./Components/Register2";
import CustomerTicketingForm from "./Components/CustomerTicketingForm";
import CartWrapper from "./Components/CartWrapper";

function App() {
  return (
    <div>
      {/* <About></About>*/}
      {/*<SignUp></SignUp>*/}
      {/*<UserProfile></UserProfile> */}
      {/*<ChatRoom></ChatRoom> */}
      {/* <Notification></Notification>*/}
      <CartWrapper></CartWrapper>

    </div>
  );
}
export default App;
