import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Divider,
  Grid
} from '@mui/material';

const Home = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // time in seconds
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  const CheckIn = () => {
    setIsCheckedIn(true);
    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
  };

  const CheckOut = () => {
    setIsCheckedIn(false);
    clearInterval(timerRef.current);
  };
  const navigate = useNavigate();

  const tabs = ['Activities', 'Feeds', 'Profile', 'Approvals', 'Leave', 'Attendance', 'Time Logs', 'Timesheets', 'Jobs', 'Files', 'Career History'];

  const handleTabClick = (label) => {
    if (label === 'Profile') navigate('/profile');
    // Add other routes as needed
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  },
  
  
  []);

  return (
    <Box sx={{ pt: 10, px: 3, minHeight: "100vh", position:'relative', mt: 0, boxSizing: 'border-box' }}>
      
      {/* Background Banner */}
      <Box
        sx={{
          height: "200px",
          backgroundImage: 'url(https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd1?auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          mb: 2,
        }}
      />

      <Box sx={{ display: 'flex', gap: 2, mt: -10 }}>
        
        {/* Check-in Card */}
        <Paper sx={{ p: 2, width: 280, textAlign: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, mx: 'auto' }} />
          <Typography variant="h6">Pawan Kumar</Typography>
          <Typography color={isCheckedIn ? "green" : "gray"}>
            {isCheckedIn ? 'In' : 'Out'}
          </Typography>
          <Typography variant="h5" sx={{ my: 1 }}>
            {formatTime(elapsedTime)}
          </Typography>
          <Button
            variant="outlined"
            color={isCheckedIn ? 'error' : 'success'}
            onClick={isCheckedIn ? CheckOut : CheckIn}
          >
            {isCheckedIn ? 'Check-out' : 'Check-in'}
          </Button>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">Department Members</Typography>
          <Typography variant="caption">No Data Found</Typography>
        </Paper>

        {/* Main Content */}
        <Box flex={1}>
          
          {/* Header Tabs */}
          <Paper sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              

              {['Activities', 'Feeds', 'Profile', 'Approvals', 'Leave', 'Attendance', 'Time Logs', 'Timesheets', 'Jobs', 'Files', 'Career History'].map((label, index) => (
                <Grid item key={index}>
                  <Button
        onClick={() => handleTabClick(label)}
        variant={label === 'Activities' ? 'contained' : 'text'}
        size="small"
        sx={{
          fontWeight: label === 'Activities' ? 'bold' : 'normal',
          textTransform: 'none',
          backgroundColor: label === 'Activities' ? '#f0f4ff' : 'transparent',
          color: label === 'Activities' ? '#243874' : 'black',
          borderRadius: 3
        }}
      >
        {label}
      </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Welcome Section */}
          <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position:'relative' }}>
            <Box>
              <Typography variant="body1"><strong>Good Afternoon Pawan Kumar</strong></Typography>
              <Typography variant="body2">Have a productive day!</Typography>
            </Box>
            <Box>
              <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sun Icon" width={48} />
            </Box>
          </Paper>

          {/* Check-in Reminder */}
          <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff6f2' }}>
            <Box>
              <Typography variant="body1" sx={{ color: '#ff7043' }}><strong>Check-in reminder</strong></Typography>
              <Typography variant="body2">Your shift has already started</Typography>
            </Box>
            <Box>
              <Typography variant="body2">General</Typography>
              <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
            </Box>
          </Paper>

          {/* Work Schedule Section */}
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Work Schedule</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>08-Jun-2025 - 14-Jun-2025</Typography>
            
            <Paper sx={{ p: 2, backgroundColor: "#f1f1f1", mb: 2 }}>
              <Typography>General: 9:00 AM - 6:00 PM</Typography>
            </Paper>

            <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              {[
                { day: 'Sun', date: '08', status: 'Weekend' },
                { day: 'Mon', date: '09', status: 'Working' },
                { day: 'Tue', date: '10' },
                { day: 'Wed', date: '11' },
                { day: 'Thu', date: '12' },
                { day: 'Fri', date: '13' },
                { day: 'Sat', date: '14', status: 'Weekend' },
              ].map((item, index) => (
                <Grid item key={index} textAlign="center">
                  <Typography variant="caption" fontWeight="bold">{item.day}</Typography>
                  <Typography variant="body2">{item.date}</Typography>
                  {item.status === 'Weekend' && (
                    <Typography variant="caption" sx={{ color: 'orange' }}>Weekend</Typography>
                  )}
                </Grid>
              ))}
            </Grid>

            {/* Time Log Reminder */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#fffaf2', border: '1px solid #fde6cd', p: 2, borderRadius: 2 }}>
              <Box sx={{ bgcolor: '#fff1c2', p: 1.2, borderRadius: '50%' }}>
                <img src="https://img.icons8.com/ios/50/alarm.png" alt="Clock Icon" width={24} height={24} />
              </Box>
              <Typography sx={{ color: '#ff9800', fontWeight: 500 }}>
                You are yet to submit your time logs today!
              </Typography>
            </Box>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
};

export default Home;
