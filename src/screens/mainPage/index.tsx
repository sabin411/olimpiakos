import React, { useEffect } from 'react';

// components
import Title from '@/components/Title';
import HeroSlider from '@/components/HeroSlider';
import VideoPanel from '@/components/VideoPanel';
import SelectionTab from '@/components/SelectionTab';

// apollo client query
import { GET_LATEST_VIDEOS } from '@/graphql/query.graphql';

// apollo client
import { useQuery } from '@apollo/client';

// common
import { LatestNews, PhotoWrapper } from './common/index';

// constants
import {
  latestNews,
  latestPhotos,
  latestSection,
  categoriesData,
  trendingSection,
  dummyFeaturedVideo,
} from '@/constants';
import { newsData } from '@/global/constants';
import { Link } from 'react-router-dom';

// types
import {
  LatestVideos,
  LatestVideosVariables,
} from '@/graphql/__generated__/LatestVideos';

const MainPage = () => {
  // Query for latest news
  const { data, loading, error } = useQuery<
    LatestVideos,
    LatestVideosVariables
  >(GET_LATEST_VIDEOS, {
    variables: {
      sort: ['createdAt:desc'],
    },
  });

  return (
    <>
      {/* Slider section starts */}
      <section className='mt-2 container-custom flex  justify-between gap-x-6'>
        {/* Latest News section starts */}
        <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block'>
          <h4 className='mb-1'>{latestNews.title}</h4>
          {newsData.map((items, i) => {
            if (i < 5)
              return (
                <LatestNews
                  key={items.title + i}
                  news={items.title}
                  timeStamp={items.createdAt}
                  linkTo={`/news/${items.id}`}
                  containerStyle={`py-3 border-b-1 border-neutral-800 ${
                    i === latestNews.news.length - 1 && 'border-b-0'
                  }`}
                />
              );
          })}
          <Link
            className='text-secondary-800 hover:text-secondary-900'
            to={'/news-feed'}
          >
            More news...
          </Link>
        </div>
        {/* Latest News section ends */}
        <div className='w-full lg:w-[50%]'>
          <HeroSlider FeaturedVideos={dummyFeaturedVideo} />
        </div>

        {/* Latest photos section starts */}
        <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block'>
          <h4 className='mb-1'>Latest Photos</h4>
          {latestPhotos.photos.map((items, i) => {
            return (
              <PhotoWrapper
                key={items.image + i}
                image={items.image}
                description={items.description}
                timeStamp={items.timeStamp}
                containerStyle='my-3'
                linkTo={`/gallery/${items}`}
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
        {/* Latest photos section ends */}
      </section>
      {/* Slider section ends */}

      {/* Explore new section starts */}
      <section className='my-5 container-custom'>
        <h4 className='text-neutral-400 mb-2'>{categoriesData.title}</h4>
        <SelectionTab items={categoriesData.items} />
      </section>
      {/* Explore new section ends */}

      {/* Explore Latest section starts */}
      <section className='my-10 container-custom'>
        <Title
          title={latestSection.title}
          exploreMoreLink='/feed/latest'
          extraButtonTitle='Explore more'
        />
        <div className='flex flex-col gap-4 mt-10 lg:flex-row lg:gap-3'>
          {data?.videos?.data.map((item, index) => {
            return (
              <VideoPanel
                key={index}
                videoId={item.attributes?.embedId || 'Tw_wn6XUfnU'}
                likes={8790 + (item.attributes?.likedBy?.data?.length || 0)}
                views={0}
                time={'4:20'}
                title={item.attributes?.title || ''}
                thumbnail={
                  'http://localhost:1337' +
                    item.attributes?.thumbnail?.data[0].attributes?.url || ''
                }
                containerStyle='flex-1'
              />
            );
          })}
        </div>
      </section>
      {/* Explore latest section ends */}

      {/* Explore Trending section starts */}
      <section className='my-10 container-custom'>
        <Title
          title={trendingSection.title}
          exploreMoreLink='/feed/trending'
          extraButtonTitle='Explore more'
        />
        <div className='flex flex-col gap-4 mt-10 lg:flex-row lg:gap-3'>
          {data?.videos?.data.map((item, index) => {
            return (
              <VideoPanel
                key={index}
                videoId={item.attributes?.embedId || 'Tw_wn6XUfnU'}
                likes={8790 + (item.attributes?.likedBy?.data?.length || 0)}
                views={0}
                time={'4:20'}
                title={item.attributes?.title || ''}
                thumbnail={
                  'http://localhost:1337' +
                    item.attributes?.thumbnail?.data[0].attributes?.url || ''
                }
                containerStyle='flex-1'
              />
            );
          })}
        </div>
      </section>
      {/* Explore Trending section ends */}
    </>
  );
};

export default MainPage;
