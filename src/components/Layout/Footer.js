import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Instagram, YouTube, Twitter, GitHub } from '@mui/icons-material';


const Footer = () => {
  const iconStyle = {
    fontSize: 42,
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)', // Add a slight scaling effect on hover
    },
  };

  return (
    <Stack alignItems="center" sx={{ bgcolor: "#1A1110", color: 'white', p: 3 }}>
      <Stack direction="row" spacing={5} sx={{ marginBottom: 5 }}>
        <Instagram sx={iconStyle} />
        <YouTube sx={iconStyle} />
        <Twitter sx={iconStyle} />
        <GitHub sx={iconStyle} />
      </Stack>
      <Typography variant="h6">
        All Rights Reserved &copy; Tech Pvt Ltd.
      </Typography>
    </Stack>
  );
};

export default Footer;

