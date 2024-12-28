const mongoose = require('mongoose');

// Định nghĩa schema cho bình luận
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Tham chiếu tới User collection
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Định nghĩa schema cho bài viết
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  comments: [commentSchema], // Nhúng danh sách bình luận
});

module.exports = mongoose.model('Article', articleSchema);
