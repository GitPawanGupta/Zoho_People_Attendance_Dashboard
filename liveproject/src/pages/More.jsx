// src/pages/More.jsx
import React from 'react';
import { Box, Typography, TextField, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const More = () => {
  const services = [
    { name: 'Employee Engagement', path: '/employee-engagement', icon: <img src="https://cdn-icons-png.flaticon.com/128/10410/10410662.png" alt="icon" width="20" /> },
    { name: 'HR Letters', path: '/hr-letters', icon: <StarBorderIcon /> },
    { name: 'Travel', path: '/travel', icon: <StarBorderIcon /> },
    { name: 'Tasks', path: '/tasks', icon: <TaskAltIcon /> },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <TextField
        variant="outlined"
        placeholder="Search Services"
        fullWidth
        sx={{ mb: 3, backgroundColor: 'white' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">More Services</Typography>
        <MuiLink component={Link} to="/preferences" sx={{ display: 'flex', alignItems: 'center', color: '#007BFF' }}>
          <SettingsIcon fontSize="small" sx={{ mr: 0.5 }} />
          Preferences
        </MuiLink>
      </Box>

      {services.map(({ name, path, icon }) => (
        <Box
          key={name}
          component={Link}
          to={path}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: '#fff',
            padding: 2,
            borderRadius: 2,
            mb: 1,
            textDecoration: 'none',
            color: '#333',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#f0f0f0'
            }
          }}
        >
          {icon}
          <Typography variant="body1">{name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default More;
