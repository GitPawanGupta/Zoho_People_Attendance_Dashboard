import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Attendance = () => {
  const location = useLocation();

  // Set tab value for highlighting
  const tabValue = location.pathname.includes("AttendanceSummary") ? 0 : false;

  return (
    <Box>
      {/* Top App Bar */}
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
              to="/attendance/AttendanceSummary" // ✅ Fixed destination
              variant="h6"
              sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              My Data
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

      {/* Tabs */}
      <Box
        position="fixed"
        sx={{
          top: "60px",
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #ccc",
          height: "50px",
          pl: 2,
          pt: 1,
          left: 0
          
        }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Attendance Summary" component={Link} to="/attendance/AttendanceSummary" />
        </Tabs>
      </Box>

      {/* Render Child Route */}
      <Box sx={{ mt: 12 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Attendance;
