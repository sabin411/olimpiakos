import React from 'react';

// components
import { NextArrow, BeforeArrow } from '@/components/SliderNavIcon';

// packages
import Slider from 'react-slick';
import { Button } from '@mui/material';

//icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// image
import image1 from '@/assets/images/patan.webp';
import hero1 from '@/assets/images/heroslider/hero1.jpg';
import hero2 from '@/assets/images/heroslider/hero2.jpg';
import hero3 from '@/assets/images/heroslider/hero3.jpg';

// utils
import { numberWithCommas } from '@/utils/texts';

// constants
const FeaturedVideo = [
  {
    time: '1:00',
    title: 'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    description:
      'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    thumbnail: hero2,
    views: '23093',
    likes: '200323',
    videoId: '12343',
  },
  {
    time: '2:53',
    title: 'Marathon',
    description:
      'Brazil vs Netherland - A dramatic Ending left everybody in shock.',
    thumbnail: hero1,
    views: '23093',
    likes: '200323',
    videoId: '1223',
  },
  {
    time: '4:53',
    title: '🏊‍♀️ 🏊🏻‍♂️ The best swimming finals at China2022 | Top Moments',
    description:
      ' Caeleb Dressel, Ariarne Titmus, Adam Peaty, Emma McKeon - they all left their marks at the 2022 Olympic Games! Here are the best swimming finals at #China2022 - enjoy watching! ',
    thumbnail: hero3,
    views: '23093',
    likes: '200323',
    videoId: '1223',
  },
];

function HeroSlider() {
  return (
    <section>
      <Slider
        dots={true}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<BeforeArrow />}
        className='container-custom mx-auto'
      >
        {FeaturedVideo.map((video, i) => {
          return (
            <div className=' w-full relative h-[592px] bg-secondary-700 text-neutral-400'>
              <div className='absolute h-full w-full py-5 px-6 lg:py-16 lg:px-16 backdrop-brightness-75'>
                <div className='lg:max-w-[50%]'>
                  <h4 className='text-h2'>{video.time}</h4>
                  <div className='flex items-center text-neutral-400 mt-2'>
                    <p className='flex items-center'>
                      <span className='mr-1'>
                        <RemoveRedEyeIcon />
                      </span>
                      {numberWithCommas(video.views)}
                    </p>
                    <p className='flex items-center ml-5'>
                      <span className='mr-1'>
                        <ThumbUpIcon />
                      </span>
                      {numberWithCommas(video.likes)}
                    </p>
                  </div>
                  <p className='mt-2 text-p'>{video.description}</p>
                </div>
                <div className='mt-10 lg:mt-24'>
                  <h3 className='text-h3 font-semi-bold md:max-w-[70%]'>
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
    </section>
  );
}

export default HeroSlider;
