import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function ServicesPage() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    service_id: "",
    guest_id: "",
    service_type: "room_service",
    details: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await api.get("/services");
      setList(res.data);
    } catch {
      alert("Error fetching data");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/services/${editId}`, form);
        setEditId(null);
      } else {
        await api.post("/services", {
          ...form,
          service_id: parseInt(form.service_id || Date.now()),
        });
      }
      setForm({ service_id: "", guest_id: "", service_type: "room_service", details: "" });
      fetchData();
    } catch {
      alert("Error saving service");
    }
  }

  async function complete(id) {
    try {
      await api.put(`/services/${id}`, { status: "completed" });
      fetchData();
    } catch {
      alert("Error updating status");
    }
  }

  function edit(s) {
    setForm({
      service_id: s.service_id,
      guest_id: s.guest_id,
      service_type: s.service_type,
      details: s.details,
    });
    setEditId(s._id);
  }

  async function remove(id) {
    if (!window.confirm("Delete this service?")) return;
    try {
      await api.delete(`/services/${id}`);
      fetchData();
    } catch {
      alert("Error deleting service");
    }
  }

  return (
    <div>
      <h3>Services</h3>
      <div className="card p-3 mb-3">
        <form className="row g-2" onSubmit={handleSubmit}>
          <input
            className="form-control col"
            placeholder="Service ID"
            value={form.service_id}
            onChange={(e) => setForm({ ...form, service_id: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Guest ID"
            value={form.guest_id}
            onChange={(e) => setForm({ ...form, guest_id: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Type (laundry/spa/room_service)"
            value={form.service_type}
            onChange={(e) => setForm({ ...form, service_type: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Details"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
          <div className="col-12">
            <button className="btn btn-primary">
              {editId ? "Update Service" : "Create Service"}
            </button>
          </div>
        </form>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest</th>
            <th>Type</th>
            <th>Status</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((s) => (
            <tr key={s._id}>
              <td>{s.service_id}</td>
              <td>{s.guest_id}</td>
              <td>{s.service_type}</td>
              <td>{s.status}</td>
              <td>{s.details}</td>
              <td>
                {s.status !== "completed" && (
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => complete(s._id)}
                  >
                    Complete
                  </button>
                )}
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => edit(s)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remove(s._id)}
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
