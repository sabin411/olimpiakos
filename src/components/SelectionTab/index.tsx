import React from 'react';

// packages
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// types
import { SelectionTabProps } from './types';

export default function ScrollableTabsButtonForce({
  items,
}: {
  items: SelectionTabProps[];
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'var(--primary-1000)', marginLeft: '-40px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        TabScrollButtonProps={{
          sx: {
            color: 'var(--primary-200)',
          },
        }}
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        {items.map((category, i) => {
          return (
            <Tab
              label={category.name}
              component={Link}
              to={category.linkTo}
              sx={{
                marginInline: '4px',
                bgcolor: 'transparent',
                border: '2px solid var(--primary-900)',
                color: 'var(--neutral-700)',
                borderRadius: '25px',
                padding: '12px 40px',
                '&:hover': {
                  color: 'var(--neutral-100)',
                  fontWeight: 'var(--semi-bold)',
                  bgcolor: 'var(--primary-700)',
                  border: '2px solid var(--primary-700)',
                },
                '&.Mui-selected': {
                  color: 'var(--neutral-100)',
                  fontWeight: 'var(--semi-bold)',
                  bgcolor: 'var(--primary-600)',
                  border: '2px solid var(--primary-600)',
                },
              }}
              color='var(--neutral-200)'
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
