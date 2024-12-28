import { AppBar, Box, Button, Card, CardContent, CardMedia, Divider, Grid, Toolbar, Typography } from '@mui/material';
import { Article, ContactMail, FitnessCenter, Forum, Group, LibraryBooks, Psychology, ShoppingCart } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        backgroundImage: 'url(/assets/images/hero/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        backgroundBlendMode: 'soft-light',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ padding: 0 }}>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: 'center', marginBottom: 6, padding: '0 16px' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#90caf9' }}>
          Chào Mừng Đến Với Tâm Lý Sức Khỏe
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ maxWidth: '700px', margin: '0 auto', color: '#e0f7fa' }}>
          Chúng tôi cam kết cung cấp những thông tin hữu ích để giúp bạn duy trì và cải thiện sức khỏe tâm lý.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
          sx={{
            marginTop: 3,
            paddingX: 4,
            paddingY: 1.5,
            backgroundColor: '#90caf9',
            boxShadow: '0px 4px 12px rgba(144, 202, 249, 0.4)',
            borderRadius: '25px',
            '&:hover': { backgroundColor: '#64b5f6' }
          }}
        >
          Tìm Hiểu Thêm
        </Button>
      </Box>

      <Divider sx={{ marginY: 6, borderColor: '#90caf9' }} />

      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
        Bài Viết Mới Nhất
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: 6, paddingX: '16px' }}>
        {[
          {
            title: 'Bài Viết Về Cân Bằng Cuộc Sống',
            description: 'Học cách cân bằng giữa công việc và cuộc sống để duy trì sức khỏe tâm lý tốt nhất.',
            image: '/assets/images/articles/bai-viet-1.jpg',
            link: '/articles/1'
          },
          {
            title: 'Kỹ Năng Quản Lý Cảm Xúc',
            description:
              'Học cách quản lý cảm xúc một cách hiệu quả để vượt qua các thách thức trong cuộc sống.',
            image: '/assets/images/articles/bai-viet-2.jpg',
            link: '/articles/2'
          },
          {
            title: 'Chăm Sóc Sức Khỏe Tâm Lý',
            description:
              'Những phương pháp chăm sóc sức khỏe tâm lý đơn giản và hiệu quả bạn có thể áp dụng hàng ngày.',
            image: '/assets/images/articles/bai-viet-3.jpg',
            link: '/articles/3'
          },
          {
            title: 'Giảm Stress Hiệu Quả',
            description:
              'Các biện pháp giúp giảm stress nhanh chóng và hiệu quả, phù hợp cho cuộc sống bận rộn.',
            image: '/assets/images/articles/bai-viet-4.jpg',
            link: '/articles/4'
          },
          {
            title: 'Thư Giãn Tâm Hồn',
            description:
              'Những phương pháp thư giãn tâm hồn giúp cải thiện tâm trạng và nâng cao chất lượng cuộc sống.',
            image: '/assets/images/articles/bai-viet-5.jpg',
            link: '/articles/5'
          },
          {
            title: 'Làm Thế Nào Để Đạt Được Hạnh Phúc',
            description: 'Những gơi ý đơn giản giúp bạn đạt được hạnh phúc và tìm kiếm sự vui vẻ trong cuộc sống.',
            image: '/assets/images/articles/bai-viet-6.jpg',
            link: '/articles/6'
          },
          {
            title: 'Kỹ Năng Lắng Nghe',
            description: 'Phát triển kỹ năng lắng nghe để kết nối tốt hơn với người khác và hiểu rõ cảm xúc của chính mình.',
            image: '/assets/images/articles/bai-viet-7.jpg',
            link: '/articles/7'
          },
          {
            title: 'Rèn Luyện Kỹ Năng Tự Nhận Thức',
            description: 'Hiểu rõ hơn về bản thân và từ đó nâng cao sự tự tin và động lực.',
            image: '/assets/images/articles/bai-viet-8.jpg',
            link: '/articles/8'
          },
          {
            title: 'Làm Thế Nào Để Đối Phó Với Khó Khăn',
            description: 'Những biện pháp giúp bạn đối phó với khó khăn một cách tích cực và hiệu quả.',
            image: '/assets/images/articles/bai-viet-9.jpg',
            link: '/articles/9'
          }
        ].map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 6px 18px rgba(0,0,0,0.15)', backgroundColor: '#bbdefb' }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#64b5f6' }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: '#555' }}>
                  {article.description}
                </Typography>
                <Button
                  variant="outlined"
                  component={Link}
                  to={article.link}
                  sx={{ marginTop: 2, borderRadius: '15px', color: '#64b5f6', borderColor: '#64b5f6', '&:hover': { backgroundColor: '#42a5f5', color: '#ffffff' } }}
                >
                  Đọc Thêm
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginY: 6, borderColor: '#90caf9' }} />

      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
        Khám Phá Các Dịch Vụ
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: 6, justifyContent: 'center', paddingX: '16px' }}>
        {[
          {
            title: 'Tư Vấn Tâm Lý',
            description:
              'Chúng tôi cung cấp các buổi tư vấn giúp bạn giải quyết những vấn đề tâm lý một cách chuyên nghiệp.',
            image: '/assets/images/tests/tu-van-tam-ly.jpg',
            link: '/services',
            icon: null
          },
          {
            title: 'Bài Viết Hữu Ích',
            description:
              'Khám phá các bài viết được chuẩn bị bởi các chuyên gia tâm lý để giúp bạn hiểu rõ hơn về sức khỏe tâm lý.',
            image: '/assets/images/tests/bai-viet-huu-ich.jpg',
            link: '/articles',
            icon: <Article />
          },
          {
            title: 'Bài Test Tâm Lý',
            description:
              'Tham gia các bài test tâm lý để hiểu rõ hơn về bản thân và có những quyết định tốt hơn cho sức khỏe tâm lý của mình.',
            image: '/assets/images/tests/bai-test-tam-ly.jpg',
            link: '/tests',
            icon: <Psychology />
          },
          {
            title: 'Diễn Đàn Trò Chuyện',
            description:
              'Tham gia diễn đàn để chia sẻ, trò chuyện và kết nối với cộng đồng để tìm hiểu thêm về sức khỏe tâm lý.',
            image: '/assets/images/tests/dien-dan.jpg',
            link: '/forum',
            icon: <Forum />
          },
          {
            title: 'Thư Viện Sách',
            description:
              'Khám phá và đọc các cuốn sách chuyên sâu về sức khỏe tâm lý và các kỹ năng sống hữu ích.',
            image: '/assets/images/tests/thu-vien-sach.jpg',
            link: '/library',
            icon: <LibraryBooks />
          },
          {
            title: 'Cửa Hàng Sản Phẩm',
            description:
              'Mua các sản phẩm hỗ trợ chăm sóc sức khỏe tâm lý như sách, thiết bị thư giãn, và nhiều hơn nữa.',
            image: '/assets/images/tests/cua-hang.jpg',
            link: '/shop',
            icon: <ShoppingCart />
          },
          {
            title: 'Lớp Học Yoga',
            description:
              'Tham gia các lớp yoga giúp thư giãn tâm trí và nâng cao sức khỏe của bạn.',
            image: '/assets/images/tests/yoga.jpg',
            link: '/yoga',
            icon: <FitnessCenter />
          },
          {
            title: 'Nhóm Hỗ Trợ',
            description:
              'Tham gia nhóm hỗ trợ để chia sẻ và tìm kiếm sự đồng cảm từ những người có cùng mối quan tâm.',
            image: '/assets/images/tests/nhom-ho-tro.jpg',
            link: '/support-groups',
            icon: <Group />
          }
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: '20px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 6px 18px rgba(0,0,0,0.15)', backgroundColor: '#bbdefb' }
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#64b5f6' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1, color: '#555' }}>
                  {service.description}
                </Typography>
                <Button
                  startIcon={service.icon}
                  variant="outlined"
                  component={Link}
                  to={service.link}
                  sx={{ marginTop: 2, borderRadius: '20px', color: '#64b5f6', borderColor: '#64b5f6', '&:hover': { backgroundColor: '#42a5f5', color: '#ffffff' } }}
                >
                  Xem Thêm
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginY: 6, borderColor: '#90caf9' }} />

      <Box sx={{ textAlign: 'center', marginTop: 6, paddingX: '16px' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#90caf9' }}>
          Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ Bạn
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto', color: '#e0f7fa' }}>
          Nếu bạn cần hỗ trợ hoặc có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi.
        </Typography>
        <Button
          startIcon={<ContactMail />}
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            marginTop: 3,
            paddingX: 4,
            paddingY: 1.5,
            backgroundColor: '#90caf9',
            boxShadow: '0px 4px 12px rgba(144, 202, 249, 0.4)',
            borderRadius: '25px',
            '&:hover': { backgroundColor: '#64b5f6' }
          }}
        >
          Liên Hệ Ngay
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
