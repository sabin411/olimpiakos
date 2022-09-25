import React, { useId } from 'react';

// components
import Title from '@/components/Title';
import NewsCard from '@/components/Cards/News';
import { PhotoWrapper } from '@/screens/mainPage/common';

// packages
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

// constants
import { newsFeed } from '@/constants';

// assets
import { imageDummy } from '@/assets/images/dummyImages';

// graphql
import { GET_ALL_NEWS, GET_ALL_PHOTOS } from '@/graphql/query.graphql';

// 1. graphql generated types
import { AllNews, AllNewsVariables } from '@/graphql/__generated__/AllNews';
import { Photos, PhotosVariables } from '@/graphql/__generated__/Photos';

const NewsFeed = () => {
  const uniqueId = useId();

  // querying news
  const { data: newsData } = useQuery<AllNews, AllNewsVariables>(GET_ALL_NEWS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 10,
      },
    },
  });

  // querying photos
  const { data: photosData } = useQuery<Photos, PhotosVariables>(
    GET_ALL_PHOTOS,
    {
      variables: {
        sort: ['createdAt:desc'],
        pagination: {
          limit: 2,
        },
      },
    },
  );

  return (
    <section className='container-custom flex gap-6 my-4'>
      <div className='flex-1'>
        <Title title={newsFeed.title} />
        {newsData?.allNews?.data.map((item, index) => {
          return (
            <NewsCard
              key={index + uniqueId + item.id}
              title={item.attributes?.title || 'Title not found'}
              description={
                item.attributes?.description || 'Description not found'
              }
              timeStamp={formatDistanceToNowStrict(
                new Date(item.attributes?.createdAt),
                {
                  addSuffix: true,
                },
              )}
              image={item.attributes?.imageUrl || imageDummy}
              linkTo={`/news/${item.id}`}
              hasBorder
              containerStyle={`${
                index === (newsData.allNews?.data.length || 0) - 1 &&
                'mb-0 border-b-0'
              }`}
            />
          );
        })}
      </div>
      <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block h-max'>
        <h4 className='mb-1'>{newsFeed.latestPhotostitle}</h4>
        {photosData?.photos?.data.map((items, i) => {
          // const uniqueKey = useId();
          return (
            <PhotoWrapper
              linkTo={`/photo/${items.id}`}
              key={items.attributes?.title && items.attributes?.title + i}
              image={items.attributes?.imageUrl || imageDummy}
              description={
                items.attributes?.description || 'Description not found'
              }
              timeStamp={new Date(items.attributes?.createdAt)}
              containerStyle='my-3'
            />
          );
        })}
        <Link
          className='text-secondary-800 hover:text-secondary-900'
          to={'/gallery'}
        >
          {newsFeed.latestPhotosMore}
        </Link>
      </div>
    </section>
  );
};
export default NewsFeed;
