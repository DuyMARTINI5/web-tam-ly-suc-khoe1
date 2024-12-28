import { Box, Button, Card, CardContent, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import api from '../utils/api';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [commentMessage, setCommentMessage] = useState('');
  const [rating, setRating] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5001/api/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log('Dữ liệu từ API:', data); // Log dữ liệu
        setArticles(data);
      })
      .catch((error) => console.error('Lỗi fetch:', error));
  }, []);
  

  const handleDelete = async (id) => {
    try {
      await api.delete(`/articles/${id}`);
      setArticles(articles.filter(article => article._id !== id));
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa bài viết!', error);
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredArticles.slice(itemOffset, itemOffset + itemsPerPage);

  const handleAddComment = async (articleId) => {
    try {
      await api.post(`/articles/${articleId}/comments`, {
        name: commentName,
        message: commentMessage,
      });
      const updatedArticles = articles.map(a => {
        if (a._id === articleId) {
          return { ...a, comments: [...a.comments, { name: commentName, message: commentMessage }] };
        }
        return a;
      });
      setArticles(updatedArticles);
      setCommentName('');
      setCommentMessage('');
    } catch (error) {
      console.error('Có lỗi xảy ra khi thêm bình luận!', error);
    }
  };

  const handleAddRating = async (articleId) => {
    try {
      await api.post(`/articles/${articleId}/rating`, { rating });
      const updatedArticles = articles.map(a => {
        if (a._id === articleId) {
          return { ...a, rating };
        }
        return a;
      });
      setArticles(updatedArticles);
      setRating(0);
    } catch (error) {
      console.error('Có lỗi xảy ra khi thêm đánh giá!', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Danh sách bài viết
      </Typography>
      <TextField
        label="Tìm kiếm bài viết"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      {currentItems.map((article) => (
        <Card sx={{ marginBottom: 3, boxShadow: 3 }} key={article._id}>
          <CardContent>
            <Typography variant="h5">{article.title}</Typography>
            <Typography variant="body2">{article.content}</Typography>
            {article.comments.map((comment, index) => (
              <Box key={index} sx={{ marginBottom: 1 }}>
                <Typography variant="subtitle2">{comment.name}: {comment.message}</Typography>
              </Box>
            ))}
            <TextField
              label="Tên"
              variant="outlined"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Nội dung bình luận"
              variant="outlined"
              value={commentMessage}
              onChange={(e) => setCommentMessage(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={() => handleAddComment(article._id)} sx={{ marginTop: 1 }}>
              Thêm Bình Luận
            </Button>
            <TextField
              label="Điểm đánh giá"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={() => handleAddRating(article._id)} sx={{ marginTop: 1 }}>
              Thêm Đánh Giá
            </Button>
            <Link to={`/edit/${article._id}`}>
              <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
                Chỉnh sửa
              </Button>
            </Link>
            <Button onClick={() => handleDelete(article._id)} variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
              Xóa
            </Button>
          </CardContent>
        </Card>
      ))}
      <ReactPaginate
        nextLabel="Tiếp theo >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(filteredArticles.length / itemsPerPage)}
        previousLabel="< Trước"
        containerClassName="pagination"
        activeClassName="active"
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Bài viết đã được xóa thành công!"
      />
    </Box>
  );
};

export default ArticleList;
