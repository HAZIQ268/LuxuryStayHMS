import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    room_id: "",
    type: "Standard",
    price: 0,
    status: "available",
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  async function fetchRooms() {
    try {
      const res = await api.get("/rooms");
      setRooms(res.data);
    } catch (e) {
      alert("Error fetching rooms", e);
    }
  }

  async function addRoom(e) {
    e.preventDefault();
    try {
      await api.post("/rooms", form);
      setForm({
        room_id: "",
        type: "Standard",
        price: 0,
        status: "available",
      });
      fetchRooms();
    } catch (err) {
      alert(err?.response?.data?.message || "Add room failed");
    }
  }

  async function deleteRoom(id) {
    if (!window.confirm("Delete room?")) return;
    try {
      await api.delete(`/rooms/${id}`);
      fetchRooms();
    } catch {
      alert("Delete failed");
    }
  }

  return (
    <div>
      <h3>Rooms</h3>
      <div className="card p-3 mb-3">
        <form className="row g-2" onSubmit={addRoom}>
          <input
            required
            className="form-control col"
            placeholder="Room number (int)"
            value={form.room_id}
            onChange={(e) =>
              setForm({ ...form, room_id: parseInt(e.target.value) || 0 })
            }
          />
          <input
            className="form-control col"
            placeholder="Type"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          <input
            type="number"
            className="form-control col"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: parseFloat(e.target.value) || 0 })
            }
          />
          <select
            className="form-select col"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="available">available</option>
            <option value="occupied">occupied</option>
            <option value="cleaning">cleaning</option>
            <option value="maintenance">maintenance</option>
          </select>
          <div className="col-12">
            <button className="btn btn-primary">Add Room</button>
          </div>
        </form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((r) => (
            <tr key={r._id}>
              <td>{r.room_id}</td>
              <td>{r.type}</td>
              <td>{r.price}</td>
              <td>{r.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteRoom(r._id)}
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
