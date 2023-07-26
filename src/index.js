import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Clock(props) {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    root.render(<Clock date={new Date()} />);
  }
  
  setInterval(tick, 1000);

reportWebVitals();
