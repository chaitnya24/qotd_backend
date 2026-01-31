const express = require("express");
const router = express.Router();
const { getStats } = require("../controllers/stats_controller");

router.get("/", getStats);

module.exports = router;
