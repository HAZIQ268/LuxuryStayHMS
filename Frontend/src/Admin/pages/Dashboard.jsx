import React, { useEffect, useState } from "react";
import axios from "axios";
// 
// ⭐ CHARTS KE LIYE NAYE IMPORTS
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

// Chart.js ko register karna zaroori hai
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement
);
// 

// ==========================================================
// ⭐️ CUSTOM PLUGIN FOR DONUT CHART: Center Text (Updated for Total Rooms)
// ==========================================================
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: (chart) => {
    if (chart.config.type === 'doughnut') {
      const { width, height, ctx } = chart;
      ctx.restore();
      // Total Available + Total Booked = Total Inventory Rooms
      const totalBooked = chart.data.datasets[0].data[0];
      const totalAvailable = chart.data.datasets[0].data[1];
      const totalRooms = totalBooked + totalAvailable;
      
      const fontSize = (height / 114).toFixed(2);
      ctx.font = `bold ${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";
      const text = `${totalRooms}`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;
      ctx.fillStyle = '#333';
      ctx.fillText(text, textX, textY - 15);
      
      // Secondary text (Title)
      ctx.font = `${(fontSize * 0.4).toFixed(2)}em sans-serif`;
      const subText = 'Total Rooms'; // Title updated
      const subTextX = Math.round((width - ctx.measureText(subText).width) / 2);
      ctx.fillStyle = '#666';
      ctx.fillText(subText, subTextX, textY + 15);
      
      ctx.save();
    }
  }
};

// ==========================================================
// ⭐️ COMPONENT 1: ROOM OCCUPANCY PIE CHART (New Component Logic)
// ==========================================================
const RoomOccupancyPieChart = ({ bookedRooms, availableRooms }) => {
    // Total Booked Rooms (Pending + Done + Finish)
    const totalBooked = bookedRooms.pending + bookedRooms.done + bookedRooms.finish;
    
    const data = {
        labels: ['Booked Rooms', 'Available Rooms'],
        datasets: [
            {
                label: 'Rooms Count',
                data: [totalBooked, availableRooms],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.9)', // Greenish for Booked
                    'rgba(255, 159, 64, 0.9)', // Orange/Yellow for Available
                ],
                borderColor: [
                    '#fff',
                    '#fff',
                ],
                borderWidth: 2,
                hoverBorderColor: '#000',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Donut style
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    padding: 20,
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            // Calculate percentage
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const value = context.parsed;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            label += `${value} (${percentage}%)`;
                        }
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div className="card h-100">
            <div className="card-header border-0 pb-0">
                <h4 className="card-title">Room Occupancy Overview</h4>
            </div>
            <div className="card-body" style={{ height: '350px', position: 'relative' }}>
                <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
            </div>
        </div>
    );
};

// ==========================================================
// ⭐️ COMPONENT 2: BOOKING STATUS BAR CHART (Existing)
// ==========================================================
const BookingBarChart = ({ newBookings, checkIns, checkOuts }) => {
  
  const data = {
    labels: ['New Bookings', 'Check Ins', 'Check Outs'],
    datasets: [
      {
        label: 'Daily Count',
        data: [newBookings, checkIns, checkOuts],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)', // Orange
          'rgba(153, 102, 255, 0.8)', // Purple
          'rgba(255, 205, 86, 0.8)', // Yellow
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Number of Actions'
        },
        ticks: {
            stepSize: 1,
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="card h-100">
      <div className="card-header border-0 pb-0">
        <h4 className="card-title">Daily Operation Summary</h4>
      </div>
      <div className="card-body" style={{ height: '350px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};


// ==========================================================
// ⭐️ MAIN DASHBOARD COMPONENT (Updated)
// ==========================================================
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

      {/* ================= CHARTS AND ROOMS SECTION (Updated Layout) ================= */}

      {(role === "admin" || role === "manager" || role === "housekeeping" || role === "user") && (
        <div className="row">
          
          {/* ⭐️ CHART 1: Room Occupancy Pie Chart (Available vs Booked) */}
          {(role === "admin" || role === "manager" || role === "housekeeping") && (
            <div className="col-xl-6 col-xxl-6">
              <RoomOccupancyPieChart 
                bookedRooms={stats.bookedRooms} 
                availableRooms={stats.availableRooms} 
              />
            </div>
          )}

          {/* ⭐️ CHART 2: Booking Status Bar Chart (New) */}
          {(role === "admin" || role === "manager" || role === "receptionist") && (
            <div className="col-xl-6 col-xxl-6">
              <BookingBarChart 
                newBookings={stats.newBookings}
                checkIns={stats.checkIns}
                checkOuts={stats.checkOuts}
              />
            </div>
          )}

        </div>
      )}
    </>
  );
}

export default Dashboard;