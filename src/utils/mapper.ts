// types
import { videoPanelProps } from '@/components/VideoPanel/types';
import { Videos_videos_data } from '@/graphql/__generated__/Videos';

// images
import { imageDummy } from '@/assets/images/dummyImages';

export const mapVideoPanelProps = (
  videos: Videos_videos_data[] | undefined,
): videoPanelProps[] => {
  if (!videos)
    return [
      {
        videoId: '2',
        embedId: 'kn5uevla61U',
        title:
          "Brazil vs Germany - FULL Match - Men's Football Final Rio 2016 | Throwback Thursday",
        likes: 76322,
        views: 89008,
        time: '5:18',
        thumbnail:
          'https://i.ytimg.com/vi/kn5uevla61U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLddt-pQGPdhV44O8Np5pEJl_GCQ',
      },
    ];

  const updatedVideo = videos?.map(video => {
    return {
      videoId: video.id || '2',
      embedId: video.attributes?.embedId || 'kn5uevla61U',
      thumbnail:
        video.attributes?.thumbnail.data[0].attributes?.url || imageDummy,
      title: video.attributes?.title || 'Title is not available',
      views: video.attributes?.viewedBy?.data.length || 0,
      likes: video.attributes?.likedBy?.data.length || 0,
      time: video.attributes?.duration || '0:00',
    };
  });
  return updatedVideo;
};
