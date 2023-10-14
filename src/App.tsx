import React, { useState } from "react";
import "./App.css";

import LoginPage from "./components/LoginPage.tsx";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const [users, setUsers] = useState<
    { userId: number; username: string; password: string }[]
  >([]);
  const [message, setMessage] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { userId: userId + 1, username: username, password: password },
      ];
    });
  };
  console.log(users);
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
