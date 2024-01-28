import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />}>
          <Route path="home" element={<Home user={user} />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};
