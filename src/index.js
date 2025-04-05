import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Get root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App inside BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

