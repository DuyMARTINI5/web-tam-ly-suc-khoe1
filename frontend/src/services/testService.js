import api from '../utils/api';

// Hàm lấy danh sách bài test
export const fetchTests = async () => {
  const response = await api.get('/tests');
  return response.data;
};

// Hàm lấy chi tiết một bài test
export const fetchTestDetail = async (testId) => {
  const response = await api.get(`/tests/${testId}`);
  return response.data;
};

// Hàm gửi kết quả bài test
export const submitTest = async (testId, answers) => {
  const response = await api.post(`/tests/${testId}/submit`, { answers });
  return response.data;
};
