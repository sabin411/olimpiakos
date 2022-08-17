import React from 'react';

// packages
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// constants
const categories = [
  {
    id: 1,
    name: 'All',
    linkTo: '/category/all',
  },
  {
    id: 2,
    name: 'Football',
    linkTo: '/category/football',
  },
  {
    id: 3,
    name: 'Basketball',
    linkTo: '/category/basketball',
  },
  {
    id: 4,
    name: 'Baseball',
    linkTo: '/category/baseball',
  },
  {
    id: 5,
    name: 'Hockey',
    linkTo: '/category/hockey',
  },
  {
    id: 6,
    name: 'Soccer',
    linkTo: '/category/soccer',
  },
  {
    id: 7,
    name: 'Tennis',
    linkTo: '/category/tennis',
  },
  {
    id: 8,
    name: 'Archery',
    linkTo: '/category/archery',
  },
  {
    id: 9,
    name: 'Swimming',
    linkTo: '/category/swimming',
  },
  {
    id: 10,
    name: 'Golf',
    linkTo: '/category/golf',
  },
  {
    id: 11,
    name: 'Rugby',
    linkTo: '/category/rugby',
  },
  {
    id: 12,
    name: 'Boxing',
    linkTo: '/category/boxing',
  },
  {
    id: 13,
    name: 'Cycling',
    linkTo: '/category/cycling',
  },
  {
    id: 14,
    name: 'Darts',
    linkTo: '/category/darts',
  },
  {
    id: 15,
    name: 'Fencing',
    linkTo: '/category/fencing',
  },
];

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'var(--primary-1000)' }}>
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
        {categories.map((category, i) => {
          return (
            <Tab
              label={category.name}
              // LinkComponent={() => {
              //   return <Link to={category.linkTo} />;
              // }}
              component={Link}
              to={category.linkTo}
              sx={{
                marginInline: '4px',
                bgcolor: 'transparent',
                border: '2px solid var(--primary-900)',
                color: 'var(--neutral-700)',
                borderRadius: '25px',
                padding: '12px 40px',
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
