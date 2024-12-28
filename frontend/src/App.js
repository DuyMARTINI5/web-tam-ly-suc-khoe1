import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import ArticleDetail from './pages/ArticleDetail';
import ArticleList from './pages/ArticleList';
import Blog from './pages/Blog';
import BookDetail from './pages/BookDetail';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import ManageArticles from './pages/ManageArticles';
import ManageComments from './pages/ManageComments';
import ManageUsers from './pages/ManageUsers';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import React from 'react';
import Register from './pages/Register';
import Resources from './pages/Resources';
import ResultPage from './pages/ResultPage';
import TestDetail from './pages/TestDetail';
import TestList from './pages/TestList';
import UserProfile from './pages/UserProfile';
import UserSettings from './pages/UserSettings';

function App() {
  const role = localStorage.getItem('role');

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Kiểm tra vai trò và hiển thị các route phù hợp */}
          {role === 'admin' && (
            <>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/articles" element={<ManageArticles />} />
              <Route path="/admin/comments" element={<ManageComments />} />
            </>
          )}

          {role === 'user' && (
            <>
              <Route path="/user/dashboard" element={<UserProfile />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/settings" element={<UserSettings />} />
            </>
          )}

          {/* Trang công khai */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Các trang khác */}
          <Route path="/tests" element={<TestList />} />
          <Route path="/tests/:id" element={<TestDetail />} />
          <Route path="/test/result" element={<ResultPage />} />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BookList />
              </ProtectedRoute>
            }
          />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
       
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
