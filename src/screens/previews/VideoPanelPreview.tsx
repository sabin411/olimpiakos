import React from 'react';

// component
import VideoPanel from '@/components/VideoPanel';
import CommentBox from '@/components/CommentBox';
import HeroSlider from '@/components/HeroSlider';
import VideoFrame from '@/components/VideoFrame';
import SelectionTab from '@/components/SelectionTab';

// images
import thumbnail from '@/assets/images/thumbnail.webp';
import Title from '@/components/Title';

// constants
import {
  dummyFeaturedVideo,
  dummyComments,
  categoriesData,
} from '@/constants/en';

export default function VideoPanelPreview() {
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
    <section className='container-custom mx-auto'>
      <div className='my-6'>
        <Title title='Hero Slider' containerStyle='mb-4 w-1/4' />
        <HeroSlider FeaturedVideos={dummyFeaturedVideo} />
      </div>
      <div>
        <Title title='Video Panel' containerStyle='mb-4 w-1/4' />
        <div className='flex justify-center gap-4'>
          {
            <VideoPanel
              embedId='2g811Eo7K8U'
              videoId='12343'
              likes={200323}
              views={23093}
              time='23:12'
              title='Brazil vs Netherland - A dramatic Ending left everybody in shock.'
              thumbnail={thumbnail}
            />
          }
        </div>
      </div>
      <div className='my-4'>
        <Title title='Comment Box' containerStyle='mb-4 w-1/4' />
        <CommentBox videoId='1' comments={dummyComments} />
      </div>
      <div className='my-4'>
        <Title title='Selection Tab' containerStyle='mb-4 w-1/4' />
        <SelectionTab items={categoriesData.items} />
      </div>
      <div className='my-4'>
        <Title title='Video frame' containerStyle='mb-4 w-1/4' />
        {/* <VideoFrame
          isLiked={isLiked}
          embedId='2g811Eo7K8U'
          videoDescription=' The Football final of the Olympic Games 2016 was between the host nation Brazil and the reigning World Cup Champion Germany. With top players like Neymar, Gabriel Jesus, Marquinhos, Niklas Süle and the Bender Twins on the pitch, it promised to be an exciting fight for the gold medal - and indeed, it was a more than thrilling showdown at the Maracanã!'
          videoTitle="Brazil vs Germany - FULL Match - Men's Football Final Rio 2016 | Throwback Thursday"
          videoLikes={76322}
          videoViews={8900818}
          videoDislikes={7235}
          isDisliked={isDisliked}
          handleDislikes={handleDislikes}
          reportHandler={() => {
            console.log('kn5uevla61U, reported the video');
          }}
          handleLikes={handleLikes}
        /> */}
      </div>
    </section>
  );
}
