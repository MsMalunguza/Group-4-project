import "./App.css";
import React from "react";

// import { NavLink } from "react-router-dom";

// import "./App.css";
// export const App = () => {
//   return (
//     <div className="flex flex col ww-full bg-red-500 items-start justify-start">
//       <div className="flex flex-row h-10 w-full item-start justify start">
//         Header
//       </div>
//       <div className="flex flex row w-full items h-auto bg grey-200 items start justify"></div>
//       <div>
//         <NavLink to="/home">Go to my home</NavLink>
//         <div />
//         <NavLink to="/login">log in </NavLink>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default App;

import Register from "./Components/LogIn/Register";
import LogIn from "./Components/LogIn/LogIn";
import LogIn2 from "./Components/LogIn/LogIn2";
import Register2 from "./Components/LogIn/Register2";
import Contact from "./pages/contact";
import About from "./pages/about";
import Messaging from "./pages/message";
import Notification from "./pages/notification";
import SignUp from "./Components/Login";
import Login from "./Components/signing";
import UserProfile from "./Components/accounts";

function App() {
  return (
    <div>
      {/* <Register></Register> */}
      {/* <LogIn></LogIn>*/}
      {/*<LogIn2></LogIn2>*/}
      {/*<Register2></Register2> */}
      {/*<Contact></Contact> */}
      {/*<About></About> */}
      {/*<Messaging></Messaging>*/}
      {/*<Notification></Notification>*/}
      {/*<SignUp></SignUp>*/}
      {/*<Login></Login>*/}

      <UserProfile></UserProfile>
      
    

    </div>
  );
}

export default App;
