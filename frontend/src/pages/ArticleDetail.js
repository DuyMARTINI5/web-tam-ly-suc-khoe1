import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { mockArticles } from '../utils/mockData';

const ArticleDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = mockArticles.find((a) => a.id === parseInt(id, 10));
    setArticle(foundArticle);
  }, [id]);

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" color="error">
          Không tìm thấy bài viết.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/articles"
          sx={{ marginTop: 2 }}
        >
          Quay lại danh sách bài viết
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Đăng bởi {article.author} - {article.createdAt}
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </Box>
      <Divider sx={{ marginBottom: 3 }} />
      <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: 3, whiteSpace: 'pre-wrap' }}>
        {article.content}
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to="/articles">
          Quay lại danh sách
        </Button>
      </Box>
    </Container>
  );
};

export default ArticleDetail;
