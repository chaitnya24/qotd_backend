const express = require("express");
const router = express.Router();
const { submitAnswer } = require("../controllers/submission_controller");

router.post("/submit", submitAnswer);

module.exports = router;
