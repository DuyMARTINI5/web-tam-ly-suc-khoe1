import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import axios from 'axios';
import useSnackbar from '../../hooks/useSnackbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { openSnackbar, snackbarMessage, snackbarSeverity, showSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email });
      showSnackbar('Email đặt lại mật khẩu đã được gửi!', 'success');
    } catch (error) {
      showSnackbar('Có lỗi xảy ra khi gửi email. Vui lòng thử lại!', 'error');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Quên Mật Khẩu?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
          Nhập email của bạn và chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 3 }}>
            Gửi Yêu Cầu
          </Button>
        </form>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ForgotPassword;
