import React from 'react';

// component
import Title from '@/components/Title';
import CommentBox from '@/components/CommentBox';
import VideoFrame from '@/components/VideoFrame';
import VideoPanel from '@/components/VideoPanel';

// pacakges
import { useLocation, useSearchParams } from 'react-router-dom';

// constants
import { dummyComments } from '@/constants/index';
import { recommendedvids } from './constants';

function Watch() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [isLiked, setIsLiked] = React.useState(false);
  const [isDisliked, setIsDisliked] = React.useState(false);
  const handleLikes = (likeStatus: boolean) => {
    setIsLiked(likeStatus);
    if (likeStatus) {
      setIsDisliked(false);
    }
  };
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
          containerStyle='w-[90%]'
          isLiked={isLiked}
          videoDescription=' The Football final of the Olympic Games 2016 was between the host nation Brazil and the reigning World Cup Champion Germany. With top players like Neymar, Gabriel Jesus, Marquinhos, Niklas Süle and the Bender Twins on the pitch, it promised to be an exciting fight for the gold medal - and indeed, it was a more than thrilling showdown at the Maracanã!'
          videoTitle="Brazil vs Germany - FULL Match - Men's Football Final Rio 2016 | Throwback Thursday"
          videoLikes='76322'
          videoViews='8900818'
          videoDislikes='7235'
          embedId={searchParams.get('id') as string}
          isDisliked={isDisliked}
          handleDislikes={handleDislikes}
          reportHandler={() => {
            console.log('kn5uevla61U, reported the video');
          }}
          handleLikes={handleLikes}
        />
        <CommentBox
          comments={dummyComments}
          containerStyle='max-h-[600px] lg:max-h-[800px]'
        />
      </section>
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
    </>
  );
}

export default Watch;
