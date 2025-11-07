import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin_css/login-register.css"; // your scoped CSS
import { FaEnvelope, FaLock, FaUser, FaUserTag, FaSpinner } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword)
      return setError("Passwords do not match!");

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        role: "guest",
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="background-animation">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="container">
        <div className="register-card">
          <div className="register-header">
            <h2>Create Your Account</h2>
            <p>Register to get started with your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="error-msg">{error}</p>}

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className="icon" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter your phone number"
                required
                value={formData.contact}
                onChange={handleChange}
              />
              <FaUserTag className="icon" />
            </div>

            <button type="submit" className="btn pulse" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="spin" /> Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="form-footer">
              <p>
                Already have an account? <a href="/login">Login here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
