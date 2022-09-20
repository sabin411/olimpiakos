import React, { useEffect } from 'react';

// components
import Title from '@/components/Title';
import HeroSlider from '@/components/HeroSlider';
import VideoPanel from '@/components/VideoPanel';
import SelectionTab from '@/components/SelectionTab';
import {
  VideoPanelSkeleton,
  NewsSkeleton,
  PhotosSkeleton,
} from '@/components/Skeleton/index';
// import NewsSkeleton from '@/components/Skeleton/News/News';

// apollo client query
import {
  GET_ALL_NEWS,
  GET_ALL_PHOTOS,
  GET_FEATURED_EVENTS,
  GET_LATEST_VIDEOS,
  GET_LIMITED_PHOTOS,
} from '@/graphql/query.graphql';

// apollo client
import { useQuery } from '@apollo/client';

// common
import { LatestNews, PhotoWrapper } from './common/index';

// assets
import { imageDummy } from '@/assets/images/dummyImages';

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

// ENV
import { BASE_URL } from '@/env';

// graphql generated types
import {
  LatestVideos,
  LatestVideosVariables,
} from '@/graphql/__generated__/LatestVideos';
import { Photos, PhotosVariables } from '@/graphql/__generated__/Photos';
import { AllNews, AllNewsVariables } from '@/graphql/__generated__/AllNews';
import {
  LimitedPhotos,
  LimitedPhotosVariables,
} from '@/graphql/__generated__/LimitedPhotos';
import { FeaturedEvents } from '@/graphql/__generated__/FeaturedEvents';
import { HeroSliderProps } from '@/components/HeroSlider/types';

const MainPage = () => {
  const [featureEvents, setFeatureEvents] = React.useState<HeroSliderProps>();
  // Query for latest videos
  const {
    data: LatestVideosData,
    loading: loadingLatestVideos,
    error: errorLatestVideos,
  } = useQuery<LatestVideos, LatestVideosVariables>(GET_LATEST_VIDEOS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 4,
      },
    },
  });

  // querying for latest news
  const {
    data: latestNewsData,
    loading: loadingLatestNews,
    error: errorLatestNews,
  } = useQuery<AllNews, AllNewsVariables>(GET_ALL_NEWS, {
    variables: {
      sort: ['createdAt:desc'],
    },
  });

  // querying for latest photos
  const {
    data: photosData,
    loading: loadingPhotos,
    error: errorPhotos,
  } = useQuery<LimitedPhotos, LimitedPhotosVariables>(GET_LIMITED_PHOTOS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 2,
      },
    },
  });

  // querying for featured event videos
  const {
    data: featuredVideosData,
    loading: loadingFeaturedVideos,
    error: errorFeaturedVideos,
  } = useQuery<FeaturedEvents>(GET_FEATURED_EVENTS);
  useEffect(() => {
    if (featuredVideosData) {
      const updatedData =
        featuredVideosData.featuredVideos?.data[0].attributes?.videos?.data.map(
          item => {
            const data = item.attributes;
            return {
              time: data?.duration || '00:00',
              title: data?.title || 'Title not available',
              description: data?.description || 'Description not available',
              thumbnail: data?.thumbnail.data[0].attributes?.url || imageDummy,
              views: data?.viewedBy?.data.length || 0,
              likes: data?.likedBy?.data.length || 0,
              videoId: item.id,
              embedId: data?.embedId || 'dQw4w9WgXcQ',
            };
          },
        );
      setFeatureEvents(updatedData);
    }
  }, [featuredVideosData]);

  return (
    <>
      {/* Slider section starts */}
      <section className='mt-2 container-custom flex  justify-between gap-x-6'>
        {/* Latest News section starts */}
        <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block'>
          <h4 className='mb-1'>{latestNews.title}</h4>
          {loadingLatestNews
            ? [1, 2, 3, 4, 5].map((index, i) => <NewsSkeleton key={i} />)
            : latestNewsData?.allNews?.data.map((items, i) => {
                if (i < 5)
                  return (
                    <LatestNews
                      key={items?.attributes?.title && +i}
                      news={items?.attributes?.title || 'Ted'}
                      timeStamp={
                        new Date(items?.attributes?.createdAt || '2021-01-01')
                      }
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
            More news...
          </Link>
        </div>
        {/* Latest News section ends */}
        <div className='w-full lg:w-[50%]'>
          <HeroSlider FeaturedVideos={featureEvents || dummyFeaturedVideo} />
        </div>

        {/* Latest photos section starts */}
        <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block'>
          <h4 className='mb-1'>Latest Photos</h4>
          {photosData?.photos?.data.map((items, i) => {
            if (items.attributes)
              return (
                <PhotoWrapper
                  key={items.attributes.title + i}
                  image={items.attributes.imageUrl || imageDummy}
                  description={items.attributes.description}
                  timeStamp={new Date(items.attributes.publishedAt)}
                  containerStyle='my-3'
                  linkTo={`/gallery`}
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
          {loadingLatestVideos
            ? [1, 2, 3, 4].map((item, i) => (
                <VideoPanelSkeleton containerStyle='flex-1' key={i} />
              ))
            : LatestVideosData?.videos?.data.map((item, index) => {
                return (
                  <VideoPanel
                    key={index}
                    videoId={item.id || '1'}
                    embedId={item.attributes?.embedId || 'Tw_wn6XUfnU'}
                    likes={8790 + (item.attributes?.likedBy?.data?.length || 0)}
                    views={
                      3450 + (item.attributes?.viewedBy?.data?.length || 0)
                    }
                    time={item.attributes?.duration || '00:00'}
                    title={item.attributes?.title || ''}
                    thumbnail={
                      BASE_URL +
                        item.attributes?.thumbnail?.data[0].attributes?.url ||
                      ''
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
          {loadingLatestVideos
            ? [1, 2, 3, 4].map((item, i) => (
                <VideoPanelSkeleton containerStyle='flex-1' key={i} />
              ))
            : LatestVideosData?.videos?.data.map((item, index) => {
                return (
                  <VideoPanel
                    key={index}
                    videoId={item.id || '1'}
                    embedId={item.attributes?.embedId || 'Tw_wn6XUfnU'}
                    likes={8790 + (item.attributes?.likedBy?.data?.length || 0)}
                    views={0}
                    time={'4:20'}
                    title={item.attributes?.title || ''}
                    thumbnail={
                      'http://localhost:1337' +
                        item.attributes?.thumbnail?.data[0].attributes?.url ||
                      ''
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
