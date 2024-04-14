// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import ClientsPage from "./components/ClientsPage";
import ClientPage from "./components/ClientPage";
import Frame from "./components/Frame";
import Basement from "./components/Basement";
import Roof from "./components/Roof";
import CalculationPage from "./components/CalculationPage";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/:clientId" element={<ClientPage />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/roof" element={<Roof />} />
        <Route path="/calculation-page" element={<CalculationPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
