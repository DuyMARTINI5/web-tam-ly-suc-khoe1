import { Box, Button, Card, CardContent, Container, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Modal, Select, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [confirmationModal, setConfirmationModal] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    setSnackbarMessage('Đã xóa sản phẩm khỏi giỏ hàng.');
    setOpenSnackbar(true);
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      setSnackbarMessage('Vui lòng chọn phương thức thanh toán!');
      setOpenSnackbar(true);
      return;
    }

    // Hiển thị thông tin khách hàng và đặt hàng thành công
    setConfirmationModal(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleBackToHome = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 4 }}>
        Giỏ Hàng Và Thanh Toán
      </Typography>
      {cart.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, boxShadow: 3 }}>
                  <img
                    src={item.image || 'https://via.placeholder.com/100'}
                    alt={item.title}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '16px' }}
                  />
                  <CardContent sx={{ flex: '1' }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Số lượng: {item.quantity}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                      Giá: {(item.price * item.quantity).toLocaleString()} VND
                    </Typography>
                  </CardContent>
                  <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ marginY: 3 }} />
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6">Tổng cộng: {total.toLocaleString()} VND</Typography>
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Địa chỉ giao hàng"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Quốc gia"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Mã bưu điện"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Họ và tên"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Số thẻ thanh toán"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Phương thức thanh toán</InputLabel>
              <Select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value="credit_card">Thẻ tín dụng</MenuItem>
                <MenuItem value="qr_code">Quét mã QR</MenuItem>
                <MenuItem value="cash">Thanh toán khi nhận hàng</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {paymentMethod === 'qr_code' && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px dashed #ccc',
                padding: 2,
                borderRadius: '8px',
                marginBottom: 3,
              }}
            >
              <img
                src="/assets/images/qr-code.png"
                alt="QR Code"
                style={{ width: '150px', height: '150px' }}
              />
            </Box>
          )}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              sx={{ paddingX: 4, marginBottom: 2 }}
            >
              Hoàn Tất Thanh Toán
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', marginTop: 5 }}>
          Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm để tiếp tục mua sắm!
        </Typography>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />

      <Modal open={confirmationModal} onClose={handleBackToHome} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: '500px', padding: 4, textAlign: 'center', boxShadow: 5, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Xác Nhận Đặt Hàng
          </Typography>
          <Box sx={{ textAlign: 'left', marginBottom: 3 }}>
            <Typography variant="h6">Thông tin khách hàng</Typography>
            <Typography>Tên: <strong>{fullName || 'Không có thông tin'}</strong></Typography>
            <Typography>Số điện thoại: <strong>{phoneNumber || 'Không có thông tin'}</strong></Typography>
            <Typography>Địa chỉ: <strong>{address || 'Không có thông tin'}, {country || 'Không có thông tin'}, {postalCode || 'Không có thông tin'}</strong></Typography>
          </Box>
          <Box sx={{ textAlign: 'left', marginBottom: 3 }}>
            <Typography variant="h6">Thông tin thanh toán</Typography>
            <Typography>Tổng tiền: <strong>{total ? total.toLocaleString() + ' VND' : 'Không có thông tin'}</strong></Typography>
            <Typography>Phương thức thanh toán: <strong>{
              paymentMethod === 'credit_card' ? 'Thẻ tín dụng' : paymentMethod === 'qr_code' ? 'Quét mã QR' : 'Thanh toán khi nhận hàng'
            }</strong></Typography>
            {paymentMethod === 'credit_card' && (
              <Typography>Số thẻ: <strong>{cardNumber ? cardNumber.replace(/\d(?=\d{4})/g, '*') : 'Không có thông tin'}</strong></Typography>
            )}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 4 }}>
            Đơn hàng sẽ được giao trong vòng <strong>2 ngày</strong>.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleBackToHome}>Về Trang Chủ</Button>
        </Card>
      </Modal>
    </Container>
  );
};

export default Cart;
