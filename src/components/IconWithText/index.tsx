import React from 'react';

// utils
import { numberWithCommas } from '@/utils/texts';
import { IconButton } from '@mui/material';

// types
import { IconWithTextProps } from './types';

export default function IconWithText({
  Icon,
  text,
  className,
  containerStyle,
  enableInteraction,
  handleUserInteraction,
}: IconWithTextProps) {
  return (
    <p className={`flex items-center ${containerStyle}`}>
      {enableInteraction ? (
        <IconButton onClick={handleUserInteraction}>
          <Icon className={`${className}`} />
        </IconButton>
      ) : (
        <span className='mr-1'>
          <Icon className={`${className}`} />
        </span>
      )}
      {text && numberWithCommas(text)}
    </p>
  );
}
