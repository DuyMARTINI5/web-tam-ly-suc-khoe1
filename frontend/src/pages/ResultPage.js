// ResultPage.js

import { Box, Button, Container, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import React from 'react';

const ResultPage = () => {
  const { testId } = useParams();

  const getResultMessage = (testId) => {
    switch (testId) {
      case '1':
        return 'Kết quả của bạn cho bài kiểm tra trầm cảm cho thấy bạn đang gặp mức độ trầm cảm nhẹ.';
      case '2':
        return 'Kết quả của bạn cho bài kiểm tra stress cho thấy mức độ căng thẳng của bạn đang cao.';
      case '3':
        return 'Bạn có mức độ tự tin khá cao, điều này rất tốt cho sức khỏe tâm lý của bạn.';
      default:
        return 'Không tìm thấy kết quả phù hợp.';
    }
  };

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kết Quả Bài Test Tâm Lý
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {getResultMessage(testId)}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/tests" sx={{ marginTop: 3 }}>
          Thực Hiện Bài Test Khác
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/home" sx={{ marginTop: 2, marginLeft: 2 }}>
          Về Trang Chủ
        </Button>
      </Box>
    </Container>
  );
};

export default ResultPage;
