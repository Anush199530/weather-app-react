import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <div className="container">
        <Weather />
        <footer>
          This probject is coded by Anush Arutunian and is{" "}
          <a
            href="https://github.com/Anush199530/weather-app-react"
            target="_blank"
            
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
