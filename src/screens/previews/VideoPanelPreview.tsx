import React from 'react';

// component
import VideoPanel from '@/components/VideoPanel';

// images
import thumbnail from '@/assets/images/thumbnail.webp';
import Title from '@/components/Title';

export default function VideoPanelPreview() {
  return (
    <div className='w-1/3'>
      <h1 className='text-h3'>preview section</h1>
      <VideoPanel
        videoId='12343'
        likes='200323'
        views='23093'
        time='23:12'
        title='Brazil vs Netherland - A dramatic Ending left everybody in shock.'
        thumbnail={thumbnail}
      />

      <h1 className='text-h3'>title</h1>
      <Title title='Football' />
    </div>
  );
}
