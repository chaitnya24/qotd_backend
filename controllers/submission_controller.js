const Question = require("../models/question_model");
const Submission = require("../models/submission_model");

exports.submitAnswer = async (req, res) => {
  try {
    const { userId, answer, timeTaken } = req.body;
    const today = new Date().toISOString().split("T")[0];

    const question = await Question.findOne({ date: today });
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    let result = "incorrect";
    if (answer === question.expectedOutput) result = "correct";

    await Submission.create({
      userId,
      questionId: question._id,
      answer,
      result,
      timeTaken
    });

    res.status(200).json({
      result,
      message: result === "correct" ? "Well done!" : "Try again"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
