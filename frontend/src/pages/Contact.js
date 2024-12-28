import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import React from 'react';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4, backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)', marginY: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
        Liên Hệ
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Chúng tôi rất muốn nghe từ bạn! Hãy liên hệ với chúng tôi qua các thông tin bên dưới.
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          required
          id="name"
          label="Tên của bạn"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          id="message"
          label="Tin nhắn"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: 'center', paddingX: 4, paddingY: 1.5, fontWeight: 'bold', backgroundColor: '#007bff', boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.4)', '&:hover': { backgroundColor: '#0056b3' } }}
        >
          Gửi
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
