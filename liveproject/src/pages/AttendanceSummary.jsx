import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
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

const summaryItems = [
  { label: 'Payable Days', value: '3 Days', color: '#f1c40f' },
  { label: 'Present', value: '1 Days', color: '#2ecc71' },
  { label: 'On Duty', value: '0 Days', color: '#9b59b6' },
  { label: 'Paid leave', value: '0 Days', color: '#f39c12' },
  { label: 'Holidays', value: '0 Days', color: '#3498db' },
  { label: 'Weekend', value: '2 Days', color: '#e67e22' },
];

const attendanceData = [
  { day: 'Sun', date: '01', status: 'Weekend', color: '#f1c40f', hours: '00:00' },
  { day: 'Mon',date: '02',status: 'Present',color: '#2ecc71',checkIn: '11:08 AM',checkOut: '10:46 PM',hours: '11:38'},
  { day: 'Tue', date: '03', status: 'Absent', color: '#e74c3c', hours: '00:00' },
  { day: 'Wed',date: '04',status: 'Present',color: '#2ecc71',checkIn: '11:08 AM',checkOut: '10:46 PM',hours: '11:38'},
  { day: 'Thu', date: '05', status: 'Absent', color: '#e74c3c', hours: '00:00' },
  { day: 'Fri',date: '06',status: 'Present',color: '#2ecc71',checkIn: '10:08 AM',checkOut: '09:00 PM',hours: '10:52'},
  { day: 'Sat', date: '07', status: 'Weekend', color: '#e74c3c', hours: '00:00' },
];

const AttendanceSummary = () => {
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

  return (
    <>
      {/* Header */}
      <Box sx={{ position: 'fixed', top: 120, left: 80, right: 80, zIndex: 1000 }}>
        <Box
          sx={{
            backgroundColor: '#f4f6f8',
            px: 2,
            py: 1,
            boxShadow: 2,
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography fontWeight="bold">General [ 9:00 AM - 6:00 PM ]</Typography>
            <TextField placeholder="Add notes for check-out" size="small" sx={{ mx: 2, flex: 1 }} />
            <Button variant="contained" color="error" startIcon={<AccessTime />}>
              Check-out {formatTime(time)} Hrs
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ mt: 33, mb: 15, px: 5, position: 'relative', minWidth: 1300 }}>
        {attendanceData.map((item, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ width: 80 }}>
              <Typography fontWeight="bold">{item.day}</Typography>
              <Typography>{item.date}</Typography>
            </Box>
            <Box sx={{ flex: 1, position: 'relative' }}>
              <Box
                sx={{
                  height: 2,
                  backgroundColor: item.color,
                  position: 'absolute',
                  top: '50%',
                  left: 100,
                  right: 100,
                }}
              />
              {item.status !== 'Present' && (
                <Box sx={{ position: 'absolute', top: -10, left: '50%' }}>
                  <Typography
                    variant="caption"
                    sx={{ backgroundColor: '#fff', px: 1, border: `1px solid ${item.color}`, borderRadius: 1 }}
                  >
                    {item.status}
                  </Typography>
                </Box>
              )}
              {item.status === 'Present' && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                  <Box>
                    <Typography fontWeight="bold">{item.checkIn}</Typography>

                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{item.checkOut}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
            <Box sx={{ width: 100, textAlign: 'right' }}>
              <Typography fontWeight="bold">{item.hours}</Typography>
              <Typography variant="caption">Hrs worked</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 80,
          right: 80,
          backgroundColor: '#f4f6f8',
          p: 2,
          borderRadius: '8px 8px 0 0',
          boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          {[...Array(10)].map((_, i) => (
            <Typography key={i} variant="body2" textAlign="center">
              {`${9 + i}AM`.replace('12AM', '12PM')}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Box sx={{ mr: 2 }}>
            <Typography variant="body2" fontWeight="bold">
              Days
            </Typography>
            <Typography variant="body2" sx={{ backgroundColor: '#e6e6f0', px: 2, borderRadius: 1 }}>
              Hours
            </Typography>
          </Box>
          {summaryItems.map((item, i) => (
            <Box key={i} sx={{ borderLeft: `4px solid ${item.color}`, px: 2, mr: 2 }}>
              <Typography variant="body2" fontWeight="bold">
                {item.label}
              </Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
          <Box sx={{ fontWeight: 'bold', ml: 'auto' }}>General [ 9:00 AM - 6:00 PM ]</Box>
        </Box>
      </Box>
    </>
  );
};

export default AttendanceSummary;
