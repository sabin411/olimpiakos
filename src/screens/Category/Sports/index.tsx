import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

// components
import VideoPanel from '@/components/VideoPanel';
import Title from '@/components/Title';
import { capitalize, Pagination } from '@mui/material';

// images
import emptyImage from '@/assets/images/svg/empty.svg';

// constants
import { games } from '../constans';

function Sports() {
  const { game } = useParams();
  const currentGames = games[game ?? 'empty'];

  return (
    <section className='container-custom mt-10'>
      <Title title={game + ' Games'} />

      {currentGames?.length ? (
        <div
          className='
          grid grid-cols-1 gap-4 mt-8

          md:grid-cols-2 

          lg:grid-cols-3 
          lg:mt-16

          xl:grid-cols-4 xl:gap-3  
        '
        >
          {currentGames.map((game, i) => {
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
      ) : (
        <div className='h-[calc(100vh-400px)] flex items-center justify-center w-full flex-col'>
          <img src={emptyImage} alt='' />
        </div>
      )}
      {/* <Pagination
        count={10}
        color='secondary'
        sx={{
          color: 'var(--neutral-200)',
        }}
      /> */}
    </section>
  );
}

export default Sports;
