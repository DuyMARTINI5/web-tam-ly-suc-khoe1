// Update Book Routes (book.js)

const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Import Book model
const authenticateToken = require('../middleware/authenticateToken'); // Import middleware for authentication

// Route to get all books
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const query = search ? { title: { $regex: search, $options: 'i' } } : {};

  try {
    const books = await Book.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Book.countDocuments(query);
    res.status(200).json({
      books,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
});

// Route to get a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error: error.message });
  }
});

// Route to create a new book
router.post('/', authenticateToken, async (req, res) => {
  const { title, author, price, description, coverImage } = req.body;

  try {
    const newBook = new Book({ title, author, price, description, coverImage });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error: error.message });
  }
});

// Route to update a book by ID
router.put('/:id', authenticateToken, async (req, res) => {
  const { title, author, price, description, coverImage } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, price, description, coverImage },
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
});

// Route to delete a book by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
});

module.exports = router;
