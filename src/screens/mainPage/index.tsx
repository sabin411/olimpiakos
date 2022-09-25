import React, { useEffect, useState } from 'react';

// components
import Title from '@/components/Title';
import HeroSlider from '@/components/HeroSlider';
import VideoPanel from '@/components/VideoPanel';
import SelectionTab from '@/components/SelectionTab';
import UpcomingPopup from '@/components/UpcommingPopup';
import { VideoPanelSkeleton, NewsSkeleton } from '@/components/Skeleton/index';
// import NewsSkeleton from '@/components/Skeleton/News/News';

// apollo client query
import {
  GET_ALL_NEWS,
  GET_ALL_PHOTOS,
  GET_ALL_VIDEOS,
  GET_FEATURED_EVENTS,
  GET_UPCOMING_EVENTS,
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
import { Link } from 'react-router-dom';

// graphql generated types
import { Photos, PhotosVariables } from '@/graphql/__generated__/Photos';
import { AllNews, AllNewsVariables } from '@/graphql/__generated__/AllNews';
import { FeaturedEvents } from '@/graphql/__generated__/FeaturedEvents';
import { HeroSliderProps } from '@/components/HeroSlider/types';
import { Videos, VideosVariables } from '@/graphql/__generated__/Videos';
import {
  UpcomingEvent,
  UpcomingEventVariables,
} from '@/graphql/__generated__/UpcomingEvent';

export const MainPage = () => {
  const [openUpcomingModal, setOpenUpcomingModal] = useState(true);
  const [featureEvents, setFeatureEvents] = React.useState<HeroSliderProps>();
  // Query for latest videos
  const { data: LatestVideosData, loading: loadingLatestVideos } = useQuery<
    Videos,
    VideosVariables
  >(GET_ALL_VIDEOS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 4,
      },
    },
  });

  // querying for latest news
  const { data: latestNewsData, loading: loadingLatestNews } = useQuery<
    AllNews,
    AllNewsVariables
  >(GET_ALL_NEWS, {
    variables: {
      sort: ['createdAt:desc'],
      pagination: {
        limit: 5,
      },
    },
  });

  // querying for latest photos
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

  // querying upcoming event
  const { data: featuredEventsData } = useQuery<
    UpcomingEvent,
    UpcomingEventVariables
  >(GET_UPCOMING_EVENTS);

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
      {
        <UpcomingPopup
          open={openUpcomingModal}
          DateTime={
            new Date(
              featuredEventsData?.upcommingEvent?.data?.attributes?.Date ||
                null,
            )
          }
          text={
            featuredEventsData?.upcommingEvent?.data?.attributes?.text || ''
          }
          subText={
            featuredEventsData?.upcommingEvent?.data?.attributes?.subText || ''
          }
          image={
            featuredEventsData?.upcommingEvent?.data?.attributes?.imageUrl || ''
          }
          title={
            featuredEventsData?.upcommingEvent?.data?.attributes?.title || ''
          }
          handleClose={() => {
            setOpenUpcomingModal(false);
            localStorage.setItem('isUpcomingPopupOpen', 'true');
          }}
        />
      }
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
            to={'/all-news'}
          >
            {latestNews.moreNews}
          </Link>
        </div>
        {/* Latest News section ends */}
        <div className='w-full lg:w-[50%]'>
          <HeroSlider FeaturedVideos={featureEvents || dummyFeaturedVideo} />
        </div>

        {/* Latest photos section starts */}
        <div className='hidden w-[25%] bg-primary-900 py-4 px-5 lg:block'>
          <h4 className='mb-1'>{latestPhotos.title}</h4>
          {photosData?.photos?.data.map((items, i) => {
            if (items.attributes)
              return (
                <PhotoWrapper
                  key={items.attributes.title + i}
                  image={items.attributes.imageUrl || imageDummy}
                  description={items.attributes.description}
                  timeStamp={new Date(items.attributes.createdAt)}
                  containerStyle='my-3'
                  linkTo={`/gallery`}
                />
              );
          })}
          <Link
            className='text-secondary-800 hover:text-secondary-900'
            to={'/gallery'}
          >
            {latestPhotos.morePhotos}
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
                    likes={item.attributes?.likedBy?.data?.length || 0}
                    views={item.attributes?.viewedBy?.data?.length || 0}
                    time={item.attributes?.duration || '00:00'}
                    title={item.attributes?.title || ''}
                    thumbnail={
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
                    likes={item.attributes?.likedBy?.data?.length || 0}
                    views={item.attributes?.viewedBy?.data?.length || 0}
                    time={'4:20'}
                    title={item.attributes?.title || ''}
                    thumbnail={
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
