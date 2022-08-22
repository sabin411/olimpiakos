import React from 'react';

// components
import { NextArrow, BeforeArrow } from '@/components/SliderNavIcon';

// packages
import Slider from 'react-slick';
import { Button } from '@mui/material';

//icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// utils
import { numberWithCommas } from '@/utils/texts';
import IconWithText from '../IconWithText';

// types
import { HeroSliderProps } from './types';

function HeroSlider({ FeaturedVideos }: { FeaturedVideos: HeroSliderProps }) {
  return (
    <Slider
      dots={true}
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      nextArrow={<NextArrow />}
      prevArrow={<BeforeArrow />}
    >
      {FeaturedVideos.map((video, i) => {
        return (
          <div
            key={i}
            className=' w-full relative h-[592px] bg-secondary-700 text-neutral-400'
          >
            <div className='absolute h-full w-full py-5 px-6 lg:py-16 lg:px-16 backdrop-brightness-75'>
              <div className='lg:max-w-[50%]'>
                <h2 className='font-semi-bold text-neutral-300'>
                  {video.time}
                </h2>
                <div className='flex items-center text-neutral-400 mt-2'>
                  <IconWithText Icon={RemoveRedEyeIcon} text={video.views} />
                  <IconWithText Icon={ThumbUpIcon} text={video.likes} />
                </div>
                <p className='mt-2 text-p'>{video.description}</p>
              </div>
              <div className='mt-10 lg:mt-24'>
                <h3 className='font-semi-bold text-neutral-300 text-h5 md:text-h3 md:max-w-[70%]'>
                  {video.title}
                </h3>
                <Button
                  sx={{
                    backgroundColor: 'var(--secondary-800)',
                    paddingInline: '1.5rem',
                    marginTop: '24px',
                    ':hover': {
                      backgroundColor: 'var(--secondary-900)',
                    },
                    '.MuiTouchRipple-child': {
                      backgroundColor: 'var(--secondary-200)',
                    },
                  }}
                  startIcon={
                    <PlayCircleOutlineIcon className='text-neutral-200' />
                  }
                >
                  <span className='text-neutral-200'>Watch Now</span>
                </Button>
              </div>
            </div>
            <img
              src={video.thumbnail}
              className='h-full w-full object-cover'
              alt=''
            />
          </div>
        );
      })}
    </Slider>
  );
}

export default HeroSlider;
