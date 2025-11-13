import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import gsap from "gsap";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const showToast = (message) => {
    if (window?.toast) window.toast(message);
    else alert(message);
  };

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get("/users");
      setUsers(res.data || []);
      gsap.fromTo(
        ".user-row",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4 }
      );
    } catch (err) {
      console.error(err);
      showToast(err?.response?.data?.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Create or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);

    try {
      const payload = { ...form };

      // Remove password from payload if empty during update
      if (editId && !payload.password) delete payload.password;

      if (editId) {
        await api.put(`/users/${editId}`, payload);
        showToast("User updated successfully");
        setEditId(null);
      } else {
        await api.post("/users/register", payload);
        showToast("User created successfully");
      }

      setForm({
        name: "",
        email: "",
        password: "",
        role: "user",
        contact: "",
      });

      fetchUsers();
    } catch (err) {
      console.error(err);
      showToast(err?.response?.data?.message || "Error saving user");
    } finally {
      setCreating(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await api.delete(`/users/${id}`);
      showToast("🗑️ User deleted successfully");
      fetchUsers();
    } catch {
      showToast("Delete failed");
    }
  };

  const editUser = (u) => {
    setForm({
      name: u.name,
      email: u.email,
      password: "",
      role: u.role || "user",
      contact: u.contact || "",
    });
    setEditId(u._id);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3 className="mb-3 fw-bold">Users</h3>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, or role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Form */}
      <div className="card p-3 mb-3 shadow-sm border-0">
        <form onSubmit={handleSubmit} className="row g-2">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required={!editId}
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-control"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="receptionist">Receptionist</option>
              <option value="housekeeping">Housekeeping</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="Contact"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
          </div>

          <div className="col-12 mt-2">
            <button className="btn btn-primary" type="submit" disabled={creating}>
              {creating ? (editId ? "Updating..." : "Creating...") : editId ? "Update User" : "Create User"}
            </button>
            {editId && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() =>
                  setForm({
                    name: "",
                    email: "",
                    password: "",
                    role: "user",
                    contact: "",
                  }) || setEditId(null)
                }
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Users Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Contact</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    Loading users...
                  </td>
                </tr>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr key={u._id} className="user-row">
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className="badge bg-info text-dark text-capitalize">{u.role}</span>
                    </td>
                    <td>{u.contact || "-"}</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-info me-2" onClick={() => editUser(u)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteUser(u._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
