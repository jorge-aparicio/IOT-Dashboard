import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
export const App = () => {
  const user = useTracker(() => Meteor.user());
  const [isAuthenticated, setIsAuthenticated] = useState(user !== null);
  useEffect(() => {
    const authenticated = user !== null;
    console.log(authenticated);
    console.log(user?.username);
    setIsAuthenticated(authenticated);
  }, [setIsAuthenticated, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route
          path="home"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              username={user?.username || ""}
            />
          }
        />
        <Route
          path="login"
          element={<Login isAuthenticated={isAuthenticated} />}
        />
        <Route path="logout" element={<Logout />} />
        <Route
          path="dashboard"
          element={<Dashboard isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
