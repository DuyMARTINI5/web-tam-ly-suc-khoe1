import api from '../utils/api';

// Hàm gọi API đăng ký người dùng
export const registerUser = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};

// Hàm gọi API đăng nhập người dùng
export const loginUser = async (credentials) => {
  const response = await api.post('/login', credentials);
  localStorage.setItem('token', response.data.token); // Lưu token vào localStorage
  return response.data;
};
