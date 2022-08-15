import React from 'react';
import { Link } from 'react-router-dom';

// component
import AvatarWithName from '../Avatar';

// packages
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

// icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// utils
import { numberWithCommas } from '@/utils/texts';

function VideoPanel({
  videoId,
  thumbnail,
  title,
  views,
  likes,
  time,
}: {
  videoId: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  time: string;
}) {
  return (
    <Link to={`/watch?id=${videoId}`}>
      <Card
        sx={{
          backgroundColor: 'var(--primary-800)',
          cursor: 'pointer',
        }}
      >
        <div className='h-[212px] relative overflow-hidden'>
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
            <h5 className='text-s font-semi-bold text-neutral-100'>{title}</h5>
            <div className='flex items-center text-neutral-400 mt-2'>
              <p className='flex items-center'>
                <span className='mr-1'>
                  <RemoveRedEyeIcon />
                </span>
                {numberWithCommas(views)}
              </p>
              <p className='flex items-center ml-5'>
                <span className='mr-1'>
                  <ThumbUpIcon />
                </span>
                {numberWithCommas(likes)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VideoPanel;
