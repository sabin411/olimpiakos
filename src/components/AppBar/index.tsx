import React, { useState } from 'react';

// component
import Button from '../Button';

// packages
import Cookies from 'universal-cookie';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Navigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

// global
import { Logo } from '@/global/common';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// commons
import { SearchForm } from './common';

// utils
import { displayImage } from '@/utils/services';

function AppBarComp({
  onMenuClick,
  isLoggedIn,
  profileImage,
}: {
  onMenuClick: () => void;
  isLoggedIn: boolean;
  profileImage: string;
}) {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // handle logout
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('userName');
    cookies.remove('email');
    cookies.remove('fullName');
    cookies.remove('profilePic');
    cookies.remove('phoneNumber');
    cookies.remove('userInfoId');
    cookies.remove('ugid');
    navigate('/login');
  };

  // for desktop view
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  );

  // for mobile view
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          flexGrow: 1,
          backgroundColor: 'var(--primary-900)',
        }}
      >
        <Toolbar className='!container-custom'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/'>
              <span className='inline-block h-10'>
                {' '}
                <Logo />{' '}
              </span>
            </Link>
          </Typography>
          {isLoggedIn ? (
            <>
              <SearchForm />
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size='large'
                  aria-label='show 17 new notifications'
                  color='inherit'
                >
                  <Badge badgeContent={17} color='error'>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  aria-haspopup='true'
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <Avatar src={displayImage(profileImage)} />
                  {/* <AccountCircle /> */}
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='show more'
                  aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={handleMobileMenuOpen}
                  color='inherit'
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <div className='flex gap-x-5'>
              <Link to='/login'>
                <Button
                  buttonSize='medium'
                  variant='outlined'
                  title='Login'
                  type='button'
                  containerStyle={{
                    borderRadius: '25px',
                  }}
                />
              </Link>
              <Link to='/register'>
                <Button
                  buttonSize='medium'
                  variant='contained'
                  title='Sign up'
                  type='button'
                  containerStyle={{
                    borderRadius: '25px',
                  }}
                />
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default AppBarComp;
