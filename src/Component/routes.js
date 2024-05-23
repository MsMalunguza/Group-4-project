import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import App from "./App";
import Ticketing from ' ./Component/Ticketing'; // Corrected path

const Router = createBrowserRouter([
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ticketing />} />
      </Routes>
    </Router>
    );
]);

export default AppRoutes;
