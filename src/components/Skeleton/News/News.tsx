import React from 'react';

// packages
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export const NewsSkeleton = ({
  containerStyle,
}: {
  containerStyle?: string;
}) => {
  return (
    <div className={containerStyle}>
      <Box sx={{ width: '100%', marginRight: 0.5, my: '1.5rem' }}>
        <div className='w-full'>
          <Skeleton width='100%' />
          <Skeleton width='50%' />
        </div>
        <Skeleton width='40px' />
      </Box>
    </div>
  );
};

export default NewsSkeleton;
