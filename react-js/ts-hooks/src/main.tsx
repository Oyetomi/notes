import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Counter from "./Counter.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Counter>{(num: number) => <>current count: {num}</>}</Counter>
  </React.StrictMode>
);
