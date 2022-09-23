import React, { useEffect, useState } from 'react';

// component
import Title from '@/components/Title';
import { Pagination } from '@mui/material';
import VideoPanel from '@/components/VideoPanel';

// constants
import { feeds } from './common/constants';

// packages
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// queries
import { GET_ALL_VIDEOS } from '@/graphql/query.graphql';

// graphql generated types
import { Videos, VideosVariables } from '@/graphql/__generated__/Videos';

// utils
import { mapVideoPanelProps } from '@/utils/mapper';

// types
import { videoPanelProps } from '@/components/VideoPanel/types';
import Cookies from 'universal-cookie';

const Feed = () => {
  const { list } = useParams();
  const cookies = new Cookies();
  const userId = cookies.get('userId');
  const [variables, setVariables] = useState<any>({
    variables: {
      sort: ['publishedAt:desc'],
    },
  });
  const [currentList, setCurrentList] = useState<videoPanelProps[]>();

  // fetching the videos based on the list
  const { data } = useQuery<Videos, VideosVariables>(GET_ALL_VIDEOS, {
    ...variables,
  });

  useEffect(() => {
    // Setting variables as per the search params
    if (list === 'latest') {
      setVariables({
        variables: {
          sort: ['publishedAt:desc'],
        },
      });
    }

    if (list === 'trending') {
      setVariables({
        variables: {
          sort: ['viewCount:desc'],
        },
      });
    }

    if (list === 'likedVideos') {
      setVariables({
        variables: {
          filters: {
            likedBy: {
              id: {
                eq: userId,
              },
            },
          },
        },
      });
    }

    if (list === 'history') {
      setVariables({
        variables: {
          filters: {
            viewedBy: {
              id: {
                eq: userId,
              },
            },
          },
        },
      });
    }
  }, [list]);

  useEffect(() => {
    setCurrentList(mapVideoPanelProps(data?.videos?.data));
  }, [data]);

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
        {currentList &&
          currentList.map((game, i) => {
            return (
              <VideoPanel
                embedId={game.embedId}
                key={i + game.embedId}
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
      {/* Recommended videos ends */}
      {/* <Pagination count={21} page={1} size='large' /> */}
    </section>
  );
};

export default Feed;
