import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const tabValue = location.pathname === "/calendar" ? 2 :
                   location.pathname === "/dashboard" ? 1 : 0;

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center"
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              My Space
            </Typography>
            <Typography
              component={Link}
              to="/organization"
              variant="h6"
              sx={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }}>
              Organization
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>P</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tabs Section */}
      <Box position="fixed"
        sx={{
          top: "60px",
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ccc",
          height: "40px",
          pl: 2,
          pt: 1
        }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Overview" component={Link} to="/" />
          <Tab label="Dashboard" component={Link} to="/dashboard" />
          <Tab label="Calendar" component={Link} to="/calendar" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;
