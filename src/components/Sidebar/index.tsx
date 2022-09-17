import React, { useCallback, useState } from 'react';

// 1. packages
import Button from '../Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

// 2. icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// consts
import { sidebar as sidebarConst } from '@/constants';

// global
import { Logo } from '@/global/common';

const Sidebar = ({
  openMenu: open,
  isLoggedIn,
  setOpenMenu: setOpen,
}: {
  openMenu: boolean;
  isLoggedIn: boolean;
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
        <Box
          sx={{
            width: 250,
            backgroundColor: 'var(--primary-900)',
            color: 'var(--neutral-400)',
            padding: '8px 16px',
            display: 'flex',
          }}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer(false)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              marginLeft: '28px',
            }}
          >
            <Link to='/'>
              <span className='inline-block h-10'>
                <Logo />
              </span>
            </Link>
          </Typography>
        </Box>
        {isLoggedIn ? (
          list()
        ) : (
          <Box
            style={{
              width: 250,
              height: '100%',
              backgroundColor: 'var(--primary-900)',
              color: 'var(--neutral-400)',
            }}
          >
            <List>
              <ListItem disablePadding>
                <Link to={'/'} className='inline-block w-full'>
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
                      <HomeOutlinedIcon className='text-neutral-400' />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                  </ListItemButton>
                </Link>
                {/* </Link> */}
              </ListItem>
            </List>
            <div className='px-[18px] mt-6'>
              <p>Sign in to like videos, comment, and subscribe.</p>
              <Link to='/login' className='mt-3 block'>
                <Button
                  buttonSize='medium'
                  variant='contained'
                  title='login'
                  type='button'
                  containerStyle={{
                    width: '100%',
                    maxWidth: '100%',
                  }}
                />
              </Link>
            </div>
          </Box>
        )}
      </Drawer>
    </div>
  );
};

export default Sidebar;
