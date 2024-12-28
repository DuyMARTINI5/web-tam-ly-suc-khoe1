// Update Test Routes (test.js)

const express = require('express');
const router = express.Router();
const Test = require('../models/Test'); // Import Test model
const authenticateToken = require('../middleware/authenticateToken'); // Import middleware for authentication

// Route to get all tests
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const query = search ? { title: { $regex: search, $options: 'i' } } : {};

  try {
    const tests = await Test.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Test.countDocuments(query);
    res.status(200).json({
      tests,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
});

// Route to get a specific test by ID
router.get('/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: 'Test not found' });
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test', error: error.message });
  }
});

// Route to create a new test
router.post('/', authenticateToken, async (req, res) => {
  const { title, description, questions, results } = req.body;

  try {
    const newTest = new Test({ title, description, questions, results });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
});

// Route to update a test by ID
router.put('/:id', authenticateToken, async (req, res) => {
  const { title, description, questions, results } = req.body;

  try {
    const updatedTest = await Test.findByIdAndUpdate(
      req.params.id,
      { title, description, questions, results },
      { new: true }
    );
    if (!updatedTest) return res.status(404).json({ message: 'Test not found' });
    res.status(200).json(updatedTest);
  } catch (error) {
    res.status(500).json({ message: 'Error updating test', error: error.message });
  }
});

// Route to delete a test by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) return res.status(404).json({ message: 'Test not found' });
    res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
});

module.exports = router;
