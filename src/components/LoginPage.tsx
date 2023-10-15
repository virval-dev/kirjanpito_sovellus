import React, { useState } from "react";
import "../App.css";

// Typing interfaces
interface LoginPageProps {
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface User {
  userId: number;
  username: string;
  password: string;
  isLogged: boolean;
}

// Define the component
const LoginPage: React.FC<LoginPageProps> = ({}) => {
  // Define state variables
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]); // Change type to User[] and initialize with empty array

  // Define functions
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers((users: User[]) => {
      return [
        ...users,
        {
          userId: userId + 1,
          username: username,
          password: password,
          isLogged: true,
        },
      ];
    });
  };

  console.log(users);
  return (
    <div className="LoginPage">
      <div className="login-page-header">
        <h3 className="login-page-title">Login Page</h3>
        <h5 className="login-page-subtitle">Who is using the app?</h5>
      </div>

      {/* login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={handleUsername}
            className="login-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            onChange={handlePassword}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
