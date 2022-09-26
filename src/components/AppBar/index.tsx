import React, { useState } from 'react';

// component
import Button from '../Button';

// packages
import i18n from 'i18next';
import Box from '@mui/material/Box';
import Cookies from 'universal-cookie';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import { Navigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

// assets
import Logo from '@/assets/images/logo-bottom.png';

// global
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// commons
import { SearchForm } from './common';

// utils
import { displayImage } from '@/utils/services';
import {
  FormControl,
  InputLabel,
  Popover,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { language } from '@/screens/signup/common/constants';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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
  const { t } = useTranslation();
  const [language, setLangauge] = React.useState('');
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

  const handleChange = (event: SelectChangeEvent) => {
    setLangauge(event.target.value as string);
    i18next.changeLanguage(event.target.value);
  };

  const LanguageChanger = () => {
    return (
      <FormControl
        sx={{
          width: '206px',
          marginRight: '70px',
        }}
      >
        <InputLabel
          sx={{
            color: 'var(--primary-400)',
            '&.Mui-focused': {
              color: 'var(--secondary-700)',
            },
          }}
          id='demo-simple-select-label'
        >
          Language
        </InputLabel>
        <Select
          sx={{
            '& .MuiSelect-select.MuiSelect-select': {
              paddingRight: '0px',
            },
            '& .MuiInputBase-input': {
              color: 'var(--primary-400)',
              paddingTop: '10px',
              paddingBottom: '10px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary-400)',
            },

            '& .MuiSvgIcon-root': {
              color: 'var(--primary-400)',
            },
            '&:hover': {
              '&& fieldset': {
                borderColor: 'var(--secondary-700)',
              },
            },
            '&.Mui-focused': {
              '&& fieldset': {
                borderColor: 'var(--secondary-700)',
              },
            },
          }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={language}
          label='Language'
          onChange={handleChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'fr'}>Franch</MenuItem>
        </Select>
      </FormControl>
    );
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

  const [anchorElPop, setAnchorElPop] =
    React.useState<HTMLButtonElement | null>(null);

  const handlePopUpClose = () => {
    setAnchorElPop(null);
  };

  const handlePopUpClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPop(event.currentTarget);
  };

  const open = Boolean(anchorElPop);
  const PopId = open ? 'simple-popover' : undefined;

  const notificationComingSoon = () => {
    return (
      <Popover
        id={PopId}
        open={open}
        anchorEl={anchorElPop}
        onClose={handlePopUpClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    );
  };

  // For mobile view
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
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
          aria-describedby={PopId}
          onClick={handlePopUpClick}
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p className='text-primary-800'>Notifications</p>
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
        <p className='text-primary-800'>Profile</p>
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
            aria-describedby={PopId}
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
                <img src={Logo} className='inline-block h-full' alt='' />
              </span>
            </Link>
          </Typography>
          {isLoggedIn ? (
            <>
              <SearchForm />
              <Box sx={{ flexGrow: 1 }} />
              {/* <LanguageChanger /> */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* <IconButton
                  size='large'
                  aria-label='show 17 new notifications'
                  color='inherit'
                >
                  <Badge badgeContent={17} color='error'>
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
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
      {notificationComingSoon}
    </>
  );
}

export default AppBarComp;
