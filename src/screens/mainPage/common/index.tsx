import React from 'react';

// packages
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

// types
import { LatestNewsProps, LatestPhotoWrapperProps } from './types';

export function LatestNews({
  news,
  timeStamp,
  containerStyle,
}: LatestNewsProps) {
  return (
    <div className={containerStyle}>
      <p className='text-neutral-300 line-clamp-2'>{news}</p>
      <p className='text-neutral-500 mt-1'>
        {formatDistanceToNowStrict(timeStamp, { addSuffix: true })}
      </p>
    </div>
  );
}

export const PhotoWrapper = ({
  image,
  description,
  timeStamp,
  containerStyle,
}: LatestPhotoWrapperProps) => {
  return (
    <div className={containerStyle}>
      <div className='rounded-lg overflow-hidden h-[166px] w-full'>
        <img
          className='w-full h-full object-cover'
          src={image}
          alt={image + description}
        />
      </div>
      <p className='text-neutral-300 line-clamp-2 mt-2'>{description}</p>
      <p className='text-neutral-500'>
        {formatDistanceToNowStrict(timeStamp, { addSuffix: true })}
      </p>
    </div>
  );
};
