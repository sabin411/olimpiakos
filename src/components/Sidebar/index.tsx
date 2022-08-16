import React, { useCallback, useState } from 'react';

// 1. packages
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

// consts
import { sidebar as sidebarConst } from '@/constants';

const Sidebar = ({
  openMenu: open,
  setOpenMenu: setOpen,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // function responsible for toggling the sidebar open/closed
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: 'var(--primary-900)',
        color: 'var(--neutral-400)',
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarConst.primaryLinks.map((links, index) => (
          <ListItem key={links.title} disablePadding>
            <Link to={links.linkTo} className='inline-block w-full'>
              <ListItemButton
                sx={{
                  ':hover': {
                    background: 'var(--primary-800)',
                  },
                }}
                onClick={() => {
                  toggleDrawer(false);
                }}
              >
                <ListItemIcon>
                  <links.icon className='text-neutral-400' />
                </ListItemIcon>
                <ListItemText primary={links.title} />
              </ListItemButton>
            </Link>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
      <Divider className='bg-primary-700' />
      <List>
        {sidebarConst.secondaryLinks.map((links, index) => (
          <ListItem key={links.title} disablePadding>
            <Link to={links.linkTo} className='inline-block w-full'>
              <ListItemButton
                sx={{
                  ':hover': {
                    background: 'var(--primary-800)',
                  },
                }}
              >
                <ListItemIcon>
                  <links.icon className='text-neutral-400' />
                </ListItemIcon>
                <ListItemText primary={links.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
