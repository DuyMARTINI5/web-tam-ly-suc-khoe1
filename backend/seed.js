// Updated Seed Data Script (seed.js)

const mongoose = require('mongoose');
const User = require('./models/User');
const Book = require('./models/Book');
const Article = require('./models/Article');
const Test = require('./models/Test');

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Seed Users
    await User.insertMany([
      { name: 'John Doe', email: 'john@example.com', password: 'hashedpassword1' },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'hashedpassword2' },
    ]);
    console.log('Users seeded successfully');

    // Seed Books
    await Book.insertMany([
      {
        title: 'Sức Mạnh Của Thói Quen',
        author: 'Charles Duhigg',
        price: 120000,
        description: 'Cuốn sách giúp bạn hiểu cách thay đổi thói quen.',
        coverImage: '/images/book1.jpg',
      },
      {
        title: 'Tâm Lý Học Nhận Thức',
        author: 'Patrick Edblad',
        price: 150000,
        description: 'Rèn luyện kỹ năng quản lý cảm xúc.',
        coverImage: '/images/book2.jpg',
      },
    ]);
    console.log('Books seeded successfully');

    // Seed Articles
    await Article.insertMany([
      { title: 'Làm Thế Nào Để Sống Hạnh Phúc?', content: 'Chi tiết về cách sống hạnh phúc...', author: 'Nguyen Van A' },
      { title: 'Quản Lý Thời Gian Hiệu Quả', content: 'Chi tiết về cách quản lý thời gian...', author: 'Tran Thi B' },
    ]);
    console.log('Articles seeded successfully');

    // Seed Tests
    await Test.insertMany([
      {
        title: 'Kiểm tra mức độ stress',
        description: 'Bài test để đánh giá mức độ stress.',
        questions: [
          {
            question: 'Bạn có cảm thấy áp lực khi làm việc?',
            options: ['Có', 'Không', 'Thỉnh thoảng'],
            correctAnswer: 'Không',
          },
        ],
      },
    ]);
    console.log('Tests seeded successfully');

    mongoose.disconnect();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding data:', error.message);
    mongoose.disconnect();
  }
};

seedData();
