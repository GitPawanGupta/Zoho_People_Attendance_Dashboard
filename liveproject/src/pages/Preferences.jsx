import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Switch,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupIcon from '@mui/icons-material/Group';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FolderIcon from '@mui/icons-material/Folder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Preferences = ({ open, onClose }) => {
  const services = [
    { name: 'Home', icon: <HomeIcon />, locked: true },
    { name: 'Onboarding', icon: <Diversity3Icon /> },
    { name: 'Employee', icon: <GroupIcon /> },
    { name: 'Leave Tracker', icon: <BeachAccessIcon /> },
    { name: 'Attendance', icon: <EventAvailableIcon /> },
    { name: 'Time Tracker', icon: <AccessTimeIcon /> },
    { name: 'Performance', icon: <EmojiEventsIcon /> },
    { name: 'Files', icon: <FolderIcon /> },
    { name: 'Employee Engagement', icon: <Diversity3Icon /> },
    { name: 'HR Letters', icon: <StarBorderIcon /> },
    { name: 'Travel', icon: <StarBorderIcon /> },
    { name: 'Tasks', icon: <TaskAltIcon /> },
    {
      name: 'Compensation',
      icon: <img src="https://cdn-icons-png.flaticon.com/128/10526/10526729.png" alt="icon" width="20" />
    },
    {
      name: 'General',
      icon: <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="icon" width="20" />
    },
    {
      name: 'Offboarding',
      icon: <img src="https://cdn-icons-png.flaticon.com/128/12698/12698597.png" alt="icon" width="20" />
    },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}
      >
        Preferences
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {services.map(({ name, icon, locked }, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1.5,
              borderRadius: 2,
              backgroundColor: '#fff',
              mb: 1,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {icon}
              <Typography>{name}</Typography>
            </Box>
            {locked ? (
              <Typography sx={{ fontSize: 12, color: 'gray' }}>🔒</Typography>
            ) : (
              <Switch defaultChecked />
            )}
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default Preferences;
