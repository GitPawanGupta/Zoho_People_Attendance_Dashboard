// src/pages/Profile.jsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const InfoCard = ({ icon, title, value }) => (
  <Grid item xs={12} md={4}>
    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
      {icon}
      <Box>
        <Typography variant="body2" color="textSecondary">{title}</Typography>
        <Typography>{value}</Typography>
      </Box>
    </Paper>
  </Grid>
);

const SectionCard = ({ title }) => (
  <Paper sx={{ p: 2, my: 2 }}>
    <Typography variant="h6">{title}</Typography>
    <Box textAlign="center" sx={{ py: 4 }}>
      <AddCircleOutlineIcon color="primary" sx={{ fontSize: 40 }} />
      <Typography variant="body1" sx={{ mt: 1 }}>Add {title}</Typography>
    </Box>
  </Paper>
);

const InfoBox = ({ label, value }) => (
  <Grid item xs={12} md={6}>
    <Box sx={{ p: 1, borderBottom: '1px solid #e0e0e0' }}>
      <Typography variant="body2" color="textSecondary">{label}</Typography>
      <Typography>{value}</Typography>
    </Box>
  </Grid>
);

const Profile = () => {
  return (
    <Box sx={{ px: 3, pt: 10, pb: 4, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      
      {/* Top Info Cards */}
      <Grid container spacing={2}>
        <InfoCard icon={<AccessibilityIcon />} title="Shift" value="General" />
        <InfoCard icon={<AccessTimeIcon />} title="Time zone" value="(GMT+05:30)" />
        <InfoCard icon={<EmailIcon />} title="Email ID" value="erpawan459@gmail.com" />
      </Grid>

      {/* About & Tags */}
      <SectionCard title="About" />
      <SectionCard title="Tags" />

      {/* Basic Information */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Basic Information</Typography>
        <Grid container>
          <InfoBox label="Employee ID" value="PawanK" />
          <InfoBox label="Nick name" value="-" />
          <InfoBox label="First Name" value="Pawan" />
          <InfoBox label="Email address" value="erpawan459@gmail.com" />
          <InfoBox label="Last Name" value="Kumar" />
        </Grid>
      </Paper>

      {/* Work Information */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Work Information</Typography>
        <Grid container>
          <InfoBox label="Department" value="-" />
          <InfoBox label="Zoho Role" value="Team member" />
          <InfoBox label="Location" value="-" />
          <InfoBox label="Employment Type" value="-" />
          <InfoBox label="Designation" value="-" />
          <InfoBox label="Employee Status" value="Active" />
          <InfoBox label="Source of Hire" value="-" />
          <InfoBox label="Date of Joining" value="-" />
        </Grid>
      </Paper>

      {/* Hierarchy Information */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Hierarchy Information</Typography>
        <Grid container>
          <InfoBox label="Reporting Manager" value="-" />
        </Grid>
      </Paper>

      {/* Personal Details */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Personal Details</Typography>
        <Grid container>
          <InfoBox label="Date of Birth" value="-" />
          <InfoBox label="Ask me about/Expertise" value="-" />
          <InfoBox label="Marital Status" value="-" />
          <InfoBox label="About Me" value="-" />
        </Grid>
      </Paper>

      {/* Identity Information */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Identity Information</Typography>
        <Grid container>
          <InfoBox label="UAN" value="************" />
          <InfoBox label="PAN" value="************" />
          <InfoBox label="Aadhaar" value="************" />
        </Grid>
      </Paper>

      {/* Contact Details */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Contact Details</Typography>
        <Grid container>
          <InfoBox label="Work Phone Number" value="-" />
          <InfoBox label="Personal Mobile Number" value="-" />
          <InfoBox label="Extension" value="-" />
          <InfoBox label="Personal Email Address" value="-" />
        </Grid>
      </Paper>

      {/* System Fields */}
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>System Fields</Typography>
        <Grid container>
          <InfoBox label="Created Time" value="-" />
          <InfoBox label="Modified Time" value="-" />
          <InfoBox label="Created By" value="-" />
          <InfoBox label="Modified By" value="-" />
        </Grid>
      </Paper>

    </Box>
  );
};

export default Profile;
