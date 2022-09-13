import React from 'react';

// package
import { Link } from 'react-router-dom';

// component
import ImageCard from '../ImageCard';

const NewsCard = ({
  image,
  title,
  description,
  timeStamp,
  hasBorder,
  containerStyle,
  linkTo,
}: {
  image: string;
  title: string;
  description: string;
  timeStamp: string;
  hasBorder?: boolean;
  containerStyle?: string;
  linkTo: string;
}) => {
  return (
    <Link
      to={linkTo}
      className={`flex gap-4 h-[290px] w-full py-11 group
      ${hasBorder && 'border-b-1 border-primary-700'} ${containerStyle}`}
    >
      <div className='w-[25%] h-full'>
        <ImageCard containerStyle='aspect-video' image={image} />
      </div>
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h5 className='text-neutral-200 line-clamp-1 group-hover:text-secondary-800'>
            {title}
          </h5>
          <p className='text-neutral-400 line-clamp-4'>{description}</p>
        </div>
        <p className='text-primary-500 mb-4'>{timeStamp}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
