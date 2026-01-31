const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  title: String,
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"] },
  problemStatement: String,
  sampleInput: String,
  sampleOutput: String,
  expectedOutput: String,
  hints: [String]
});

module.exports = mongoose.model("Question", questionSchema);
