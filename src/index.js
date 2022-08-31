import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LabordeProvider from "./context/LabordeContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LabordeProvider>
      <Router>
        <App />
      </Router>
    </LabordeProvider>
  </React.StrictMode>
);
