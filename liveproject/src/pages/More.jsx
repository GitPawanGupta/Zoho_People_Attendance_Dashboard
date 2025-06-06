import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Link as MuiLink,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Preferences from './Preferences'; // Import your Preferences popup component

const More = () => {
  const [openPreferences, setOpenPreferences] = useState(false);

  const services = [
    { name: 'Employee Management', path: '/employee-management', icon: <StarBorderIcon /> },
    { name: 'HR Letters', path: '/hr-letters', icon: <StarBorderIcon /> },
    { name: 'Travel', path: '/travel', icon: <StarBorderIcon /> },
    { name: 'Tasks', path: '/tasks', icon: <TaskAltIcon /> },
    {
      name: 'Compensation',
      path: '/compensation',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/10526/10526729.png"
          alt="Compensation"
          width="20"
        />
      )
    },
    {
      name: 'General',
      path: '/general',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
          alt="General"
          width="20"
        />
      )
    },
    {
      name: 'Offboarding',
      path: '/offboarding',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/12698/12698597.png"
          alt="Offboarding"
          width="20"
        />
      )
    }
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', minHeight: '60vh' ,mt: 12}}>
      <TextField
        variant="outlined"
        placeholder="Search Services"
        fullWidth
        sx={{ mb: 3, backgroundColor: 'white' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          More Services
        </Typography>
        <MuiLink
          component="button"
          onClick={() => setOpenPreferences(true)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#007BFF',
            cursor: 'pointer'
          }}
        >
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

      {/* Preferences Popup */}
      <Preferences open={openPreferences} onClose={() => setOpenPreferences(false)} />
    </Box>
  );
};

export default More;
