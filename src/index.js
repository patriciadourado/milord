import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Colors />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
