import React from 'react';
import { Box, Typography } from '@mui/material';


const Performance = () => {
  return (

    
    <Box
    
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        px: 2,
      }}
    >
      <Box
        component="img"
        src="https://drive.google.com/file/d/14abGar7vWKpUJocruEQUvTZugocG_Lp8/view?usp=drive_link"
        alt="Performance Illustration"
        sx={{
          width: 300,
          maxWidth: '100%',
        }}
      />
      
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
        The performance getting started process has not been completed yet.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Please contact administrator.
      </Typography>
    </Box>
  );
};

export default Performance;
