const Submission = require("../models/submission_model");

exports.getStats = async (req, res) => {
  try {
    const totalAttempts = await Submission.countDocuments();
    const correctAttempts = await Submission.countDocuments({ result: "correct" });

    const successRate =
      totalAttempts === 0
        ? "0%"
        : `${Math.round((correctAttempts / totalAttempts) * 100)}%`;

    res.status(200).json({ totalAttempts, successRate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
