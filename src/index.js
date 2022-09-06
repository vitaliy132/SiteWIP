import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import New from "./pages/New";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <New />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
