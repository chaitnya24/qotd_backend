const express = require("express");
const router = express.Router();
const { getTodayQuestion } = require("../controllers/qotd_controller");

router.get("/today", getTodayQuestion);

module.exports = router;
