import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import {
  CalendarToday,
  ViewModule,
  ViewList,
  CalendarViewMonth,
  FilterList,
  MoreVert,
  AccessTime,
} from '@mui/icons-material';

const AttendanceSummary = () => {
  // Header timer state
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  // Footer summary data
  const summaryItems = [
    { label: 'Payable Days', value: '3 Days', color: '#f1c40f' },
    { label: 'Present', value: '1 Days', color: '#2ecc71' },
    { label: 'On Duty', value: '0 Days', color: '#9b59b6' },
    { label: 'Paid leave', value: '0 Days', color: '#f39c12' },
    { label: 'Holidays', value: '0 Days', color: '#3498db' },
    { label: 'Weekend', value: '2 Days', color: '#e67e22' },
  ];

  return (
    <>
      {/* HeaderBar */}
      <Box
        sx={{
          position: 'fixed',
          top: 120,
          left: 80,
          right: 80,
          width: '90%',
          backgroundColor: '#f4f6f8',
          px: 2,
          py: 1,
          zIndex: 1000,
          boxShadow: 2,
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday fontSize="small" />
            <Typography fontWeight="bold">01-Jun-2025 - 07-Jun-2025</Typography>
          </Box>

          <ToggleButtonGroup size="small" exclusive>
            <ToggleButton value="grid">
              <ViewModule />
            </ToggleButton>
            <ToggleButton value="list">
              <ViewList />
            </ToggleButton>
            <ToggleButton value="calendar">
              <CalendarViewMonth />
            </ToggleButton>
            <ToggleButton value="filter">
              <FilterList />
            </ToggleButton>
            <ToggleButton value="more">
              <MoreVert />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box
          mt={2}
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography fontWeight="bold">General [ 9:00 AM - 6:00 PM ]</Typography>

          <TextField
            placeholder="Add notes for check-out"
            variant="outlined"
            size="small"
            sx={{ flex: 1, mx: 2 }}
          />

          <Button
            variant="contained"
            color="error"
            startIcon={<AccessTime />}
            sx={{ borderRadius: 10, fontWeight: 'bold' }}
          >
            Check-out {formatTime(time)} Hrs
          </Button>
        </Box>
      </Box>

      {/* Main content placeholder */}
      <main
        style={{
          marginTop: 180, // spacing for fixed header
          marginBottom: 150, // spacing for fixed footer
          padding: '0 80px',
        }}
      >
        <Typography variant="h4" mb={2}>
          Attendance Summary Content Here
        </Typography>
        {/* Your attendance summary main content goes here */}
      </main>

      {/* FooterBar */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 80,
          right: 80,
          backgroundColor: '#f4f6f8',
          p: 2,
          boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          zIndex: 1000,
          borderRadius: '8px 8px 0 0',
        }}
      >
        {/* Time scale */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          {[
            '09AM',
            '10AM',
            '11AM',
            '12PM',
            '01PM',
            '02PM',
            '03PM',
            '04PM',
            '05PM',
            '06PM',
          ].map((hour, i) => (
            <Typography key={i} variant="body2" sx={{ flex: 1, textAlign: 'center' }}>
              {hour}
            </Typography>
          ))}
        </Box>

        {/* Summary bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {/* Days / Hours labels */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mr: 2,
              minWidth: 60,
            }}
          >
            <Typography variant="body2" fontWeight="bold" mb={1}>
              Days
            </Typography>
            <Typography
              variant="body2"
              sx={{ backgroundColor: '#e6e6f0', px: 2, borderRadius: 1 }}
            >
              Hours
            </Typography>
          </Box>

          {/* Summary items */}
          {summaryItems.map((item, i) => (
            <Box
              key={i}
              sx={{
                borderLeft: `4px solid ${item.color}`,
                px: 1.5,
                mr: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: 90,
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}

          {/* Shift time */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              minWidth: 180,
              justifyContent: 'center',
            }}
          >
            General [ 9:00 AM - 6:00 PM ]
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AttendanceSummary;
