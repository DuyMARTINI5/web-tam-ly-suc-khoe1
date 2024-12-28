import { Box, Button, Card, CardContent, CardMedia, Container, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { mockBooks } from '../utils/mockData';

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchBooks = () => {
      try {
        const filtered = mockBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            book.rating >= ratingFilter
        );
        setFilteredBooks(filtered);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lọc danh sách sách:', error);
        setSnackbarMessage('Có lỗi xảy ra khi lọc danh sách sách. Vui lòng thử lại sau!');
        setOpenSnackbar(true);
      }
    };

    fetchBooks();
  }, [searchTerm, ratingFilter]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const addToCart = (book) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingBook = cart.find((item) => item.id === book.id);

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        cart.push({ ...book, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      setSnackbarMessage(`Đã thêm "${book.title}" vào giỏ hàng.`);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Có lỗi xảy ra khi thêm sách vào giỏ hàng:', error);
      setSnackbarMessage('Có lỗi xảy ra khi thêm sách vào giỏ hàng. Vui lòng thử lại sau!');
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cửa hàng sách
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          marginBottom: 3,
        }}
      >
        <TextField
          label="Tìm kiếm sách"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '100%', maxWidth: '500px' }}
        />
        <Button
          variant="contained"
          onClick={() => setRatingFilter((prev) => (prev < 5 ? prev + 1 : 0))}
        >
          Lọc đánh giá: {ratingFilter > 0 ? `${ratingFilter}+` : 'Tất cả'}
        </Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 3,
        }}
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Card key={book.id} sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={book.image || 'https://via.placeholder.com/150'}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tác giả: {book.author}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                  Giá: {book.price.toLocaleString()} VND
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => addToCart(book)}
                >
                  Mua Ngay
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center">
            Không tìm thấy sách nào phù hợp.
          </Typography>
        )}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default BookList;
