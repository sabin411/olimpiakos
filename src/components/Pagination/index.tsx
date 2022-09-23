import React from 'react';

// packages
import { Pagination } from '@mui/material';

export const PaginationComp = ({
  count,
  page,
  size,
}: {
  count?: number;
  page?: number;
  size?: 'small' | 'medium' | 'large' | undefined;
}) => {
  return (
    <div>
      <Pagination
        sx={{
          '& .Mui-selected': {
            backgroundColor: 'red',
            color: 'white',
          },
        }}
        color='secondary'
        page={page}
        count={count}
        size={size}
        onChange={data => console.log(data)}
      />
    </div>
  );
};

export default PaginationComp;
