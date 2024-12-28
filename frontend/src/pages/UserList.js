import { Button, Card, CardContent, Container, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import theme from './theme';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh sách người dùng!', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa người dùng!', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 4 }}>
          Danh sách người dùng
        </Typography>
        {users.map((user) => (
          <Card key={user._id} sx={{ marginBottom: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Email: {user.email}
              </Typography>
              <Button variant="contained" color="error" onClick={() => handleDelete(user._id)}>
                Xóa
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default UserList;
