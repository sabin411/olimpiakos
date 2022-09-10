import React, { useCallback } from 'react';

// packages
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FsLightbox from 'fslightbox-react';

// styles
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const useLightBox = () => {
  const [open, setOpen] = React.useState(false);

  const isLightBoxOpen = show => {
    setOpen(show);
  };

  const LightBox = useCallback(
    ({ imageLink }) => {
      return (
        <Modal
          open={open}
          onClose={() => isLightBoxOpen(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <img src={imageLink} alt='images' />
          </Box>
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
