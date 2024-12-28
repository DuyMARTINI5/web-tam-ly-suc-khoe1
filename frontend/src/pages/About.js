import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';

import React from 'react';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4, marginTop: '64px', backgroundColor: '#f7f9fc', borderRadius: '8px' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: '#3f51b5', fontWeight: 'bold' }}
      >
        Về Chúng Tôi
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ lineHeight: 1.8, textAlign: 'justify', color: '#555555' }}
      >
        Trang web Tâm Lý Sức Khỏe của chúng tôi được tạo ra với mục đích cung cấp thông tin và dịch vụ hữu ích
        cho sức khỏe tâm lý của cộng đồng. Chúng tôi tin rằng sức khỏe tâm lý là một phần quan trọng không thể
        thiếu của cuộc sống, và chúng tôi cam kết giúp đỡ mọi người trong việc cải thiện và duy trì sức khỏe tâm lý.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
        {[
          {
            title: 'Sứ Mệnh Của Chúng Tôi',
            content:
              'Sứ mệnh của chúng tôi là nâng cao nhận thức về sức khỏe tâm lý, cung cấp những tài nguyên và công cụ giúp cải thiện chất lượng cuộc sống của mọi người.',
          },
          {
            title: 'Tầm Nhìn Của Chúng Tôi',
            content:
              'Chúng tôi mong muốn xây dựng một cộng đồng nơi mọi người có thể chia sẻ và hỗ trợ lẫn nhau trong việc duy trì sức khỏe tâm lý.',
          },
          {
            title: 'Giá Trị Cốt Lõi',
            content:
              'Chúng tôi tôn trọng sự riêng tư, sự đồng cảm và sự hiểu biết sâu sắc về nhu cầu sức khỏe tâm lý của từng cá nhân.',
          },
          {
            title: 'Chia Sẻ Câu Chuyện',
            content:
              'Chúng tôi rất hân hạnh được lắng nghe câu chuyện của bạn. Hãy chia sẻ với chúng tôi để cùng nhau lan tỏa giá trị tích cực và xây dựng cộng đồng mạnh mẽ.',
          },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: 5,
              borderLeft: '5px solid #3f51b5',
              backgroundColor: index === 3 ? '#f4f6f9' : '#ffffff',
              color: '#3f51b5',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: '#3f51b5', fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.6, textAlign: 'justify', color: '#555555' }}
              >
                {item.content}
              </Typography>
              {index === 3 && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => alert('Chức năng chia sẻ sẽ sớm được cập nhật!')}
                >
                  Chia sẻ câu chuyện
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default About;
