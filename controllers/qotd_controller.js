const Question = require("../models/question_model");

exports.getTodayQuestion = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const question = await Question.findOne({ date: today });

    if (!question) {
      return res.status(404).json({ message: "No QOTD found for today" });
    }

    res.status(200).json({
      title: question.title,
      difficulty: question.difficulty,
      problemStatement: question.problemStatement,
      sampleInput: question.sampleInput,
      sampleOutput: question.sampleOutput,
      hintsAvailable: question.hints.length > 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
