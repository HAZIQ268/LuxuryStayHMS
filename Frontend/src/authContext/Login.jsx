import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin_css/login-register.css";
import { FaEnvelope, FaLock, FaUserTag, FaSpinner } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert(`Login successful! Welcome ${res.data.user.name}`);
      navigate("/admin/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
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
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <p className="error-msg">{error}</p>}

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
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="admin">Administrator</option>
                <option value="manager">Manager</option>
                <option value="receptionist">Receptionist</option>
                <option value="housekeeping">Housekeeping</option>
                <option value="guest">Guest</option>
              </select>
              <FaUserTag className="icon" />
            </div>

            <button type="submit" className="btn pulse" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="spin" /> Authenticating...
                </>
              ) : (
                "Login to Dashboard"
              )}
            </button>

            <div className="form-footer">
              <p>
                Don’t have an account?{" "}
                <a href="/register">Register as Guest</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
