import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePropaganda from "./pages/GamePropaganda";


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePropaganda />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
