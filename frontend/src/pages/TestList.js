import { Box, Button, Card, CardContent, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';

const mockTests = [
  { id: 1, title: 'Kiểm Tra Mức Độ Stress', description: 'Đánh giá các dấu hiệu stress của bạn', link: '/tests/1' },
  { id: 2, title: 'Kiểm Tra Mức Độ Tự Tin', description: 'Đánh giá mức độ tự tin của bạn', link: '/tests/2' },
  { id: 3, title: 'Kiểm Tra Kỹ Năng Giao Tiếp', description: 'Đánh giá kỹ năng giao tiếp của bạn', link: '/tests/3' },
  { id: 4, title: 'Kiểm Tra Tính Kiên Nhẫn', description: 'Đánh giá mức độ kiên nhẫn trong các tình huống', link: '/tests/4' },
  { id: 5, title: 'Kiểm Tra Tính Cách Hướng Nội/Hướng Ngoại', description: 'Bạn là người hướng nội hay hướng ngoại?', link: '/tests/5' },
  { id: 6, title: 'Kiểm Tra Kỹ Năng Quản Lý Thời Gian', description: 'Đánh giá khả năng quản lý thời gian của bạn', link: '/tests/6' },
  { id: 7, title: 'Kiểm Tra Kỹ Năng Giải Quyết Vấn Đề', description: 'Đánh giá khả năng giải quyết vấn đề', link: '/tests/7' },
  { id: 8, title: 'Kiểm Tra Mức Độ Hài Lòng Với Cuộc Sống', description: 'Bạn cảm thấy hài lòng với cuộc sống hiện tại không?', link: '/tests/8' },
  { id: 9, title: 'Kiểm Tra Mức Độ Thích Nghi Với Thay Đổi', description: 'Bạn thích nghi với thay đổi nhanh như thế nào?', link: '/tests/9' },
];

const TestList = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Bài Test Tâm Lý</Typography>
      {mockTests.map((test) => (
        <Card key={test.id} sx={{ marginBottom: 3 }}>
          <CardContent>
            <Typography variant="h6">{test.title}</Typography>
            <Typography variant="body2">{test.description}</Typography>
            <Button
              component={Link}
              to={test.link}
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Tham Gia
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TestList;
