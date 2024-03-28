import React from "react";
// import logo from './logo.svg';

import "./App.css";
import Router from "./app/router/router";

function App() {
  return (
    <div data-testid="App" id="App" className="App">
      {/* TODO build router guard about auth login; */}

    
      <Router />      
    </div>
  );
}

export default App;
