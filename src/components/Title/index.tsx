import React from 'react';

// packages
import Button from '@mui/material/Button';

function Title({
  title,
  containerStyle,
  extraButtonTitle,
}: {
  title: string;
  containerStyle?: string;
  extraButtonTitle?: string;
}) {
  return (
    <div
      className={`font-semi-bold border-b-primary-600 border-b-2 text-neutral-200 flex justify-between ${containerStyle}`}
    >
      <h4 className='w-fit border-b-secondary-800 border-b-4 text-p xs:text-h4 capitalize'>
        {title}
      </h4>
      {extraButtonTitle && (
        <Button
          variant='outlined'
          color='inherit'
          sx={{
            padding: '8px 20px',
            marginBottom: '8px',
          }}
        >
          {extraButtonTitle}
        </Button>
      )}
    </div>
  );
}

export default Title;
