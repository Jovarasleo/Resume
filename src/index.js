import React from "react";
import ReactDOM from "react-dom";
import "reset-css";

import "./index.css";
import App from "./App/App";
import { ThemeProvider } from "./App/context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
