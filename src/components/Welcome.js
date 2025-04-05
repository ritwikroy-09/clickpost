import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"; // Import CSS for styling

const Welcome = () => {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">Welcome to ClickPost!</h1>
        <p className="landing-message">
          The APP for EVERYONE!
        </p>
        <div className="landing-buttons">
          <Link to="/login" className="landing-button">
            Login
          </Link>
          <Link to="/register" className="landing-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;