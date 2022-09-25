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
      <Box className='bg-primary-800 mx-auto flex h-[395px] '>
        <div className='h-full flex-1 overflow-hidden'>
          <img
            src={image}
            className='h-full w-full object-cover'
            alt='upcoming event'
          />
        </div>
        <div className='px-[18px] h-full flex-1'>
          <div className='w-[108px] mx-auto mt-6'>
            <Logo />
          </div>
          <p className='mt-12 text-primary-200'>{subText}</p>
          <h4 className='font-semi-bold'>{text}</h4>

          <div className='mt-4 w-full border-b-6 border-secondary-800 flex item-center'>
            <div className='bg-secondary-800 rounded-lg py-5 px-4 m-0 inline-block -mb-1 font-semi-bold'>
              <p>{format(DateTime, 'do LLL, K:mm aaa')}</p>
            </div>
            <p className='text-h5 font-semi-bold ml-2 mt-4'>{title}</p>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};

export default UpcomingPopup;
