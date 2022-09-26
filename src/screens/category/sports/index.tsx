import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

// components
import VideoPanel from '@/components/VideoPanel';
import Title from '@/components/Title';
import { capitalize, Pagination } from '@mui/material';

// packages
import { useQuery } from '@apollo/client';

// images
import emptyImage from '@/assets/images/svg/empty.svg';

// constants
import { games } from '../constans';

// utils
import { mapVideoPanelProps } from '@/utils/mapper';

// graphql query
import { GET_ALL_VIDEOS } from '@/graphql/query.graphql';
import { Videos, VideosVariables } from '@/graphql/__generated__/Videos';

// types
import { videoPanelProps } from '@/components/VideoPanel/types';

function Sports() {
  const { game } = useParams();
  const [currentGames, setCurrentGames] = useState<videoPanelProps[]>();
  let isFilter =
    game !== 'all'
      ? {
          filters: {
            category: {
              name: {
                containsi: game,
              },
            },
          },
        }
      : null;

  const { data: videoData } = useQuery<Videos, VideosVariables>(
    GET_ALL_VIDEOS,
    {
      variables: {
        ...isFilter,
      },
    },
  );

  useEffect(() => {
    setCurrentGames(mapVideoPanelProps(videoData?.videos?.data));
  }, [videoData]);

  return (
    <section className='container-custom mt-10'>
      <Title title={game + 'Games'} />

      {currentGames?.length ? (
        <div
          className='
          grid grid-cols-1 gap-4 my-8

          md:grid-cols-2 

          lg:grid-cols-3 

          xl:grid-cols-4 xl:gap-3  
        '
        >
          {currentGames.map((game, i) => {
            return (
              <VideoPanel
                key={i + game.embedId}
                embedId={game.embedId}
                videoId={game.videoId}
                likes={game.likes}
                views={game.views}
                time={game.time}
                title={game.title}
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
    </section>
  );
}

export default Sports;
