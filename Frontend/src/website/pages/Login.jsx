import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Logged in (mock)");
    navigate("/");
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h3 className="mb-3">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input name="password" value={form.password} onChange={handleChange} type="password" className="form-control" required />
                </div>
                <button className="btn btn-primary w-100">Login</button>
              </form>
              <div className="mt-3 text-center small">
                <a href="/register">Create an account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
