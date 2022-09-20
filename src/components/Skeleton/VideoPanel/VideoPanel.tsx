import React from 'react';

// packages
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export const VideoPanel = ({ containerStyle }: { containerStyle?: string }) => {
  return (
    <div className={containerStyle}>
      <Box sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
        <Skeleton
          className='aspect-video'
          variant='rectangular'
          width='100%'
          height={204}
        />
        <Box sx={{ pt: 0.5, display: 'flex' }}>
          <Skeleton
            animation='wave'
            variant='circular'
            width={40}
            height={40}
            sx={{ minHeight: 40, minWidth: 40, marginRight: 1 }}
          />
          <div className='w-full'>
            <Skeleton />
            <Skeleton width='60%' />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default VideoPanel;
