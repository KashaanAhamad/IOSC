import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Team from "./Home/Team/Team.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AIPage from "./Department/AI-ML/AIPage.jsx";
import WebD from "./Department/WebD/WebD.jsx";
import IOT from "./Department/IOT/IOT.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
        <Route path="/AI/ML" element={<AIPage />} />
        <Route path="/WebD" element={<WebD />} />
        <Route path="/IOT" element={<IOT />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
