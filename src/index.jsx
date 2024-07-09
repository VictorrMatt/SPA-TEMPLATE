import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./Pages/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
