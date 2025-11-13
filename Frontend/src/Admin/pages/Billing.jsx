import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Billing() {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    bill_id: "",
    booking_id: "",
    guest_id: "",
    room_charges: 0,
    services: [],
    total: 0,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBills();
  }, []);

  async function fetchBills() {
    try {
      const res = await api.get("/bills");
      setBills(res.data);
    } catch (err) {
      console.error("Fetch bills error:", err);
    }
  }

  async function createOrUpdateBill(e) {
    e.preventDefault();
    try {
      console.log("Submitting form:", form); 
      if (editingId) {
        await api.put(`/bills/${editingId}`, form);
        alert("Bill updated successfully");
        setEditingId(null);
      } else {
        await api.post("/bills", {
          ...form,
          bill_id: parseInt(form.bill_id || Date.now()),
        });
        alert("Bill created successfully");
      }

      setForm({
        bill_id: "",
        booking_id: "",
        guest_id: "",
        room_charges: 0,
        services: [],
        total: 0,
      });

      fetchBills();
    } catch (err) {
      console.error("Bill submit error:", err);
      alert(editingId ? "Update failed" : "Create failed");
    }
  }

  function handleEdit(bill) {
    setForm({
      bill_id: bill.bill_id,
      booking_id: bill.booking_id,
      guest_id: bill.guest_id,
      room_charges: bill.room_charges,
      services: bill.services || [],
      total: bill.total,
    });
    setEditingId(bill._id);
  }

  async function downloadInvoice(billId) {
    try {
      const res = await api.post(
        `/bills/${billId}/generate-invoice`,
        { emailInvoice: false },
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice_${billId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Invoice download failed:", err);
    }
  }

  async function emailInvoice(billId) {
    try {
      await api.post(`/bills/${billId}/generate-invoice`, {
        emailInvoice: true,
      });
      alert("Invoice sent by email (if configured)");
    } catch (err) {
      console.error("Send invoice failed:", err);
    }
  }

  return (
    <div>
      <h3>Billing</h3>

      <div className="card p-3 mb-3">
        <form className="row g-2" onSubmit={createOrUpdateBill}>
          <input
            required
            className="form-control col"
            placeholder="Bill ID"
            value={form.bill_id}
            onChange={(e) => setForm({ ...form, bill_id: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Booking ID"
            value={form.booking_id}
            onChange={(e) => setForm({ ...form, booking_id: e.target.value })}
          />
          <input
            className="form-control col"
            placeholder="Guest ID"
            value={form.guest_id}
            onChange={(e) => setForm({ ...form, guest_id: e.target.value })}
          />
          <input
            type="number"
            className="form-control col"
            placeholder="Room Charges"
            value={form.room_charges}
            onChange={(e) =>
              setForm({
                ...form,
                room_charges: parseFloat(e.target.value) || 0,
              })
            }
          />
          <input
            type="number"
            className="form-control col"
            placeholder="Total"
            value={form.total}
            onChange={(e) =>
              setForm({ ...form, total: parseFloat(e.target.value) || 0 })
            }
          />
          <div className="col-12">
            <button className="btn btn-primary">
              {editingId ? "Update Bill" : "Create Bill"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    bill_id: "",
                    booking_id: "",
                    guest_id: "",
                    room_charges: 0,
                    services: [],
                    total: 0,
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
            <th>Bill</th>
            <th>Booking</th>
            <th>Guest</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((b) => (
            <tr key={b._id}>
              <td>{b.bill_id}</td>
              <td>{b.booking_id}</td>
              <td>{b.guest_id}</td>
              <td>{b.total}</td>
              <td>{b.payment_status || "Pending"}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => handleEdit(b)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => downloadInvoice(b.bill_id)}
                >
                  Download
                </button>
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => emailInvoice(b.bill_id)}
                >
                  Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
