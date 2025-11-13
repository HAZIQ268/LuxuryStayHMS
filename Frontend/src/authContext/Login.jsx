import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin_css/login-register.css";
import { FaEnvelope, FaLock, FaUserTag, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { email, password, role } = formData;
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role },
        { headers: { "Content-Type": "application/json" } }
      );

      login(res.data);

      const userRole = res.data.user.role || role;

      if (userRole === "admin") navigate("/admin/dashboard");
      else if (userRole === "manager") navigate("/manager/dashboard");
      else if (userRole === "receptionist") navigate("/reception/dashboard");
      else if (userRole === "housekeeping") navigate("/housekeeping/dashboard");
      else navigate("/user/dashboard");
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
                {/* <FaLock className="icon" /> */}
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="eye-icon" onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Role */}
            <div className="form-group">
              <label>Role</label>
              <div className="input-wrapper">
                <FaUserTag className="role-icon" />
                <select name="role" required value={formData.role} onChange={handleChange}>
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="admin">Administrator</option>
                  <option value="manager">Manager</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            {/* Submit */}
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
                Don’t have an account? <a href="/register">User Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
