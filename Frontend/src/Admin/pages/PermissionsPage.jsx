import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";

export default function PermissionsPage() {
  const { user: _user } = useContext(AuthContext); // FIXED: unused var warning remove

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [permissions, setPermissions] = useState([]);

  // Fixed permission list
  const permissionList = [
    "manage_users",
    "manage_rooms",
    "manage_bookings",
    "manage_billing",
    "manage_housekeeping",
    "manage_maintenance",
    "manage_services",
    "view_reports",
    "manage_settings",
  ];

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await api.get("/users/staff");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const selectUser = (u) => {
    setSelectedUser(u);
    setPermissions(u.permissions || []);
  };

  const togglePermission = (perm) => {
    if (permissions.includes(perm)) {
      setPermissions(permissions.filter((p) => p !== perm));
    } else {
      setPermissions([...permissions, perm]);
    }
  };

  const savePermissions = async () => {
    try {
      await api.put(`/users/${selectedUser._id}/permissions`, { permissions });
      alert("Permissions Updated Successfully!");
      loadUsers();
    } catch (err) {
      console.error(err);
      alert("Error updating permissions");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Role-Based Permissions</h3>

      <div className="row">
        {/* Users List */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">Select User</div>
            <div className="card-body" style={{ maxHeight: 400, overflowY: "auto" }}>
              {users.map((u) => (
                <div
                  key={u._id}
                  className={`p-2 mb-2 border rounded d-flex justify-content-between ${
                    selectedUser?._id === u._id ? "bg-light" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => selectUser(u)}
                >
                  <span>{u.name}</span>
                  <span className="badge bg-secondary">{u.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Permission Checkboxes */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              Permissions for: {selectedUser ? selectedUser.name : "—"}
            </div>

            <div className="card-body">
              {!selectedUser ? (
                <p>Select a user...</p>
              ) : (
                <div className="row">
                  {permissionList.map((perm) => (
                    <div className="col-md-6 mb-2" key={perm}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={permissions.includes(perm)}
                          onChange={() => togglePermission(perm)}
                          id={perm}
                        />
                        <label className="form-check-label" htmlFor={perm}>
                          {perm.replace(/_/g, " ").toUpperCase()}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedUser && (
                <button className="btn btn-primary mt-3" onClick={savePermissions}>
                  Save Permissions
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
