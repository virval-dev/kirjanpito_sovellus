import React, { useState } from "react";
import "./App.css";

import LoginPage from "./components/LoginPage.tsx";

const App: React.FC = () => {
  // code

  return (
    <div className="App">
      <h1>Accounting App</h1>
      <div className="component-container">
        <LoginPage />
      </div>
    </div>
  );
};

export default App;
