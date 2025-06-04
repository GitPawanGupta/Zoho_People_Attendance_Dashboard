import React from 'react';
import { Box } from '@mui/material';

const TopBanner = () => {
  return (
    <Box
      sx={{
        height: '200px',
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '4px solid #ccc',
      }}
    />
  );
};

export default TopBanner;
