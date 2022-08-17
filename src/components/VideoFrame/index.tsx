import React from 'react';
import IconWithText from '../IconWithText';

// packages
import Tooltip from '@mui/material/Tooltip';

// icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

// types
import { VideoFrameProps } from './types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton/IconButton';
import FlagIcon from '@mui/icons-material/Flag';

function VideoFrame({
  embedId,
  videoTitle,
  videoDescription,
  videoLikes,
  videoDislikes,
  videoViews,
  isLiked,
  videoComments,
  reportHandler,
}: VideoFrameProps) {
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
      <div className='bg-transparent'>
        <div className='w-full h-[300px] lg:h-[570px]'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
        <div className='mt-5 flex flex-col justify-start items-start lg:flex-row lg:justify-between'>
          <div className='lg:w-1/2'>
            <h6 className='text-neutral-400'>{videoTitle}</h6>
          </div>
          <div className='flex mt-4 lg:m-0'>
            <IconWithText
              Icon={RemoveRedEyeIcon}
              text={videoViews}
              containerStyle='text-neutral-500 ml-0'
            />
            <IconWithText
              Icon={isLiked ? ThumbUpIcon : ThumbUpOffAltIcon}
              text={videoLikes}
              containerStyle='text-neutral-500'
              enableInteraction
              className={`${
                isLiked ? 'text-secondary-800' : 'text-neutral-500'
              }`}
              handleUserInteraction={() => {
                console.log('liked the video');
              }}
            />
            <IconWithText
              Icon={ThumbDownOffAltIcon}
              text={videoDislikes}
              containerStyle='text-neutral-500'
              enableInteraction
              className='text-neutral-500'
              handleUserInteraction={() => {
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
        <p className='mt-5 text-neutral-500 max-w-[65%]'>{videoDescription}</p>
      </div>
      <RenderMoreMenu />
    </>
  );
}

export default VideoFrame;
