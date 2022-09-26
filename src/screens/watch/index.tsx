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
import { dummyComments } from '@/constants/en';
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
  const [isLiked, setIsLiked] = React.useState(false);
  const [likedBy, setLikedBy] = React.useState<CommonTypeProps>([]);
  const [viwedBy, setViwedBy] = React.useState<CommonTypeProps>([]);
  const [dislikedBy, setDislikedBy] = React.useState<CommonTypeProps>([]);
  const [isDisliked, setIsDisliked] = React.useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('id');
  const embedId = searchParams.get('embedId');

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
  const [updateVideo] = useMutation<
    UpdateVideoUserInteraction,
    UpdateVideoUserInteractionVariables
  >(UPDATE_VIDEO, {
    onCompleted: data => {
      refetch();
    },
  });

  // if use has not liked the video already then like the video and remove dislike if disliked
  const handleLikes = (likeStatus: boolean) => {
    if (videoId) {
      let likedByArray = likedBy;
      let dislikedByArray = dislikedBy;
      // if user liked the video then
      if (likeStatus) {
        // @ts-ignore
        likedByArray = [...likedBy, cookies.get('userId') as string];
        dislikedByArray = dislikedBy?.filter(
          userId => userId !== cookies.get('userId'),
        );
        setIsLiked(true);
        setIsDisliked(false);
      }
      if (!likeStatus && likedBy) {
        likedByArray = likedBy.filter(
          userId => userId !== cookies.get('userId'),
        );
        dislikedByArray = [...dislikedBy, cookies.get('userId') as string];

        setIsLiked(false);
        setIsDisliked(true);
      }
      updateVideo({
        variables: {
          updateVideoId: videoId,
          data: {
            likedBy: likedByArray,
            dislikedBy: dislikedByArray,
          },
        },
      });
    }
  };

  // if user has not disliked the video already then dislike the video and remove like if liked
  const handleDislikes = (dislikeStatus: boolean) => {
    if (videoId) {
      let dislikedByArray = dislikedBy;
      let likedByArray = likedBy;
      // if user disliked the video then
      if (dislikeStatus) {
        // @ts-ignore
        dislikedByArray = [...dislikedBy, cookies.get('userId') as string];
        likedByArray = likedBy?.filter(
          userId => userId !== cookies.get('userId'),
        );
        setIsDisliked(true);
        setIsLiked(false);
      }
      if (!dislikeStatus && dislikedBy) {
        dislikedByArray = dislikedBy.filter(
          userId => userId !== cookies.get('userId'),
        );
        likedByArray = [...likedBy, cookies.get('userId') as string];
        setIsDisliked(false);
        setIsLiked(true);
      }
      updateVideo({
        variables: {
          updateVideoId: videoId,
          data: {
            dislikedBy: dislikedByArray,
            likedBy: likedByArray,
          },
        },
      });
    }
    setIsDisliked(dislikeStatus);
    if (dislikeStatus) {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    // Mapping id of user who have liked the video NOTE: this is not the best way to do it
    // mapping id of user who have disliked the video NOTE: this is not the best way to do it
    const updatedLikedBy = currentVideo?.likedBy?.data.map(item => {
      return item.id;
    });
    const updatedDislikedBy = currentVideo?.dislikedBy?.data.map(item => {
      return item.id;
    });
    const updatedViewedBy = currentVideo?.viewedBy?.data.map(item => {
      return item.id;
    });

    setLikedBy(updatedLikedBy);
    setDislikedBy(updatedDislikedBy);
    setViwedBy(updatedViewedBy);

    if (updatedLikedBy?.length) {
      setIsLiked(updatedLikedBy?.includes(cookies.get('userId')));
    }
    if (updatedDislikedBy?.length) {
      setIsDisliked(updatedDislikedBy?.includes(cookies.get('userId')));
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

  useEffect(() => {
    if (videoId && viwedBy?.length && viwedBy.length > 0) {
      let alreadyWatched = viwedBy.includes(cookies.get('userId'));
      if (!alreadyWatched) {
        updateVideo({
          variables: {
            updateVideoId: videoId,
            data: {
              viewedBy: [...viwedBy, cookies.get('userId') as string],
            },
          },
        }).then(res => {
          setViwedBy([...viwedBy, cookies.get('userId') as string]);
        });
        return;
      }
    }
  }, [viwedBy]);

  return (
    <>
      <section className='flex flex-col h-max mt-2 container-custom gap-4 lg:flex-row '>
        <VideoFrame
          videoId={videoId || '1'}
          containerStyle='lg:w-[70%]'
          publishedAt={data?.video?.data?.attributes?.publishedAt ?? new Date()}
          isLiked={isLiked}
          videoDescription={
            currentVideo?.description || 'Description is not available'
          }
          videoTitle={currentVideo?.title || 'Title is not available'}
          videoLikes={likedBy?.length || 0}
          videoViews={
            (currentVideo?.viewedBy?.data &&
              currentVideo?.viewedBy?.data.length) ||
            0
          }
          videoDislikes={currentVideo?.dislikedBy?.data.length || 0}
          embedId={embedId as string}
          isDisliked={isDisliked}
          handleDislikes={handleDislikes}
          reportHandler={() => {
            console.log('kn5uevla61U, reported the video');
          }}
          handleLikes={handleLikes}
        />
        <div className='h-[500px] lg:h-[700px] lg:max-h-[800px] lg:w-[40%]'>
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
