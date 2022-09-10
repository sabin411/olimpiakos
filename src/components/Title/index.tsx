import React from 'react';

// components
import { Link } from 'react-router-dom';

// packages
import Button from '@mui/material/Button';

// type
import { TitleProps } from './type';

function Title({
  title,
  containerStyle,
  extraButtonTitle,
  exploreMoreLink,
}: TitleProps) {
  return (
    <div
      className={`font-semi-bold border-b-primary-600 border-b-2 text-neutral-200 flex justify-between ${containerStyle}`}
    >
      <h4 className='w-fit border-b-secondary-800 border-b-4 text-p xs:text-h4 capitalize'>
        {title}
      </h4>
      {extraButtonTitle && exploreMoreLink ? (
        <Button
          variant='outlined'
          color='inherit'
          sx={{
            padding: '8px 20px',
            marginBottom: '8px',
          }}
        >
          <Link to={exploreMoreLink}>{extraButtonTitle}</Link>
        </Button>
      ) : null}
    </div>
  );
}

export default Title;
