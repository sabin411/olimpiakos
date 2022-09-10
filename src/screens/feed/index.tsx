import React, { useEffect } from 'react';

// component
import Title from '@/components/Title';
import VideoPanel from '@/components/VideoPanel';

// constants
import { feeds } from './common/constants';

// packages
import { useParams, useSearchParams } from 'react-router-dom';

const Feed = () => {
  const { list } = useParams();
  const currentList = feeds[list ?? 'latest'];
  console.log(currentList);

  return (
    <section className='container-custom my-10'>
      <Title containerStyle='mb-10' title={list?.toString() ?? 'All'} />
      {/* Recommended videos starts */}
      <div
        className='
          grid grid-cols-1 gap-4

          md:grid-cols-2 

          lg:grid-cols-3 

          xl:grid-cols-4 xl:gap-x-3 xl:gap-y-4'
      >
        {currentList.map((game, i) => {
          return (
            <VideoPanel
              key={i + game.embedId}
              videoId={game.embedId}
              likes={game.videoDislikes}
              views={game.videoDislikes}
              time={game.videoDuration}
              title={game.videoTitle}
              thumbnail={game.thumbnail}
              containerStyle=''
            />
          );
        })}
      </div>
      {/* Recommended videos ends */}
    </section>
  );
};

export default Feed;
