import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, name, password, confirmPassword } = formData;

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post("https://backendclickpost.onrender.comapi/register", {
        email,
        name,
        password,
      });
      setMessage(response.data.message); // Display success message
      setError(""); // Clear any previous errors

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (err) {
      setMessage("");
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center w-96 p-8 bg-white border rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-sans">Register</h1>

        <form onSubmit={handleRegister} className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-gray-400 outline-none bg-gray-100 mb-2 text-sm"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-gray-400 outline-none bg-gray-100 mb-2 text-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-gray-400 outline-none bg-gray-100 mb-2 text-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-gray-400 outline-none bg-gray-100 mb-4 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all text-sm font-semibold"
          >
            Register
          </button>
        </form>

        {/* Display success or error messages */}
        {message && <p className="text-green-500 text-xs mt-2">{message}</p>}
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
