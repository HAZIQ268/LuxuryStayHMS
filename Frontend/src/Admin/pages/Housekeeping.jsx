import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Housekeeping() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ task_id: "", room_id: "", staff_id: "", date: "", status: "pending", notes: "" });

  useEffect(() => { fetch(); }, []);
  async function fetch() { try { const res = await api.get("/housekeeping"); setTasks(res.data); } catch { alert("Err"); } }

  async function create(e) {
    e.preventDefault();
    try { await api.post("/housekeeping", { ...form, task_id: parseInt(form.task_id || Date.now()) }); setForm({ task_id: "", room_id: "", staff_id: "", date: "", status: "pending", notes: "" }); fetch(); } catch { alert("Err"); }
  }

  async function markDone(id) { try { await api.put(`/housekeeping/${id}`, { status: "completed" }); fetch(); } catch { alert("Err"); } }

  return (
    <div>
      <h3>Housekeeping</h3>
      <div className="card p-3 mb-3">
        <form className="row g-2" onSubmit={create}>
          <input className="form-control col" placeholder="Task ID" value={form.task_id} onChange={e => setForm({ ...form, task_id: e.target.value })} />
          <input className="form-control col" placeholder="Room ID" value={form.room_id} onChange={e => setForm({ ...form, room_id: e.target.value })} />
          <input className="form-control col" placeholder="Staff ID" value={form.staff_id} onChange={e => setForm({ ...form, staff_id: e.target.value })} />
          <input className="form-control col" placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
          <div className="col-12"><button className="btn btn-primary">Add Task</button></div>
        </form>
      </div>

      <table className="table">
        <thead><tr><th>Task</th><th>Room</th><th>Staff</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t._id}>
              <td>{t.task_id}</td><td>{t.room_id}</td><td>{t.staff_id}</td><td>{t.status}</td>
              <td>{t.status !== "completed" && <button className="btn btn-sm btn-success" onClick={() => markDone(t._id)}>Mark Done</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
