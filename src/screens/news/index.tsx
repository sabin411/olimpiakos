import React, { useEffect, useState } from 'react';

// packages
import { useQuery } from '@apollo/client';
import { LatestNews } from '../mainPage/common';
import { Link, useParams } from 'react-router-dom';
import ImageCard from '@/components/Cards/ImageCard';

// constants
import { individualNews } from '@/constants';

// assets
import { imageDummy } from '@/assets/images/dummyImages';

// graphql
import {
  LimitedNews,
  LimitedNewsVariables,
  LimitedNews_allNews_data,
} from '@/graphql/__generated__/LimitedNews';
import { GET_LIMITED_NEWS } from '@/graphql/query.graphql';

export const News = () => {
  const { newsId } = useParams();
  // const [currentNews, setCurrentNews] = useState<
  //   LimitedNews_allNews_data | undefined
  // >(undefined);

  // const [allNews, setAllNews] = useState<
  //   LimitedNews_allNews_data[] | undefined
  // >(undefined);

  // querying news

  const {
    data: currentNews,
    loading,
    error,
  } = useQuery<LimitedNews, LimitedNewsVariables>(GET_LIMITED_NEWS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 1,
      },
      filters: {
        id: {
          eq: newsId,
        },
      },
    },
  });

  const {
    data: newsData,
    loading: loadingAllNews,
    error: errorAllNews,
  } = useQuery<LimitedNews, LimitedNewsVariables>(GET_LIMITED_NEWS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 5,
      },
    },
  });

  return (
    <section className='container-custom flex gap-6 mt-4 mb-14'>
      <div className='flex-1'>
        <p className='text-primary-400'>{individualNews.sponser}</p>
        <h3 className='text-neutral-300'>
          {currentNews?.allNews?.data[0].attributes?.title}
        </h3>
        <div className='my-5'>
          <ImageCard
            image={
              currentNews?.allNews?.data[0].attributes?.imageUrl || imageDummy
            }
          />
        </div>
        <p className='text-h6 text-neutral-300'>
          {currentNews?.allNews?.data[0].attributes?.description}
        </p>
      </div>
      <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block h-max'>
        <h4 className='mb-1'>{individualNews.latestNews.title}</h4>
        {newsData?.allNews?.data?.map((items, i) => {
          return (
            <LatestNews
              key={items.id && items.id + i}
              news={items.attributes?.title || 'News not found'}
              timeStamp={new Date(items.attributes?.createdAt)}
              linkTo={`/news/${items.id}`}
              containerStyle={`py-3 border-b-1 border-neutral-800 ${
                i === 4 && 'border-b-0 pb-9'
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
