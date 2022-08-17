import React from 'react';

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// types
type ArrowProps = {
  onClick?: () => void;
};

export const NextArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className='
      absolute flex items-center 
      border-2
      bg-neutral-100
      shadow-main top-2/4 
      border-neutral-300 w-9 h-9 
      justify-center rounded-full 
      -translate-y-2/4 text-neutral-700 
      translate-x-1/2

      right-0
    '
      onClick={onClick}
    >
      <NavigateNextIcon className='text-primary-600' />
    </button>
  );
};
export const BeforeArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className='absolute z-10 flex items-center 
      w-9 h-9 
      bg-neutral-100
      justify-center 
      text-neutral-700
      -translate-y-2/4 
      shadow-main top-2/4 
      rounded-full  border-2 border-neutral-300
      -translate-x-1/2


      left-0'
      onClick={onClick}
    >
      <NavigateBeforeIcon className='text-primary-600' />
    </button>
  );
};

export default { NextArrow, BeforeArrow };
