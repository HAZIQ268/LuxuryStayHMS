import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [editingRoomId, setEditingRoomId] = useState(null);

  const [form, setForm] = useState({
    room_id: "",
    type: "Standard",
    price: 0,
    title: "",
    category: "Luxury",
    description: "",
    capacity: 1,
    status: "available",
    image: null,
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  // FETCH ROOMS
  async function fetchRooms() {
    try {
      const res = await api.get("/rooms");
      setRooms(res.data);
    } catch (e) {
      alert("Error fetching rooms",e);
    }
  }

  // ADD / UPDATE
  async function addRoom(e) {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (editingRoomId) {
        await api.put(`/rooms/${editingRoomId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditingRoomId(null);
      } else {
        await api.post("/rooms", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({
        room_id: "",
        type: "Standard",
        price: 0,
        title: "",
        category: "Luxury",
        description: "",
        capacity: 1,
        status: "available",
        image: null,
      });

      fetchRooms();
    } catch (err) {
      alert("Error saving room",err);
    }
  }

  // DELETE
  async function deleteRoom(id) {
    if (!window.confirm("Delete this room?")) return;

    try {
      await api.delete(`/rooms/${id}`);
      fetchRooms();
    } catch (err) {
      alert("Delete failed",err);
    }
  }

  // EDIT
  function editRoom(room) {
    setEditingRoomId(room._id);
    setForm({
      room_id: room.room_id,
      type: room.type,
      price: room.price,
      title: room.title,
      category: room.category,
      description: room.description,
      capacity: room.capacity,
      status: room.status,
      image: null,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h3 className="mb-3">Rooms</h3>

      {/* FORM */}
      <div className="card p-4 mb-4">
        <form className="row g-3" onSubmit={addRoom}>
          
          {/* Room ID */}
          <div className="col-md-4">
            <label className="form-label">Room Number</label>
            <input
              required
              className="form-control"
              value={form.room_id}
              onChange={(e) =>
                setForm({ ...form, room_id: parseInt(e.target.value) || 0 })
              }
            />
          </div>

          {/* Title */}
          <div className="col-md-4">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          {/* Category */}
          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="Luxury">Luxury</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Standard">Standard</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Type */}
          <div className="col-md-4">
            <label className="form-label">Room Type</label>
            <select
              className="form-select"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="Standard">Standard</option>
              <option value="Master">Master</option>
              <option value="Executive">Executive</option>
              <option value="Royal">Royal</option>
            </select>
          </div>

          {/* Price */}
          <div className="col-md-4">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: parseFloat(e.target.value) || 0 })
              }
            />
          </div>

          {/* Capacity */}
          <div className="col-md-4">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              value={form.capacity}
              onChange={(e) =>
                setForm({ ...form, capacity: parseInt(e.target.value) })
              }
            />
          </div>

          {/* Description */}
          <div className="col-md-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          {/* Image */}
          <div className="col-md-6">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />
          </div>

          {/* Status */}
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="cleaning">Cleaning</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="col-12 mt-2">
            <button className="btn btn-primary">
              <i className="fa fa-save me-1"></i>
              {editingRoomId ? "Update Room" : "Add Room"}
            </button>

            {editingRoomId && (
              <button
                type="button"
                className="btn btn-outline-secondary ms-2"
                onClick={() => {
                  setEditingRoomId(null);
                  setForm({
                    room_id: "",
                    type: "Standard",
                    price: 0,
                    title: "",
                    category: "Luxury",
                    description: "",
                    capacity: 1,
                    status: "available",
                    image: null,
                  });
                }}
              >
                <i className="fa fa-times me-1"></i>Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TABLE */}
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Room</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th style={{ width: "150px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((r) => (
            <tr key={r._id}>
              <td>{r.room_id}</td>

              <td>
                {r.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${r.image}`}
                    width="70"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>{r.title}</td>
              <td>{r.category}</td>
              <td>${r.price}</td>
              <td>{r.status}</td>

              <td>
                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => editRoom(r)}
                >
                  <i className="fa fa-edit"></i>
                </button>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteRoom(r._id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import api from "../../services/api";

// export default function Rooms() {
//   const [rooms, setRooms] = useState([]);
//   const [editingRoomId, setEditingRoomId] = useState(null); // NEW: Track editing room

//   const [form, setForm] = useState({
//     room_id: "",
//     type: "Standard",
//     price: 0,
//     title: "",
//     category: "",
//     description: "",
//     capacity: 1,
//     amenities: "",
//     status: "available",
//     image: null,
//   });

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   // ================= FETCH ROOMS ==================
//   async function fetchRooms() {
//     try {
//       const res = await api.get("/rooms");
//       setRooms(res.data);
//     } catch (e) {
//       console.error(e);
//       alert("Error fetching rooms");
//     }
//   }

//   // ================= ADD / UPDATE ROOM ==================
//   async function addRoom(e) {
//     e.preventDefault();
//     try {
//       const formData = new FormData();

//       Object.keys(form).forEach((key) => {
//         if (key === "amenities") {
//           const arr = form.amenities
//             ? form.amenities.split(",").map((a) => a.trim())
//             : [];
//           formData.append(key, JSON.stringify(arr));
//         } else {
//           formData.append(key, form[key]);
//         }
//       });

//       if (editingRoomId) {
//         // UPDATE existing room
//         await api.put(`/rooms/${editingRoomId}`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setEditingRoomId(null);
//       } else {
//         // ADD new room
//         await api.post("/rooms", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       }

//       setForm({
//         room_id: "",
//         type: "Standard",
//         price: 0,
//         title: "",
//         category: "",
//         description: "",
//         capacity: 1,
//         amenities: "",
//         status: "available",
//         image: null,
//       });

//       fetchRooms();
//     } catch (err) {
//       alert(err?.response?.data?.message || "Operation failed");
//     }
//   }

//   // ================= DELETE ROOM ==================
//   async function deleteRoom(id) {
//     if (!window.confirm("Delete room?")) return;
//     try {
//       await api.delete(`/rooms/${id}`);
//       fetchRooms();
//     } catch (err) {
//       alert("Delete failed",err);
//     }
//   }

//   // ================= EDIT ROOM ==================
//   function editRoom(room) {
//     setEditingRoomId(room._id);
//     setForm({
//       room_id: room.room_id,
//       type: room.type,
//       price: room.price,
//       title: room.title,
//       category: room.category,
//       description: room.description,
//       capacity: room.capacity,
//       amenities: room.amenities ? room.amenities.join(", ") : "",
//       status: room.status,
//       image: null, // Image will only update if a new file is uploaded
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
//   }

//   return (
//     <div>
//       <h3>Rooms</h3>

//       {/* ================= ADD / EDIT FORM =================== */}
//       <div className="card p-3 mb-3">
//         <form className="row g-2" onSubmit={addRoom}>
//           <input
//             required
//             className="form-control col"
//             placeholder="Room number"
//             value={form.room_id}
//             onChange={(e) =>
//               setForm({ ...form, room_id: parseInt(e.target.value) || 0 })
//             }
//           />

//           <input
//             className="form-control col"
//             placeholder="Title"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//           />

//           <input
//             className="form-control col"
//             placeholder="Category"
//             value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })}
//           />

//           <input
//             className="form-control col"
//             placeholder="Type"
//             value={form.type}
//             onChange={(e) => setForm({ ...form, type: e.target.value })}
//           />

//           <input
//             type="number"
//             className="form-control col"
//             placeholder="Price"
//             value={form.price}
//             onChange={(e) =>
//               setForm({ ...form, price: parseFloat(e.target.value) || 0 })
//             }
//           />

//           <input
//             type="number"
//             className="form-control col"
//             placeholder="Capacity"
//             value={form.capacity}
//             onChange={(e) =>
//               setForm({ ...form, capacity: parseInt(e.target.value) })
//             }
//           />

//           <input
//             className="form-control col"
//             placeholder="Amenities (comma separated)"
//             value={form.amenities}
//             onChange={(e) => setForm({ ...form, amenities: e.target.value })}
//           />

//           <textarea
//             className="form-control col-12"
//             placeholder="Description"
//             value={form.description}
//             onChange={(e) => setForm({ ...form, description: e.target.value })}
//           />

//           {/* IMAGE UPLOAD */}
//           <input
//             type="file"
//             className="form-control col"
//             accept="image/*"
//             onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//           />

//           <select
//             className="form-select col"
//             value={form.status}
//             onChange={(e) => setForm({ ...form, status: e.target.value })}
//           >
//             <option value="available">available</option>
//             <option value="occupied">occupied</option>
//             <option value="cleaning">cleaning</option>
//             <option value="maintenance">maintenance</option>
//           </select>

//           <div className="col-12">
//             <button className="btn btn-primary">
//               {editingRoomId ? "Update Room" : "Add Room"}
//             </button>
//             {editingRoomId && (
//               <button
//                 type="button"
//                 className="btn btn-secondary ms-2"
//                 onClick={() => {
//                   setEditingRoomId(null);
//                   setForm({
//                     room_id: "",
//                     type: "Standard",
//                     price: 0,
//                     title: "",
//                     category: "",
//                     description: "",
//                     capacity: 1,
//                     amenities: "",
//                     status: "available",
//                     image: null,
//                   });
//                 }}
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* ================= TABLE =================== */}
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Room</th>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {rooms.map((r) => (
//             <tr key={r._id}>
//               <td>{r.room_id}</td>

//               <td>
//                 {r.image ? (
//                   <img
//                     src={`http://localhost:5000/uploads/${r.image}`}
//                     alt=""
//                     width="70"
//                     height="50"
//                     style={{ objectFit: "cover", borderRadius: "5px" }}
//                   />
//                 ) : (
//                   "No Image"
//                 )}
//               </td>

//               <td>{r.title}</td>
//               <td>{r.category}</td>
//               <td>{r.price}</td>
//               <td>{r.status}</td>

//               <td>
//                 <button
//                   className="btn btn-sm btn-warning me-2"
//                   onClick={() => editRoom(r)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => deleteRoom(r._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
