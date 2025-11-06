import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "guest",
    contact: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      alert("Error fetching users",err);
    } 
  }

  async function createUser(e) {
    e.preventDefault();
    try {
      await api.post("/users/register", form);
      setForm({
        name: "",
        email: "",
        password: "",
        role: "guest",
        contact: "",
      });
      fetchUsers();
    } catch (err) {
      alert(err?.response?.data?.message || "Create user error");
    }
  }

  async function deleteUser(id) {
    if (!window.confirm("Delete this user?")) return;
    try {
      await api.delete(`/users/${id}`);
      fetchUsers();
    } catch (err) {
      alert("Delete failed",err);
    }
  }

  return (
    <div>
      <h3>Users</h3>
      <div className="card p-3 mb-3">
        <form onSubmit={createUser} className="row g-2">
          <input
            className="form-control col"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="form-control col"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="form-control col"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <select
            className="form-select col"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="admin">admin</option>
            <option value="manager">manager</option>
            <option value="receptionist">receptionist</option>
            <option value="housekeeping">housekeeping</option>
            <option value="guest">guest</option>
          </select>
          <input
            className="form-control col"
            placeholder="Contact"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
          <div className="col-12">
            <button className="btn btn-primary">Create User</button>
          </div>
        </form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.contact}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
