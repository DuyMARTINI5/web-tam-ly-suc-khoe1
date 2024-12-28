// Dashboard.js - Cải thiện để dễ quản lý và rõ ràng hơn

import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import api from '../utils/api';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get('/user');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy thông tin người dùng:', error);
      }
    };

    const fetchFavoriteArticles = async () => {
      try {
        const response = await api.get('/favorites');
        setFavoriteArticles(response.data);
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh sách bài viết yêu thích:', error);
      }
    };

    fetchUserInfo();
    fetchFavoriteArticles();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Thông Tin Tài Khoản
      </Typography>
      {userInfo && (
        <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">Tên: {userInfo.name}</Typography>
            <Typography>Email: {userInfo.email}</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Chỉnh Sửa Thông Tin
            </Button>
          </CardContent>
        </Card>
      )}

      <Typography variant="h5" gutterBottom>
        Bài Viết Yêu Thích
      </Typography>
      <Grid container spacing={3}>
        {favoriteArticles.map((article) => (
          <Grid item xs={12} md={6} lg={4} key={article.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography>Tác giả: {article.author}</Typography>
                <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
                  Đọc Thêm
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
