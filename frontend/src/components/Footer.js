import { Box, Link as MuiLink, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#333', color: 'white', mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body1" align="center" gutterBottom>
        &copy; 2024 Tâm Lý Sức Khỏe. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
        {['/home', '/about', '/articles', '/tests', '/store', '/contact'].map((path, index) => (
          <MuiLink key={index} component={Link} to={path} color="inherit" sx={{ fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: '#007bff' } }}>
            {['Trang Chủ', 'Giới Thiệu', 'Bài Viết', 'Bài Test Tâm Lý', 'Gian Hàng Sách', 'Liên Hệ'][index]}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
