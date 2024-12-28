// Update Article Routes (article.js)

const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // Import Article model
const authenticateToken = require('../middleware/authenticateToken'); // Import middleware for authentication

// Route to get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error: error.message });
  }
});

// Route to get a specific article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error: error.message });
  }
});

// Route to create a new article
router.post('/', authenticateToken, async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newArticle = new Article({ title, content, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error creating article', error: error.message });
  }
});

// Route to update an article by ID
router.put('/:id', authenticateToken, async (req, res) => {
  const { title, content } = req.body;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error updating article', error: error.message });
  }
});

// Route to delete an article by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) return res.status(404).json({ message: 'Article not found' });
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting article', error: error.message });
  }
});

module.exports = router;
