const express = require("express");
const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    // Replace these with real DB queries
    const stats = {
      newBookings: 872,
      scheduledRooms: 285,
      checkIns: 53,
      checkOuts: 78,
      availableRooms: 785,
      bookedRooms: { pending: 234, done: 65, finish: 763 },
      reviews: [
        {
          name: "Ali Muzair",
          stars: 4,
          date: "2025-11-04",
          comment: "Excellent service!",
          avatar: "/admin-images/avatar/1.jpg",
        },
        {
          name: "Chintya Clara",
          stars: 3,
          date: "2025-11-03",
          comment: "Good but can improve.",
        },
      ],
    };

    res.json(stats);
  } catch (err) {
    console.error("Dashboard stats error:", err);
    res.status(500).json({ error: "Failed to load dashboard data" });
  }
});

module.exports = router; // ✅ CommonJS export
