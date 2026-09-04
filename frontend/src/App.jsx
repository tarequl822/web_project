import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


// admin 
import Dashbord from "./pages/admin/Home";
import Users from "./pages/admin/Users";
import Dietitians from "./pages/admin/Dietitians";
import Reports from "./pages/admin/Reports";
import Placeholder from "./pages/admin/Placeholder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/home" element={<Dashbord />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/dietitians" element={<Dietitians />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route
          path="/admin/foods"
          element={
            <Placeholder
              title="Foods"
              description="Food catalog management is ready for your clinical data."
            />
          }
        />
        <Route
          path="/admin/settings"
          element={
            <Placeholder
              title="Settings"
              description="System preferences and administrator settings."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
