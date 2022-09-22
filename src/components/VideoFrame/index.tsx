import React, { useState } from 'react';
import IconWithText from '../IconWithText';

// packages
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip } from '@mui/material';

// icons
import FlagIcon from '@mui/icons-material/Flag';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
// types
import { VideoFrameProps } from './types';

function VideoFrame({
  embedId,
  videoTitle,
  videoDescription,
  videoLikes,
  videoDislikes,
  videoViews,
  isLiked,
  isDisliked,
  handleLikes,
  handleDislikes,
  videoComments,
  reportHandler,
  containerStyle,
  likedBy,
  dislikedBy,
  ViewedBy,
}: VideoFrameProps) {
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // render more menu
  const RenderMoreMenu = () => {
    return (
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          onClick={() => {
            reportHandler();
            handleClose();
          }}
        >
          <FlagIcon className='mr-2' /> Report
        </MenuItem>
      </Menu>
    );
  };
  return (
    <>
      <div className={`bg-transparent ${containerStyle}`}>
        <div className='w-full aspect-video relative'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
          <div
            className='
          bg-error-600 h-4 w-4 
          rounded-full absolute 
          right-20  top-7
          
          after:content-["Live"] 
          after:absolute after:left-full
          after:top-1/2 
          after:-translate-y-1/2
          after:translate-x-2
          after:bg-primary-900 
          after:rounded-4
          after:text-neutral-400
          after:py-1 after:px-3

          '
          ></div>
        </div>
        <div className='mt-5 flex flex-col justify-start items-start lg:flex-row lg:justify-between'>
          <div className='lg:w-1/2'>
            <h6 className='text-neutral-400'>{videoTitle}</h6>
          </div>
          <div className='flex mt-4 lg:m-0'>
            <IconWithText
              Icon={RemoveRedEyeIcon}
              text={videoViews.toString()}
              containerStyle='text-neutral-500 ml-0'
            />
            <IconWithText
              Icon={isLiked ? ThumbUpIcon : ThumbUpOffAltIcon}
              text={videoLikes.toString()}
              containerStyle='text-neutral-500 ml-3'
              enableInteraction
              className={`${
                isLiked ? 'text-secondary-800' : 'text-neutral-500'
              }`}
              handleUserInteraction={() => {
                console.log('liked the video');
                handleLikes(!isLiked);
              }}
            />
            <IconWithText
              Icon={isDisliked ? ThumbDownIcon : ThumbDownOffAltIcon}
              text={videoDislikes.toString()}
              containerStyle='text-neutral-500 ml-3'
              enableInteraction
              className={`${
                isDisliked ? 'text-secondary-800' : 'text-neutral-500'
              }`}
              handleUserInteraction={() => {
                handleDislikes(!isDisliked);
                console.log('disliked the video');
              }}
            />
            <IconButton
              id='demo-positioned-button'
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                marginLeft: '8px',
              }}
            >
              <MoreVertIcon className='text-neutral-500' />
            </IconButton>
          </div>
        </div>
        <Tooltip title={videoDescription}>
          <>
            <p
              className={`mt-5 text-neutral-500 max-w-[80%] ${
                seeMoreDescription ? '' : 'line-clamp-3'
              }`}
            >
              {videoDescription}{' '}
            </p>
            <button
              onClick={() => setSeeMoreDescription(!seeMoreDescription)}
              className='font-semi-bold text-neutral-200 text-p hover:underline'
            >
              {!seeMoreDescription ? 'See more' : 'See less'}
            </button>
          </>
        </Tooltip>
      </div>
      <RenderMoreMenu />
    </>
  );
}

export default VideoFrame;
