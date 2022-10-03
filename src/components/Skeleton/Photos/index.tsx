import React from 'react';

// packages
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

const Photos = () => {
  return (
    <Box sx={{ width: '100%', marginRight: 0.5, my: '1.5rem' }}>
      <Box>
        <Skeleton variant='rectangular' width='100%' height={166} />
      </Box>
      <Box width='100%' className='my-2'>
        <Skeleton variant='rectangular' width='100%' />
      </Box>
      <Skeleton
        variant='rectangular'
        width='70%'
        className='inline-block my-2'
      />
      <div>
        <Skeleton variant='rectangular' width='60px' />
      </div>
    </Box>
  );
};

export default Photos;
