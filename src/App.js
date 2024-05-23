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


import Register2 from "./Components/LogIn/Register2";
import ticketings from "./Components/ticketing"; 

function App() {
  return (
    <div>
      { <Register2></Register2>}
     <ticketing></ticketing>
      
    </div>
  );
}

export default App;
