import React from 'react';

// packages
import Button from '@mui/material/Button';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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
    <p className={`flex items-center ml-5 ${containerStyle}`}>
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
