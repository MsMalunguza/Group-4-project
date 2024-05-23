import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ticketing from ' ./Component/Ticketing'; // Ensure the correct path

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path=" /"
         element={<Ticketing />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;