import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const Test = () => {
  const tests = [
    { id: '1', name: 'Kiểm Tra Mức Độ Trầm Cảm' },
    { id: '2', name: 'Kiểm Tra Mức Độ Stress' },
    { id: '3', name: 'Kiểm Tra Mức Độ Tự Tin' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Các Bài Test Tâm Lý
        </Typography>
        <Grid container spacing={3}>
          {tests.map((test) => (
            <Grid item xs={12} md={6} lg={4} key={test.id}>
              <Card sx={{ boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardContent>
                  <Typography variant="h6">{test.name}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/test/${test.id}`}
                    sx={{ marginTop: 2 }}
                  >
                    Tham Gia Bài Test
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Test;
