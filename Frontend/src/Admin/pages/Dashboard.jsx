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

  // Stat Card with Icon
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

  //  Loading
  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading dashboard...</p>
      </div>
    );

  // Error
  if (error)
    return (
      <div className="text-center py-5 text-danger">
        <h5>{error}</h5>
      </div>
    );

  return (
    <>
      {/* ===== Stats Row ===== */}
      <div className="row">
        <StatCard
          title="New Bookings"
          value={stats.newBookings}
          gradient="gradient-1"
          icon={
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0611 39.4402L13.7104 52.5947C12.9941 53.2089 11.9873 53.3497 11.1271 52.9556C10.2697 52.5614 9.7226 51.7041 9.7226 50.7597V14.5028C9.7226 9.16424 14.0517 4.83655 19.3904 4.83655H38.7289C44.0704 4.83655 48.3995 9.16424 48.3995 14.5028V50.7597C48.3995 51.7041 47.8495 52.5614 46.9922 52.9556C46.1348 53.3497 45.1252 53.2089 44.4088 52.5947L29.0611 39.4402Z"
                fill="white"
              />
            </svg>
          }
        />

        <StatCard
          title="Scheduled Rooms"
          value={stats.scheduledRooms}
          gradient="gradient-2"
          icon={
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.25 9.66665V7.24998C36.25 5.91598 37.3327 4.83331 38.6667 4.83331C40.0007 4.83331 41.0833 5.91598 41.0833 7.24998V9.66665C46.4242 9.66665 50.75 13.9949 50.75 19.3333V43.5C50.75 48.8384 46.4242 53.1666 41.0833 53.1666H16.9167C11.5782 53.1666 7.25 48.8384 7.25 43.5V19.3333C7.25 13.9949 11.5782 9.66665 16.9167 9.66665V7.24998C16.9167 5.91598 17.9993 4.83331 19.3333 4.83331C20.6673 4.83331 21.75 5.91598 21.75 7.24998V9.66665H36.25Z"
                fill="white"
              />
            </svg>
          }
        />

        <StatCard
          title="Check Ins"
          value={stats.checkIns}
          gradient="gradient-3"
          icon={
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.66671 38.6667V43.5C9.66671 48.8409 13.995 53.1667 19.3334 53.1667H43.5C48.8409 53.1667 53.1667 48.8409 53.1667 43.5C53.1667 35.455 53.1667 22.5475 53.1667 14.5C53.1667 9.16162 48.8409 4.83337 43.5 4.83337H19.3334C13.995 4.83337 9.66671 9.16162 9.66671 14.5V19.3334C9.66671 20.6674 10.7494 21.75 12.0834 21.75C13.4174 21.75 14.5 20.6674 14.5 19.3334V14.5C14.5 11.832 16.6654 9.66671 19.3334 9.66671H43.5C46.1705 9.66671 48.3334 11.832 48.3334 14.5V43.5C48.3334 46.1705 46.1705 48.3334 43.5 48.3334H19.3334C16.6654 48.3334 14.5 46.1705 14.5 43.5V38.6667C14.5 37.3351 13.4174 36.25 12.0834 36.25C10.7494 36.25 9.66671 37.3351 9.66671 38.6667ZM27.9995 26.5834L24.8748 23.461C23.9323 22.5161 23.9323 20.9864 24.8748 20.0415C25.8197 19.099 27.3495 19.099 28.292 20.0415L35.542 27.2915C36.4869 28.2364 36.4869 29.7661 35.542 30.711L28.292 37.961C27.3495 38.9035 25.8197 38.9035 24.8748 37.961C23.9323 37.0161 23.9323 35.4864 24.8748 34.5415L27.9995 31.4167H7.25004C5.91604 31.4167 4.83337 30.334 4.83337 29C4.83337 27.6685 5.91604 26.5834 7.25004 26.5834H27.9995Z"
                fill="white"
              />
            </svg>
          }
        />

        <StatCard
          title="Check Outs"
          value={stats.checkOuts}
          gradient="gradient-4"
          icon={
            <svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.55512 20.7503L11.4641 17.8435C12.3415 16.9638 12.3415 15.5397 11.4641 14.6601C10.5844 13.7827 9.16031 13.7827 8.28289 14.6601L1.53353 21.4094C0.653858 22.2891 0.653858 23.7132 1.53353 24.5929L8.28289 31.3422C9.16031 32.2197 10.5844 32.2197 11.4641 31.3422C12.3415 30.4626 12.3415 29.0385 11.4641 28.1588L8.55512 25.2498H27.8718C29.1137 25.2498 30.1216 24.2419 30.1216 23C30.1216 21.7604 29.1137 20.7503 27.8718 20.7503H8.55512Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>

      {/* ===== Room Stats ===== */}
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
              {["pending", "done", "finish"].map((status, idx) => (
                <div key={idx} className="d-flex justify-content-between mb-3">
                  <span className="fw-bold text-capitalize">{status}</span>
                  <span>{stats.bookedRooms?.[status] ?? 0}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Reviews Section ===== */}
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
                      <img
                        src={r.avatar || "/admin-images/avatar/1.jpg"}
                        alt={r.name}
                        width="45"
                        className="rounded me-3"
                      />
                      <div>
                        <h6 className="mb-0">{r.name}</h6>
                        <small className="text-muted">
                          {new Date(r.createdAt || Date.now()).toLocaleDateString()}
                        </small>
                      </div>
                      <ul className="star-review ms-auto">
                        {[...Array(5)].map((_, j) => (
                          <li key={j}>
                            <i className={`fas fa-star ${j < (r.stars || 0) ? "orange" : ""}`}></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mb-0">{r.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-center py-4 text-muted">No reviews yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
