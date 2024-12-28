import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import api from '../utils/api';

const Store = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.books);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sách:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: 4, backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)', marginY: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Cửa Hàng Sách
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {books.map(book => (
          <Card key={book.id} sx={{ width: 300, boxShadow: 5, padding: 2, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 20px rgba(0,0,0,0.3)' } }}>
            <CardMedia
              component="img"
              height="200"
              image={book.image || 'https://via.placeholder.com/150'}
              alt={book.title}
              sx={{ borderRadius: '8px' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{book.title}</Typography>
              <Typography sx={{ color: '#555' }}>Tác giả: {book.author}</Typography>
              <Typography sx={{ color: '#555', marginBottom: 2 }}>Giá: {book.price} VND</Typography>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0056b3' }, width: '100%' }}>
                Mua Ngay
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Store;
