import React, { useCallback } from 'react';

// packages
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// styles
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '98vh',
  display: 'flex',
  flexDirection: 'column',
};

export const useLightBox = () => {
  const [open, setOpen] = React.useState(false);

  const isLightBoxOpen = (show: boolean) => {
    setOpen(show);
  };

  const LightBox = useCallback(
    ({
      imageLink,
      title,
      description,
    }: {
      imageLink: string;
      title: string;
      description: string;
    }) => {
      return (
        <Modal
          open={open}
          sx={{
            position: 'fixed',
          }}
          disableEnforceFocus={true}
          onClose={() => isLightBoxOpen(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <>
            <Box sx={style}>
              <div className='h-full relative overflow-x-hidden'>
                <img
                  src={imageLink}
                  alt='images'
                  className='h-full w-auto object-cover peer'
                />
                <div
                  className='
                  py-4 px-5
                  absolute bottom-0 
                  translate-y-full transition
                  ease-in-out delay-150
                  duration-500
                  w-full bg-primary-800
                  opacity-0
 
                  peer-hover:opacity-100
                  peer-hover:translate-y-0

                  hover:translate-y-0
                  hover:opacity-100
                  '
                >
                  <h4 className='text-neutral-200'>{title}</h4>
                  <p className='text-neutral-300'>{description}</p>
                </div>
              </div>
            </Box>
          </>
        </Modal>
      );
    },
    [open],
  );

  return {
    isLightBoxOpen,
    LightBox,
  };
};

export default useLightBox;
