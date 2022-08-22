import React from 'react';
import { Link } from 'react-router-dom';

// component
import Title from '@/components/Title';

// packages
import { Button, Typography } from '@mui/material';

// global
import { Logo } from '@/global/common';

// constants
const footerConst = [
  {
    title: 'Games',
    links: [
      {
        title: 'Football',
        linkTo: '/football',
      },
      {
        title: 'Cricket',
        linkTo: '/cricket',
      },
      {
        title: 'Tennis',
        linkTo: '/tennis',
      },
      {
        title: 'Swimming',
        linkTo: '/swimming',
      },
    ],
  },
  {
    title: 'Category',
    links: [
      {
        title: 'Athelets',
        linkTo: '/athelets',
      },
      {
        title: 'Sports',
        linkTo: '/category',
      },
    ],
  },
  {
    title: 'News',
    links: [
      {
        title: 'PodCast',
        linkTo: '/podcast',
      },
      {
        title: 'Topics',
        linkTo: '/topics',
      },
    ],
  },
];

function Footer() {
  return (
    <footer className='bg-primary-900'>
      <div className='container-custom py-6 flex flex-col gap-y-7 lg:flex-row lg:gap-x-7 lg:gap-y-0'>
        <div className='flex flex-col max-w-[580px]'>
          <Link to='/' className='w-[205px]'>
            <Logo />
          </Link>
          <p className='mt-5 text-neutral-400 mb-10'>
            Watch your favorite sports, discover award-winning Original Films
            and Series and explore our 24/7 thematic linear channels.
          </p>
          <Button
            variant='contained'
            sx={{
              backgroundColor: 'var(--secondary-800)',
              maxWidth: '220px',
              ':hover': {
                backgroundColor: 'var(--secondary-700)',
              },
            }}
          >
            Explore
          </Button>
        </div>
        <div className='flex gap-11 flex-col md:flex-row '>
          {footerConst.map((footer, i) => {
            return (
              <div key={i + footer.title} className='w-full md:w-[183px]'>
                <Title title={footer.title} containerStyle='mb-7' />
                <ul className='flex flex-col gap-3'>
                  {footer.links.map((link, index) => {
                    return (
                      <li key={link.title + index}>
                        <Link
                          to={link.linkTo}
                          className='text-neutral-400 hover:text-secondary-800'
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      to='/category'
                      className='text-neutral-400 hover:text-secondary-800'
                    >
                      More...
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
