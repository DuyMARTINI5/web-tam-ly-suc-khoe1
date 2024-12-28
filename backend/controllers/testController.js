// Improved Test Controller (testController.js)

const Joi = require('joi');
const Test = require('../models/Test');
const TestResult = require('../models/TestResult');

// Get all tests with pagination and search
exports.getAllTests = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const query = search ? { title: { $regex: search, $options: 'i' } } : {};

    const tests = await Test.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Test.countDocuments(query);

    res.status(200).json({
      tests,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tests', error: error.message });
  }
};

// Get a single test by ID
exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving test', error: error.message });
  }
};

// Create a new test
exports.createTest = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    questions: Joi.array().items(Joi.object({
      question: Joi.string().required(),
      options: Joi.array().items(Joi.string()).required(),
      correctAnswer: Joi.string().required(),
    })).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const newTest = new Test(req.body);
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(400).json({ message: 'Error creating test', error: error.message });
  }
};

// Update an existing test
exports.updateTest = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string().min(10),
    questions: Joi.array().items(Joi.object({
      question: Joi.string(),
      options: Joi.array().items(Joi.string()),
      correctAnswer: Joi.string(),
    })),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTest) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(updatedTest);
  } catch (error) {
    res.status(400).json({ message: 'Error updating test', error: error.message });
  }
};

// Delete a test
exports.deleteTest = async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
};

// Save user test result
exports.saveTestResult = async (req, res) => {
  try {
    const { userId, testId, answers } = req.body;

    const test = await Test.findById(testId);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    const result = calculateScore(test, answers);
    const testResult = {
      userId,
      testId,
      score: result.score,
      answers: result.answers,
    };

    const newTestResult = new TestResult(testResult);
    await newTestResult.save();

    res.status(201).json(newTestResult);
  } catch (error) {
    res.status(500).json({ message: 'Error saving test result', error: error.message });
  }
};

// Helper function to calculate score
const calculateScore = (test, answers) => {
  let score = 0;
  const correctAnswers = test.questions.map(q => q.correctAnswer);

  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  return {
    score,
    answers,
  };
};
