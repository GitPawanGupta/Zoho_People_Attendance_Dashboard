import React from 'react';
import { Box, Typography } from '@mui/material';

const EmployeeManagement = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f1f4f8',
        padding: '24px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e0e6ed',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '300px'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/11403/11403754.png"
          alt="Empty State"
          style={{ width: '120px', marginBottom: '20px' }}
        />
        <Typography variant="h6" fontWeight={500}>
          No surveys are available at the moment
        </Typography>
      </Box>
    </Box>
  );
};

export default EmployeeManagement;
