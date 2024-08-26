import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-black">
      <div className="container mx-auto bg-black text-white">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
