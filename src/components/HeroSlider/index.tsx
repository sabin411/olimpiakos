import React from 'react';

// components
import { NextArrow, BeforeArrow } from '@/components/SliderNavIcon';

// packages
import Slider from 'react-slick';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
            key={video.videoId + video.embedId}
            className=' w-full relative h-[620px] bg-secondary-700 text-neutral-400'
          >
            <div className='absolute h-full w-full py-5 px-6 lg:py-16 lg:px-16 backdrop-brightness-75'>
              <div className='lg:max-w-[90%]'>
                <h2 className='font-semi-bold text-neutral-300'>
                  {video.time}
                </h2>
                <div className='flex items-center gap-x-3 text-neutral-400 mt-2'>
                  <IconWithText
                    Icon={RemoveRedEyeIcon}
                    text={video.views.toString()}
                  />
                  <IconWithText
                    Icon={ThumbUpIcon}
                    text={video.likes.toString()}
                  />
                </div>
                <p className='mt-2 text-p line-clamp-3'>{video.description}</p>
              </div>
              <div className='mt-10 lg:mt-12'>
                <h3 className='font-semi-bold text-neutral-300 text-h5 md:text-h3 md:max-w-full line-clamp-2'>
                  {video.title}
                </h3>
                <Link to={`watch?id=${video.embedId}`}>
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
                </Link>
              </div>
            </div>
            <img
              src={'http://localhost:1337' + video.thumbnail}
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
