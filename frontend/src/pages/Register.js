import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { mockUsers } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setSnackbarMessage('Mật khẩu không khớp!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const userExists = mockUsers.some((u) => u.email === email);
    if (userExists) {
      setSnackbarMessage('Email đã được sử dụng!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    mockUsers.push({ id: mockUsers.length + 1, email, password, name: 'Người dùng mới' });
    localStorage.setItem(
      'user',
      JSON.stringify({ userId: mockUsers.length + 1, name: 'Người dùng mới', avatar: '/assets/images/avatar/default-avatar.jpg' })
    );
    setSnackbarMessage('Đăng ký thành công!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          Đăng Ký
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
          Tạo tài khoản để khám phá thêm các tính năng tuyệt vời của chúng tôi!
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
          <TextField
            type="password"
            label="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Đăng Ký
          </Button>
        </form>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;