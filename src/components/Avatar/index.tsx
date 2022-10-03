import React from 'react';

// packages
import Avatar from '@mui/material/Avatar';

// types
import { AvatarWithNameProps } from './types';

// icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AvatarWithName: React.FC<AvatarWithNameProps> = ({
  text,
  likes,
  views,
  avatarSize,
  avatarImage,
  avatarStyle,
  showViewsAndLikes,
}) => {
  return (
    <div className='flex w-full'>
      <div
        className={`
      relative
      bg-primary-500 rounded-full text-primary-100 
      overflow-hidden
      ${avatarSize === 'sml' && 'h-10 w-10'}
      ${avatarSize === 'lrg' && 'h-60 w-60'}
      ${avatarStyle} 
      `}
        style={
          typeof avatarSize === 'number'
            ? {
                height: avatarSize,
                width: avatarSize,
                minWidth: avatarSize,
                minHeight: avatarSize,
              }
            : {}
        }
      >
        {avatarImage ? (
          <img src={avatarImage} alt='' />
        ) : (
          // <Avatar alt='Remy Sharp' src={avatarImage} sizes='44px' />
          <div className='h-full w-full flex items-center justify-center'>
            <AccountCircleIcon
              sx={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        )}
      </div>

      <div className={`${!showViewsAndLikes && 'flex items-center'}`}>
        <h4 className='ml-3 text-neutral-500'>{text}</h4>
        {showViewsAndLikes && (
          <div className='flex'>
            <p className={`text-p text-neutral-900`}>
              <VisibilityIcon /> {views}
            </p>
            <p className={`ml-3 text-s text-neutral-700`}>
              <ThumbUpIcon />
              {likes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarWithName;
