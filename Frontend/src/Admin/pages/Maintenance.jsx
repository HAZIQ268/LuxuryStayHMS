import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Maintenance() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    request_id: "",
    room_id: "",
    reported_by: "",
    issue: "",
    priority: "medium",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await api.get("/maintenance");
      setItems(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Error fetching data");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/maintenance/${editId}`, form);
        setEditId(null);
      } else {
        await api.post("/maintenance", {
          ...form,
          request_id: parseInt(form.request_id || Date.now()),
        });
      }

      setForm({ request_id: "", room_id: "", reported_by: "", issue: "", priority: "medium" });
      fetchItems();
    } catch (err) {
      console.error("Save error:", err);
      alert("Error saving request");
    }
  }

  async function resolveItem(id) {
    try {
      await api.put(`/maintenance/${id}`, { status: "resolved" });
      fetchItems();
    } catch {
      alert("Error resolving");
    }
  }

  async function deleteItem(id) {
    if (!window.confirm("Are you sure to delete?")) return;
    try {
      await api.delete(`/maintenance/${id}`);
      fetchItems();
    } catch {
      alert("Error deleting");
    }
  }

  function startEdit(item) {
    setEditId(item._id);
    setForm({
      request_id: item.request_id,
      room_id: item.room_id,
      reported_by: item.reported_by || "",
      issue: item.issue,
      priority: item.priority,
    });
  }

  return (
    <div className="container mt-4">
      <h3>Maintenance Requests</h3>

      <div className="card p-3 mb-4">
        <form className="row g-2" onSubmit={handleSubmit}>
          <input className="form-control col" placeholder="Request ID" value={form.request_id}
            onChange={(e) => setForm({ ...form, request_id: e.target.value })} />
          <input className="form-control col" placeholder="Room ID" value={form.room_id}
            onChange={(e) => setForm({ ...form, room_id: e.target.value })} />
          <input className="form-control col" placeholder="Reported By (User ID)" value={form.reported_by}
            onChange={(e) => setForm({ ...form, reported_by: e.target.value })} />
          <input className="form-control col" placeholder="Issue" value={form.issue}
            onChange={(e) => setForm({ ...form, issue: e.target.value })} />
          <select className="form-select col" value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="col-12">
            <button className="btn btn-primary">{editId ? "Update" : "Report"}</button>
            {editId && (
              <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditId(null); setForm({ request_id: "", room_id: "", reported_by: "", issue: "", priority: "medium" }); }}>Cancel</button>
            )}
          </div>
        </form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Req</th>
            <th>Room</th>
            <th>Issue</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i._id}>
              <td>{i.request_id}</td>
              <td>{i.room_id}</td>
              <td>{i.issue}</td>
              <td>{i.priority}</td>
              <td>
                <span className={`badge ${i.status === "resolved" ? "bg-success" : "bg-warning"}`}>
                  {i.status}
                </span>
              </td>
              <td>
                {i.status !== "resolved" && (
                  <button className="btn btn-sm btn-success me-2" onClick={() => resolveItem(i._id)}>Resolve</button>
                )}
                <button className="btn btn-sm btn-info me-2" onClick={() => startEdit(i)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteItem(i._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
