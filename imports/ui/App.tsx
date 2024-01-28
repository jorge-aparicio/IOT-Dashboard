import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

export const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Dashboard />} />
        </Route>
         <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
);
