import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    newBookings: 0,
    scheduledRooms: 0,
    checkIns: 0,
    checkOuts: 0,
    availableRooms: 0,
    bookedRooms: { pending: 0, done: 0, finish: 0 },
    reviews: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ USER ROLE READ
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard/stats", {
          withCredentials: true,
        });

        setStats({
          newBookings: res.data.newBookings || 0,
          scheduledRooms: res.data.scheduledRooms || 0,
          checkIns: res.data.checkIns || 0,
          checkOuts: res.data.checkOuts || 0,
          availableRooms: res.data.availableRooms || 0,
          bookedRooms: res.data.bookedRooms || { pending: 0, done: 0, finish: 0 },
          reviews: res.data.reviews || [],
        });
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to load dashboard stats:", err);
        setError("Failed to load dashboard data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const StatCard = ({ title, value, gradient, icon }) => (
    <div className="col-xl-3 col-sm-6">
      <div className={`card ${gradient} card-bx`}>
        <div className="card-body d-flex align-items-center">
          <div className="me-auto text-white">
            <h2 className="text-white">{value}</h2>
            <span className="fs-18">{title}</span>
          </div>
          {icon}
        </div>
      </div>
    </div>
  );

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading dashboard...</p>
      </div>
    );

  if (error) return <div className="text-center py-5 text-danger"><h5>{error}</h5></div>;

  return (
    <>
      {/* ================= ROLE BASED CARDS ================= */}

      <div className="row">

        {/* Admin + Manager + Receptionist → NEW BOOKINGS */}
        {(role === "admin" || role === "manager" || role === "receptionist") && (
          <StatCard
            title="New Bookings"
            value={stats.newBookings}
            gradient="gradient-1"
            icon={<svg width="58" height="58"><path fill="white" d="M29...Z" /></svg>}
          />
        )}

        {/* Admin + Manager → Scheduled Rooms */}
        {(role === "admin" || role === "manager") && (
          <StatCard
            title="Scheduled Rooms"
            value={stats.scheduledRooms}
            gradient="gradient-2"
            icon={<svg width="58" height="58"><path fill="white" d="M36...Z" /></svg>}
          />
        )}

        {/* Admin + Receptionist → Check Ins */}
        {(role === "admin" || role === "receptionist") && (
          <StatCard
            title="Check Ins"
            value={stats.checkIns}
            gradient="gradient-3"
            icon={<svg width="58" height="58"><path fill="white" d="M9...Z" /></svg>}
          />
        )}

        {/* Admin + Receptionist → Check Outs */}
        {(role === "admin" || role === "receptionist") && (
          <StatCard
            title="Check Outs"
            value={stats.checkOuts}
            gradient="gradient-4"
            icon={<svg width="58" height="58"><path fill="white" d="M8...Z" /></svg>}
          />
        )}

      </div>

      {/* ================= ROOMS SECTION ================= */}

      {(role === "admin" || role === "manager" || role === "housekeeping") && (
        <div className="row">
          <div className="col-xl-3 col-xxl-4">
            <div className="card text-center">
              <div className="card-body">
                <h2>{stats.availableRooms}</h2>
                <span className="fs-16 text-black">Available Rooms Today</span>
              </div>
            </div>

            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="mb-0">Booked Room Status</h4>
              </div>

              <div className="card-body">
                {["pending", "done", "finish"].map((status, i) => (
                  <div key={i} className="d-flex justify-content-between mb-3">
                    <span className="fw-bold text-capitalize">{status}</span>
                    <span>{stats.bookedRooms?.[status] ?? 0}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= REVIEWS SECTION ================= */}

          {(role === "admin" || role === "manager" || role === "user") && (
            <div className="col-xl-9 col-xxl-8">
              <div className="card">
                <div className="card-header border-0">
                  <h4 className="card-title">Latest Customer Reviews</h4>
                </div>

                <div className="card-body p-0 dz-scroll" style={{ maxHeight: 400 }}>
                  {stats.reviews.length > 0 ? (
                    stats.reviews.map((r, i) => (
                      <div key={i} className="dz-review-bx p-3 border-bottom">
                        <div className="d-flex align-items-center mb-2">
                          <img src={r.avatar || "/admin-images/avatar/1.jpg"} width="45" className="rounded me-3" />
                          <div>
                            <h6>{r.name}</h6>
                            <small>{new Date(r.createdAt).toLocaleDateString()}</small>
                          </div>
                        </div>
                        <p>{r.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-4 text-muted">No reviews yet</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;