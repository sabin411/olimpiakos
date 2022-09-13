import React from 'react';

// components
import Title from '@/components/Title';
import HeroSlider from '@/components/HeroSlider';
import VideoPanel from '@/components/VideoPanel';
import SelectionTab from '@/components/SelectionTab';

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

const MainPage = () => {
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
          {latestSection.items.map((item, index) => {
            return (
              <VideoPanel
                key={index + item.embedId}
                videoId={item.embedId}
                likes={item.videoDislikes}
                views={item.videoDislikes}
                time={item.videoDuration}
                title={item.videoTitle}
                thumbnail={item.thumbnail}
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
          {trendingSection.items.map((item, index) => {
            return (
              <VideoPanel
                key={index + item.embedId}
                videoId={item.embedId}
                likes={item.videoDislikes}
                views={item.videoDislikes}
                time={item.videoDuration}
                title={item.videoTitle}
                thumbnail={item.thumbnail}
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
