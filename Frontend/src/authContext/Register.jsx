import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin_css/login-register.css";
import { FaEnvelope, FaUser, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess(res.data.message || "Registration successful!");
      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
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
        <div className="login-card">
          <div className="login-header">
            <h2>Create Your Account</h2>
            <p>Register to access the Hotel Management System</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">{success}</p>}

            {/* Name */}
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <FaUser className="user-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="envelope-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <span className="eye-icon" onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
       
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span className="eye-icon" onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="btn pulse" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="spin" /> Creating Account...
                </>
              ) : (
                "Register"
              )}
            </button>

            <div className="form-footer">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
