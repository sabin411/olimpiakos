import React from 'react';

// component
import VideoPanel from '@/components/VideoPanel';
import CommentBox from '@/components/CommentBox';
import HeroSlider from '@/components/HeroSlider';
import SelectionTab from '@/components/SelectionTab';

// images
import thumbnail from '@/assets/images/thumbnail.webp';
import Title from '@/components/Title';

export default function VideoPanelPreview() {
  return (
    <section className='container-custom mx-auto'>
      <div className='my-6'>
        <Title title='Hero Slider' containerStyle='mb-4 w-1/4' />
        <HeroSlider />
      </div>
      <div>
        <Title title='Video Panel' containerStyle='mb-4 w-1/4' />
        <div className='flex justify-center gap-4'>
          {
            <VideoPanel
              videoId='12343'
              likes='200323'
              views='23093'
              time='23:12'
              title='Brazil vs Netherland - A dramatic Ending left everybody in shock.'
              thumbnail={thumbnail}
            />
          }
        </div>
      </div>
      <div className='my-4'>
        <Title title='Comment Box' containerStyle='mb-4 w-1/4' />
        <CommentBox />
      </div>
      <div className='my-4'>
        <Title title='Selection Tab' containerStyle='mb-4 w-1/4' />
        <SelectionTab />
      </div>
    </section>
  );
}
