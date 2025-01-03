const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  rating: { type: Number },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
