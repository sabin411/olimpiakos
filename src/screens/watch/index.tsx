import React, { useEffect, useState } from 'react';

// component
import Title from '@/components/Title';
import CommentBox from '@/components/CommentBox';
import VideoFrame from '@/components/VideoFrame';
import VideoPanel from '@/components/VideoPanel';

// pacakges
import Cookies from 'universal-cookie';
import { ApolloQueryResult, useMutation, useQuery } from '@apollo/client';
import { useLocation, useSearchParams } from 'react-router-dom';

// constants
import { dummyComments } from '@/constants/index';
import { mapComment, recommendedvids } from './common';

// query
import { GET_VIDEO_BY_ID } from '@/graphql/query.graphql';
import { UPDATE_VIDEO } from '@/graphql/mutation.graphql';

// graphql generated types
import {
  VideoById,
  VideoByIdVariables,
  VideoById_video_data_attributes,
} from '@/graphql/__generated__/VideoById';
import {
  UpdateVideoUserInteraction,
  UpdateVideoUserInteractionVariables,
} from '@/graphql/__generated__/UpdateVideoUserInteraction';

// types
import { CommonTypeProps } from './type';

function Watch() {
  const cookies = new Cookies();
  const [currentVideo, setCurrentVideo] = useState<
    VideoById_video_data_attributes | null | undefined
  >();
  const [comments, setComments] = useState(dummyComments);
  // let fetchVideo: (
  //   variables?: Partial<VideoByIdVariables> | undefined,
  // ) => Promise<ApolloQueryResult<VideoById>>;
  const [isLiked, setIsLiked] = React.useState(false);
  const [likedBy, setLikedBy] = React.useState<CommonTypeProps>([]);
  const [viwedBy, setViwedBy] = React.useState<CommonTypeProps>([]);
  const [dislikedBy, setDislikedBy] = React.useState<CommonTypeProps>([]);
  const [isDisliked, setIsDisliked] = React.useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('id');
  const embedId = searchParams.get('embedId');
  const [updateVideo] = useMutation<
    UpdateVideoUserInteraction,
    UpdateVideoUserInteractionVariables
  >(UPDATE_VIDEO);

  // if videoId is available then fetch video by id

  const { data, refetch } = useQuery<VideoById, VideoByIdVariables>(
    GET_VIDEO_BY_ID,
    {
      variables: {
        videoId: videoId,
        sort: ['createdAt:desc'],
        pagination: {
          limit: 20,
        },
      },
    },
  );

  // if use has not liked the video already then like the video and remove dislike if disliked
  const handleLikes = (likeStatus: boolean) => {
    // setIsLiked(likeStatus);
    if (videoId) {
      let likedByArray = likedBy;
      // if user liked the video then
      if (likeStatus) {
        likedByArray = [...likedBy, cookies.get('userId') as string];
        // setLikedBy(likedByArray);
      }
      // if user disliked the video then
      if (!likeStatus && likedBy) {
        likedByArray = likedBy.filter(
          userId => userId !== cookies.get('userId'),
        );
      }
      updateVideo({
        variables: {
          updateVideoId: videoId,
          data: {
            likedBy: likedByArray,
          },
        },
      });
      // setLikedBy(likedByArray);
      refetch();
    }
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

  useEffect(() => {
    // Mapping id of user who have liked the video NOTE: this is not the best way to do it
    const updatedLikedBy = currentVideo?.likedBy?.data.map(item => {
      return item.id;
    });

    if (updatedLikedBy?.length) {
      setIsLiked(updatedLikedBy?.includes(cookies.get('userId')));
      setLikedBy(updatedLikedBy);
    }
  }, [currentVideo]);

  // if video is fetched the set the data to currentVideo
  useEffect(() => {
    if (data) {
      setCurrentVideo(data?.video?.data?.attributes);
      const updatedComments = mapComment(
        data.video?.data?.attributes?.comments?.data,
      ).reverse();

      setComments(updatedComments);
    }
  }, [data]);

  return (
    <>
      <section className='flex flex-col h-max mt-2 container-custom gap-4 lg:flex-row '>
        <VideoFrame
          containerStyle='w-[70%]'
          // isLiked={likedBy?.includes(cookies.get('userId'))}
          isLiked={isLiked}
          videoDescription={
            currentVideo?.description || 'Description is not available'
          }
          videoTitle={currentVideo?.title || 'Title is not available'}
          videoLikes={likedBy?.length || 0}
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
