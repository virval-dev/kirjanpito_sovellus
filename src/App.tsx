import React, { useState } from "react";
import "./App.css";

import LoginPage from "./components/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const App: React.FC = () => {
  // logic
  return (
    <div className="App">
      <h1>Accounting App</h1>
      <div className="component-container">
        <LoginPage
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
