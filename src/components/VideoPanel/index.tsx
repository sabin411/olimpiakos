import React from 'react';

// component
import IconWithText from '@/components/IconWithText';

// packages
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

// icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// types
import { videoPanelProps } from './types';

function VideoPanel({
  time,
  title,
  views,
  likes,
  videoId,
  thumbnail,
  containerStyle,
}: videoPanelProps) {
  return (
    <Link to={`/watch?id=${videoId}`} className={`${containerStyle}`}>
      <Card
        sx={{
          backgroundColor: 'var(--primary-800)',
          cursor: 'pointer',
        }}
      >
        <div className='aspect-video relative overflow-hidden'>
          <img
            src={thumbnail}
            className='w-full h-full object-cover peer hover:scale-105 transition-all duration-200'
            alt={title + 'thumbnail'}
          />
          <p className='absolute opacity-0 right-0 bottom-1 px-1 bg-primary-800 text-neutral-300 transition-all duration-200 peer-hover:opacity-80'>
            {time}
          </p>
        </div>
        <CardContent className='flex'>
          <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu91Flh7ObCO6aMLS5lzF4Z0xBYecb6hXLb26azOGyc=s176-c-k-c0x00ffffff-no-rj' />
          <div className='ml-2'>
            <h5 className='text-s font-semi-bold text-neutral-100 line-clamp-2'>
              {title}
            </h5>
            <div className='flex items-center text-neutral-400 mt-2'>
              <IconWithText
                Icon={RemoveRedEyeIcon}
                text={(views + 34544).toString()}
                containerStyle='!m-0 text-s'
                className='!text-p'
              />
              <IconWithText
                Icon={ThumbUpIcon}
                text={(likes + 87768).toString()}
                containerStyle='text-s ml-4'
                className='!text-p'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VideoPanel;
