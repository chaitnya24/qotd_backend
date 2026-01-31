const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: String,
  questionId: mongoose.Schema.Types.ObjectId,
  answer: String,
  result: { type: String, enum: ["correct", "incorrect", "partially correct"] },
  timeTaken: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Submission", submissionSchema);
