import "./App.css";
import React from "react";
import Contact from "./pages/contact";
import About from "./pages/about";
import Messaging from "./pages/message";
import Notification from "./pages/notification";
import UserProfile from "./Components/accounts";
import ChatRoom from "./Components/chatroom";


import Register from "./Components/LogIn/Register";
import LogIn from "./Components/LogIn/LogIn";
import LogIn2 from "./Components/LogIn/LogIn2";
import Register2 from "./Components/LogIn/Register2";

function App() {
  return (
    <div>
      {/* <About></About>*/}
      {/*<SignUp></SignUp>*/}
      {/*<UserProfile></UserProfile> */}
      {/*<ChatRoom></ChatRoom> */}
      {/* <Notification></Notification>*/}
      <ChatRoom></ChatRoom>
    </div>
  );
}
export default App;
