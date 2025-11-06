import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    booking_id: "",
    guest_id: "",
    room_id: "",
    check_in: "",
    check_out: "",
    status: "reserved",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const res = await api.get("/bookings");
      setBookings(res.data);
    } catch {
      alert("Fetch error");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/bookings/${editingId}`, form);
        setEditingId(null);
      } else {
        await api.post("/bookings", {
          ...form,
          booking_id: parseInt(form.booking_id || Date.now()),
          room_id: form.room_id,
        });
      }
      setForm({
        booking_id: "",
        guest_id: "",
        room_id: "",
        check_in: "",
        check_out: "",
        status: "reserved",
      });
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Operation failed");
    }
  }

  function handleEdit(b) {
    setEditingId(b._id);
    setForm({
      booking_id: b.booking_id,
      guest_id: b.guest_id,
      room_id: b.room_id,
      check_in: b.check_in?.split("T")[0],
      check_out: b.check_out?.split("T")[0],
      status: b.status,
    });
  }

  async function deleteBooking(id) {
    if (!window.confirm("Delete booking?")) return;
    try {
      await api.delete(`/bookings/${id}`);
      fetchBookings();
    } catch {
      alert("Delete failed");
    }
  }

  return (
    <div>
      <h3 className="mb-3">Bookings</h3>

      <div className="card p-3 mb-4">
        <form className="row g-2" onSubmit={handleSubmit}>
          <input
            className="form-control col"
            placeholder="Booking ID"
            value={form.booking_id}
            onChange={(e) => setForm({ ...form, booking_id: e.target.value })}
            required
          />
          <input
            className="form-control col"
            placeholder="Guest ID"
            value={form.guest_id}
            onChange={(e) => setForm({ ...form, guest_id: e.target.value })}
            required
          />
          <input
            className="form-control col"
            placeholder="Room ID"
            value={form.room_id}
            onChange={(e) => setForm({ ...form, room_id: e.target.value })}
            required
          />
          <input
            type="date"
            className="form-control col"
            value={form.check_in}
            onChange={(e) => setForm({ ...form, check_in: e.target.value })}
          />
          <input
            type="date"
            className="form-control col"
            value={form.check_out}
            onChange={(e) => setForm({ ...form, check_out: e.target.value })}
          />
          <select
            className="form-select col"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="reserved">Reserved</option>
            <option value="checked_in">Checked In</option>
            <option value="checked_out">Checked Out</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div className="col-12 text-end">
            <button className="btn btn-primary">
              {editingId ? "Update Booking" : "Create Booking"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    booking_id: "",
                    guest_id: "",
                    room_id: "",
                    check_in: "",
                    check_out: "",
                    status: "reserved",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Booking</th>
            <th>Guest</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b.booking_id}</td>
              <td>{b.guest_id}</td>
              <td>{b.room_id}</td>
              <td>{b.check_in ? new Date(b.check_in).toLocaleDateString() : "-"}</td>
              <td>{b.check_out ? new Date(b.check_out).toLocaleDateString() : "-"}</td>
              <td>{b.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(b)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteBooking(b._id)}
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
