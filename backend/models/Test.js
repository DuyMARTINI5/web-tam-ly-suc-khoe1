// backend/models/Test.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [questionSchema],
  results: [
    {
      scoreRange: { min: Number, max: Number },
      resultText: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Test', testSchema);

