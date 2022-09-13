import React from 'react';

// packages
import { Link } from 'react-router-dom';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

// types
import { LatestNewsProps, LatestPhotoWrapperProps } from './types';

export function LatestNews({
  news,
  timeStamp,
  containerStyle,
  linkTo,
}: LatestNewsProps) {
  return (
    <Link to={linkTo} className={`inline-block group ${containerStyle}`}>
      <p className='text-neutral-300 line-clamp-2 group-hover:text-secondary-800'>
        {news}
      </p>
      <p className='text-neutral-500 mt-1'>
        {formatDistanceToNowStrict(timeStamp, { addSuffix: true })}
      </p>
    </Link>
  );
}

export const PhotoWrapper = ({
  image,
  description,
  timeStamp,
  containerStyle,
  linkTo,
}: LatestPhotoWrapperProps) => {
  return (
    <Link to={'/gallery'} className={`inline-block group ${containerStyle}`}>
      <div className='rounded-lg overflow-hidden h-[166px] w-full'>
        <img
          className='w-full h-full object-cover'
          src={image}
          alt={image + description}
        />
      </div>
      <p className='text-neutral-300 line-clamp-2 mt-2 group-hover:text-secondary-800'>
        {description}
      </p>
      <p className='text-neutral-500'>
        {formatDistanceToNowStrict(timeStamp, { addSuffix: true })}
      </p>
    </Link>
  );
};
