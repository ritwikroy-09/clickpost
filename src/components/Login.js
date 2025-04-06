import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      // Send POST request to the backend
      await axios.post("https://backendclickpost.onrender.com/api/login", {
        email,
        password,
      });

      // Redirect to MainFeed
      navigate("/MainFeed");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Dashboard Login</h1>
        <div className="login-icon">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="email"
              name="email"
              placeholder="USERNAME"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password">Forgot password?</p>
        <div className="login-links">
          <Link to="/" className="back-to-home">
            Back to Home
          </Link>
          <Link to="/register" className="not-registered">
            Not Registered? Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
