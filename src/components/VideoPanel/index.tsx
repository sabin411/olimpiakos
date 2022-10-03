import React from 'react';

// packages
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';

// types
import { videoPanelProps } from './types';

// utils
import { displayImage } from '@/utils/services';

function VideoPanel({
  time,
  title,
  views,
  likes,
  videoId,
  thumbnail,
  containerStyle,
  embedId,
}: videoPanelProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch?id=${videoId}&embedId=${embedId}`);
  };
  return (
    <button onClick={handleClick} className={`${containerStyle}`}>
      <Card
        sx={{
          backgroundColor: 'var(--primary-800)',
          cursor: 'pointer',
        }}
      >
        <div className='aspect-video relative overflow-hidden'>
          <img
            src={displayImage(thumbnail)}
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
            <h5 className='text-p font-semi-bold text-neutral-100 text-left line-clamp-2'>
              {title}
            </h5>
            <div className='flex items-center text-neutral-400 mt-2 gap-x-2'>
              <div>
                <p>{views.toString()} Views</p>
              </div>
              <p>.</p>
              <div>
                <p>{likes.toString()} Likes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

export default VideoPanel;
