const express = require("express");

const qotdRoutes = require("./routes/qotd_routes");
const submissionRoutes = require("./routes/submission_routes");
const statsRoutes = require("./routes/stats_routes");

const app = express();
app.use(express.json());

app.use("/api/qotd", qotdRoutes);
app.use("/api/qotd", submissionRoutes);
app.use("/api/qotd/stats", statsRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "QOTD Backend is running"
  });
});

module.exports = app;
