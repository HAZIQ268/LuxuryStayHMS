import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({
    feedback_id: "",
    guest_id: "",
    rating: 5,
    comment: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  async function fetchFeedbacks() {
    try {
      const res = await api.get("/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      alert("Error fetching feedbacks");
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/feedback/${editId}`, form);
        setEditId(null);
      } else {
        await api.post("/feedback", {
          ...form,
          feedback_id: parseInt(form.feedback_id || Date.now()),
        });
      }
      setForm({ feedback_id: "", guest_id: "", rating: 5, comment: "" });
      fetchFeedbacks();
    } catch (err) {
      alert("Error saving feedback");
      console.error(err);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete feedback?")) return;
    try {
      await api.delete(`/feedback/${id}`);
      fetchFeedbacks();
    } catch {
      alert("Error deleting feedback");
    }
  }

  function handleEdit(item) {
    setEditId(item._id);
    setForm({
      feedback_id: item.feedback_id,
      guest_id: item.guest_id,
      rating: item.rating,
      comment: item.comment,
    });
  }

  return (
    <div>
      <h3>Feedback</h3>

      <div className="card p-3 mb-3">
        <form className="row g-2" onSubmit={handleSubmit}>
          <input
            className="form-control col"
            placeholder="Feedback ID"
            value={form.feedback_id}
            onChange={(e) => setForm({ ...form, feedback_id: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Guest ID"
            value={form.guest_id}
            onChange={(e) => setForm({ ...form, guest_id: e.target.value })}
          />
          <select
            className="form-select col"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <input
            className="form-control col"
            placeholder="Comment"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
          <div className="col-12">
            <button className="btn btn-primary">{editId ? "Update" : "Submit"}</button>
            {editId && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setEditId(null);
                  setForm({ feedback_id: "", guest_id: "", rating: 5, comment: "" });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f) => (
            <tr key={f._id}>
              <td>{f.feedback_id}</td>
              <td>{f.guest_id}</td>
              <td>{f.rating}</td>
              <td>{f.comment}</td>
              <td>
                <button
                  className="btn btn-sm btn-info me-2"
                  onClick={() => handleEdit(f)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(f._id)}
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
