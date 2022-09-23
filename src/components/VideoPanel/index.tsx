import React from 'react';

// component
import IconWithText from '@/components/IconWithText';

// packages
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';

// icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// types
import { videoPanelProps } from './types';
import { BASE_URL } from '@/env';
import { useMutation } from '@apollo/client';
import {
  UpdateVideoUserInteraction,
  UpdateVideoUserInteractionVariables,
} from '@/graphql/__generated__/UpdateVideoUserInteraction';
import { UPDATE_VIDEO } from '@/graphql/mutation.graphql';
import Cookies from 'universal-cookie';

function VideoPanel({
  time,
  title,
  views,
  likes,
  videoId,
  thumbnail,
  containerStyle,
  embedId,
}: videoPanelProps) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [updateVideo] = useMutation<
    UpdateVideoUserInteraction,
    UpdateVideoUserInteractionVariables
  >(UPDATE_VIDEO);

  const handleClick = () => {
    navigate(`/watch?id=${videoId}&embedId=${embedId}`);
    // This useEffect is used to update the video view count and add the user to the video view list
    // if (videoId) {
    //   updateVideo({
    //     variables: {
    //       updateVideoId: videoId,
    //       data: {
    //         viewedBy: [...viwedBy, cookies.get('userId') as string],
    //       },
    //     },
    //   });
    // }
  };
  return (
    <button onClick={handleClick} className={`${containerStyle}`}>
      <Card
        sx={{
          backgroundColor: 'var(--primary-800)',
          cursor: 'pointer',
        }}
      >
        <div className='aspect-video relative overflow-hidden'>
          <img
            src={BASE_URL + thumbnail}
            className='w-full h-full object-cover peer hover:scale-105 transition-all duration-200'
            alt={title + 'thumbnail'}
          />
          <p className='absolute opacity-0 right-0 bottom-1 px-1 bg-primary-800 text-neutral-300 transition-all duration-200 peer-hover:opacity-80'>
            {time}
          </p>
        </div>
        <CardContent className='flex'>
          <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu91Flh7ObCO6aMLS5lzF4Z0xBYecb6hXLb26azOGyc=s176-c-k-c0x00ffffff-no-rj' />
          <div className='ml-2'>
            <h5 className='text-s font-semi-bold text-neutral-100 line-clamp-2'>
              {title}
            </h5>
            <div className='flex items-center text-neutral-400 mt-2'>
              <IconWithText
                Icon={RemoveRedEyeIcon}
                text={(views + 34544).toString()}
                containerStyle='!m-0 text-s'
                className='!text-p'
              />
              <IconWithText
                Icon={ThumbUpIcon}
                text={(likes + 87768).toString()}
                containerStyle='text-s ml-4'
                className='!text-p'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

export default VideoPanel;
