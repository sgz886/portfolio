import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import './Loading.scss';

function Loading() {
  return (
    <Box className='loading'>
      <CircularProgress color='inherit' />
    </Box>
  );
}

export default Loading;
