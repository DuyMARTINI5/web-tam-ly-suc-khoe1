const express = require('express');
const router = express.Router();

const articleRoutes = require('./article');
const bookRoutes = require('./book');
const testRoutes = require('./test');
const userRoutes = require('./user');

router.use('/articles', articleRoutes);
router.use('/books', bookRoutes);
router.use('/tests', testRoutes);
router.use('/users', userRoutes);

module.exports = router;
