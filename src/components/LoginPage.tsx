import React from "react";
import "../App.css";

const LoginPage: React.FC = () => {
  return (
    <div className="LoginPage">
      <div className="login-page-header">
        <h3 className="login-page-title">Login Page</h3>
        <h5 className="login-page-subtitle">Who is using the app?</h5>
      </div>

      {/* login form */}
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input type="text" id="username" className="login-input" />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input type="password" id="password" className="login-input" />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
