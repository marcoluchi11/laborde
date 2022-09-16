import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LabordeProvider from "./context/LabordeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Admin/Home";
import AddBook from "./components/Admin/AddBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LabordeProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/add" element={<AddBook />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </LabordeProvider>
  </React.StrictMode>
);
