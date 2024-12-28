import { AppBar, Avatar, Box, Button, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = storedCart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(itemCount);
    };

    // Initial count
    updateCartCount();

    // Listener for cart updates
    const cartUpdateListener = () => updateCartCount();
    window.addEventListener('cartUpdated', cartUpdateListener);

    return () => {
      window.removeEventListener('cartUpdated', cartUpdateListener);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/articles?search=${e.target.value}`);
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: 'none', backdropFilter: 'blur(10px)', marginBottom: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            style={{ height: '40px', borderRadius: '8px', marginRight: '16px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}
          />
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: '#4A4A4A' }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#4A4A4A', fontWeight: 'bold' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tâm Lý Sức Khỏe</Link>
          </Typography>
        </Box>
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250, padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Menu
            </Typography>
            <List>
              {[{ path: '/', label: 'Trang Chủ' },
                { path: '/about', label: 'Giới Thiệu' },
                { path: '/articles', label: 'Bài Viết' },
                { path: '/tests', label: 'Bài Test Tâm Lý' },
                { path: '/books', label: 'Cửa Hàng Sách' },
                { path: '/contact', label: 'Liên Hệ' }].map((item, index) => (
                <ListItem key={index} button component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
              {user ? (
                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Đăng Xuất" />
                </ListItem>
              ) : (
                <>
                  <ListItem button component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="Đăng Nhập" />
                  </ListItem>
                  <ListItem button component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary="Đăng Ký" />
                  </ListItem>
                </>
              )}
            </List>
          </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
          <SearchIcon sx={{ marginRight: 1, color: '#4A4A4A' }} />
          <InputBase
            placeholder="Tìm kiếm bài viết..."
            onKeyDown={handleSearch}
            sx={{
              padding: '5px 10px',
              borderRadius: '25px',
              backgroundColor: '#f5f5f5',
              width: { xs: '150px', sm: '250px', md: '350px' },
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': { backgroundColor: '#e0e0e0' }
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to="/cart" color="inherit" sx={{ fontWeight: 'bold' }}>
            Giỏ Hàng ({cartCount})
          </Button>
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={user.avatar || '/assets/images/avatar/default-avatar.jpg'}
                alt={user.name}
                sx={{ cursor: 'pointer' }}
                onClick={handleMenuOpen}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ marginTop: 1 }}
              >
                <MenuItem onClick={handleMenuClose}>Hồ Sơ</MenuItem>
                <MenuItem onClick={handleLogout}>Đăng Xuất</MenuItem>
              </Menu>
              <Typography sx={{ color: '#4A4A4A', fontWeight: 'bold' }}>{user.name}</Typography>
            </Box>
          ) : (
            <>
              <Button sx={{ color: '#4A4A4A', display: { xs: 'none', sm: 'block' }, '&:hover': { color: '#333' } }} component={Link} to="/login">Đăng Nhập</Button>
              <Button sx={{ color: '#4A4A4A', display: { xs: 'none', sm: 'block' }, '&:hover': { color: '#333' } }} component={Link} to="/register">Đăng Ký</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
