import React from 'react';

// components
import Title from '@/components/Title';
import HeroSlider from '@/components/HeroSlider';
import VideoPanel from '@/components/VideoPanel';
import SelectionTab from '@/components/SelectionTab';

// constants
import {
  dummyFeaturedVideo,
  dummyComments,
  categoriesData,
  latestSection,
  trendingSection,
} from '@/constants';

const MainPage = () => {
  return (
    <>
      {/* Slider section starts */}
      <section className='mt-2 container-custom'>
        <HeroSlider FeaturedVideos={dummyFeaturedVideo} />
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
        <Title title={latestSection.title} extraButtonTitle='Explore more' />
        <div className='flex gap-3 mt-16'>
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
        <Title title={trendingSection.title} extraButtonTitle='Explore more' />
        <div className='flex gap-3 mt-16'>
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
