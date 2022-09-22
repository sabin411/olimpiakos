import React, { useEffect } from 'react';

// component
import Title from '@/components/Title';
import CommentBox from '@/components/CommentBox';
import VideoFrame from '@/components/VideoFrame';
import VideoPanel from '@/components/VideoPanel';

// pacakges
import Cookies from 'universal-cookie';
import { useQuery } from '@apollo/client';
import { useLocation, useSearchParams } from 'react-router-dom';

// constants
import { dummyComments } from '@/constants/index';
import { mapComment, recommendedvids } from './common';

// graphql generated types
import {
  VideoById,
  VideoByIdVariables,
} from '@/graphql/__generated__/VideoById';
import { GET_VIDEO_BY_ID } from '@/graphql/query.graphql';

function Watch() {
  const cookies = new Cookies();
  let currentVideo;
  let comments;
  const [isLiked, setIsLiked] = React.useState(false);
  const [isDisliked, setIsDisliked] = React.useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('id');
  const embedId = searchParams.get('embedId');

  // if videoId is available then fetch video by id
  if (videoId) {
    const { data } = useQuery<VideoById, VideoByIdVariables>(GET_VIDEO_BY_ID, {
      variables: {
        videoId: videoId,
        sort: ['createdAt:desc'],
        pagination: {
          limit: 20,
        },
      },
    });
    currentVideo = data?.video?.data?.attributes;
    comments = mapComment(currentVideo?.comments?.data).reverse();
  }
  console.log(currentVideo);

  // if use has not liked the video already then like the video and remove dislike if disliked
  const handleLikes = (likeStatus: boolean) => {
    setIsLiked(likeStatus);
    if (likeStatus) {
      setIsDisliked(false);
    }
  };

  // if use has not disliked the video already then dislike the video and remove like if liked
  const handleDislikes = (dislikeStatus: boolean) => {
    setIsDisliked(dislikeStatus);
    if (dislikeStatus) {
      setIsLiked(false);
    }
  };

  return (
    <>
      <section className='flex flex-col h-max mt-2 container-custom gap-4 lg:flex-row '>
        <VideoFrame
          containerStyle='w-[70%]'
          isLiked={isLiked}
          videoDescription={
            currentVideo?.description || 'Description is not available'
          }
          videoTitle={currentVideo?.title || 'Title is not available'}
          videoLikes={currentVideo?.likedBy?.data.length || 0}
          videoViews={currentVideo?.viewedBy?.data.length || 0}
          videoDislikes={currentVideo?.dislikedBy?.data.length || 0}
          embedId={embedId as string}
          isDisliked={isDisliked}
          handleDislikes={handleDislikes}
          reportHandler={() => {
            console.log('kn5uevla61U, reported the video');
          }}
          handleLikes={handleLikes}
        />
        <div className='w-[40%] max-h-[600px] lg:max-h-[800px]'>
          <CommentBox
            comments={comments || dummyComments}
            containerStyle='h-full'
            videoId={videoId || '1'}
          />
        </div>
      </section>
      {/* recommended video section starts */}
      <section className='container-custom my-16'>
        <Title title='Recommended for you' extraButtonTitle='Explore more' />

        {/* Recommended videos starts */}

        <div
          className='
          grid grid-cols-1 gap-4 mt-8

          md:grid-cols-2 

          lg:grid-cols-3 
          lg:mt-16

          xl:grid-cols-4 xl:gap-3  '
        >
          {recommendedvids.map((game, i) => {
            return (
              <VideoPanel
                embedId='kn5uevla61U'
                key={i + game.embedId}
                videoId={game.embedId}
                likes={0}
                views={0}
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
      {/* recommended video section ends */}
    </>
  );
}

export default Watch;
