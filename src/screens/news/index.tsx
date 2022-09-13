import React, { useState } from 'react';

// packages
import { Link, useParams } from 'react-router-dom';
import { LatestNews } from '../mainPage/common';
import ImageCard from '@/components/Cards/ImageCard';

// constants
import { individualNews } from '@/constants';
// import { currentNews } from './common/constants';
import { newsData } from '@/global/constants';

export const News = () => {
  const { newsId } = useParams();

  const [currentNews] = newsData.filter(item => {
    if (newsId) {
      return item.id === parseInt(newsId);
    }
    return null;
  });
  return (
    <section className='container-custom flex gap-6 mt-4 mb-14'>
      <div className='flex-1'>
        <p className='text-primary-400'>{individualNews.sponser}</p>
        <h3 className='text-neutral-300'>{currentNews.title}</h3>
        <div className='my-5'>
          <ImageCard image={currentNews.image} />
        </div>
        <p className='text-h6 text-neutral-300'>{currentNews.description}</p>
      </div>
      <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block h-max'>
        <h4 className='mb-1'>{individualNews.latestNews.title}</h4>
        {newsData.map((items, i) => {
          return (
            <LatestNews
              key={items.title + i}
              news={items.title}
              timeStamp={items.createdAt}
              linkTo={`/news/${items.id}`}
              containerStyle={`py-3 border-b-1 border-neutral-800 ${
                i === newsData.length - 1 && 'border-b-0'
              }`}
            />
          );
        })}
        <Link
          className='text-secondary-800 hover:text-secondary-900'
          to={'/news-feed'}
        >
          {individualNews.latestNews.more}
        </Link>
      </div>
    </section>
  );
};
export default News;
