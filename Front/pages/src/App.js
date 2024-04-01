// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import ClientsPage from "./components/ClientsPage";
import ClientPage from "./components/ClientPage";
import FramePage from "./components/FramePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/:clientId" element={<ClientPage />} />
        <Route path="/frame-page" element={<FramePage />} />
      </Routes>
    </Router>
  );
}

export default App;
