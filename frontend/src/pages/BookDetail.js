// BookDetail.js

import { Box, Button, Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Giả lập việc lấy dữ liệu sách từ mock data
    const fetchBookDetails = () => {
      const mockBooks = [
        { id: 1, title: 'Sách A', author: 'Tác giả A', description: 'Mô tả sách A', image: 'https://via.placeholder.com/400', price: '100.000 VND' },
        { id: 2, title: 'Sách B', author: 'Tác giả B', description: 'Mô tả sách B', image: 'https://via.placeholder.com/400', price: '150.000 VND' },
      ];
      const book = mockBooks.find((b) => b.id === parseInt(bookId));
      setBook(book || null);
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <Typography variant="h6">Không tìm thấy sách.</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img
          src={book.image}
          alt={book.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '16px' }}
        />
        <Typography variant="h4" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {book.description}
        </Typography>
        <Typography>Tác giả: {book.author}</Typography>
        <Typography>Giá: {book.price}</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
          Mua Ngay
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/books"
          sx={{ marginTop: 3, marginLeft: 2 }}
        >
          Quay Lại Cửa Hàng
        </Button>
      </Box>
    </Container>
  );
};

export default BookDetail;
