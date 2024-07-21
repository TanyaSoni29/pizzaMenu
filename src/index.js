import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// In Strict Mode it render all component twice to ensure the bugs will not be present and React will check if we are using outDated version of react

// before react 18
// import ReactDOM from "react-dom";
// React.render(<App />, document.getElementById('root')) 
