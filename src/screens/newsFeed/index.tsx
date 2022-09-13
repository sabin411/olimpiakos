import React from 'react';

// components
import NewsCard from '@/components/Cards/News';
import { PhotoWrapper } from '../mainPage/common';

// packages
import { Link } from 'react-router-dom';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

// constants
import { latestPhotos, newsFeed } from '@/constants';

const NewsFeed = () => {
  return (
    <section className='container-custom flex gap-6 my-4'>
      <div className='flex-1'>
        {newsFeed.news.map((item, index) => {
          return (
            <NewsCard
              key={index + item.id}
              title={item.title}
              description={item.description}
              timeStamp={formatDistanceToNowStrict(item.createdAt, {
                addSuffix: true,
              })}
              image={item.image}
              linkTo={`/news/${item.id}`}
              hasBorder
              containerStyle={`${
                index === newsFeed.news.length - 1 && 'mb-0 border-b-0'
              }`}
            />
          );
        })}
      </div>
      <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block h-max'>
        <h4 className='mb-1'>Latest Photos</h4>
        {latestPhotos.photos.map((items, i) => {
          return (
            <PhotoWrapper
              linkTo={`/photo/${items.id}`}
              key={items.image + i}
              image={items.image}
              description={items.description}
              timeStamp={items.timeStamp}
              containerStyle='my-3'
            />
          );
        })}
        <Link
          className='text-secondary-800 hover:text-secondary-900'
          to={'/gallery'}
        >
          More Photos...
        </Link>
      </div>
    </section>
  );
};
export default NewsFeed;
