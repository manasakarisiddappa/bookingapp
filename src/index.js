import React from "react";
import store from "./Slices/appStore";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AlertProvider } from "./context/alert-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider>
        <Router>
          <App />
        </Router>
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
