import api from '../utils/api';

// Hàm lấy danh sách bài viết
export const fetchArticles = async () => {
  const response = await api.get('/articles');
  return response.data;
};

// Hàm lấy chi tiết một bài viết
export const fetchArticleDetail = async (articleId) => {
  const response = await api.get(`/articles/${articleId}`);
  return response.data;
};
