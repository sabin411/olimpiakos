import React, { useEffect, useState } from 'react';

// components
import Title from '@/components/Title';
import VideoPanel from '@/components/VideoPanel';
import { videoPanelProps } from '@/components/VideoPanel/types';

// pacakges
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// graphql generated types
import { Videos, VideosVariables } from '@/graphql/__generated__/Videos';
import { GET_ALL_VIDEOS } from '@/graphql/query.graphql';

// utils
import { mapVideoPanelProps } from '@/utils/mapper';

// const
import { search } from '@/constants/en';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('v');
  const [searchedVideos, setSearchedVideos] = useState<videoPanelProps[]>();

  // fetching the videos search
  const { data } = useQuery<Videos, VideosVariables>(GET_ALL_VIDEOS, {
    variables: {
      filters: {
        title: {
          containsi: searchParam,
        },
      },
    },
  });

  useEffect(() => {
    if (data?.videos?.data) {
      setSearchedVideos(mapVideoPanelProps(data?.videos?.data));
    }
  }, [data]);

  return (
    <section className='container-custom my-10'>
      <Title
        containerStyle='mb-10'
        title={`${search.searchResult} "${searchParam}"`}
      />
      {/* Recommended videos starts */}
      <div
        className='
          grid grid-cols-1 gap-4

          md:grid-cols-2 

          lg:grid-cols-3 

          xl:grid-cols-4 xl:gap-x-3 xl:gap-y-4'
      >
        {searchedVideos &&
          searchedVideos.map((game, i) => {
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
    </section>
  );
};

export default Search;
