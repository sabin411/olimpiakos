import React from 'react';

// packages
import { Box, Dialog, Modal } from '@mui/material';

// global
import { Logo } from '@/global/common';
import { format } from 'date-fns';

const UpcomingPopup = ({
  image,
  text,
  subText,
  title,
  DateTime,
  open,
  handleClose,
}: {
  image?: string;
  text?: string;
  subText?: string;
  title?: string;
  DateTime: Date;
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='md'
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Box className='bg-primary-800 mx-auto flex flex-col h-[395px] md:flex-row'>
        <div className=' flex-1 overflow-hidden md:h-full'>
          <img
            src={image}
            className='h-full w-full object-cover'
            alt='upcoming event'
          />
        </div>
        <div className='px-[18px] h-1/2 flex-1 md:h-full'>
          <div className='w-[108px] mx-auto mt-6 hidden md:block'>
            <Logo />
          </div>
          <p className='mt-2 text-primary-200 md:mt-12'>{subText}</p>
          <h4 className='font-semi-bold'>{text}</h4>

          <div className='mt-4 w-full border-b-6 border-secondary-800 flex item-center'>
            <div className='bg-secondary-800 rounded-md py-5 px-4 m-0 -mb-1 font-semi-bold block w-full text-center md:inline-block'>
              <p>{format(DateTime, 'do LLL, K:mm aaa')}</p>
            </div>
            <p className='text-h5 font-semi-bold ml-2 mt-4 hidden md:block'>
              {title}
            </p>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default UpcomingPopup;
