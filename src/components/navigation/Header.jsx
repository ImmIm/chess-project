/* eslint-disable no-sparse-arrays */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GamesIcon from '@mui/icons-material/Games';
import DarkSwitch from '../ui/DarkSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../app/store';
import { Link, useNavigate } from 'react-router-dom';
import { Divider, ListItemIcon } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useSelector((store) => store.ui.theme);
  const loginStatus = useSelector((store) => store.auth.isLogined);
  const profilePic = useSelector((store) => store.auth.userPicture);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const themeChangeHandler = () => {
    dispatch(theme.toggleTheme());
  };

  const loginHandler = () => {
    handleCloseUserMenu();
    dispatch(uiActions.toggleLoginBackdrop());
  };

  const logoutHandler = () => {
    handleCloseUserMenu();
    dispatch(authActions.logout());
    localStorage.removeItem('user');
    navigate('');
  };

  const pages = [
    <MenuItem key={'play online'}>
      <Link
        to={'/game/play_online'}
        style={{ textDecoration: 'none', color: 'inherit' }}>
        Play online
      </Link>
    </MenuItem>,
    <MenuItem key={'play_CPU'}>
      <Link
        to={'/game/play_CPU'}
        style={{ textDecoration: 'none', color: 'inherit' }}>
        Play with CPU
      </Link>
    </MenuItem>,
    <MenuItem key={'raitings'}>
      <Link
        to={'/raitings'}
        style={{ textDecoration: 'none', color: 'inherit' }}>
        Raitings
      </Link>
    </MenuItem>,
    <MenuItem key={'info'}>
      <Link to={'/info'} style={{ textDecoration: 'none', color: 'inherit' }}>
        Info
      </Link>
    </MenuItem>,
  ];
  const settings = [
    <MenuItem key={'profile'}>
      <Link
        to={'/profile'}
        style={{
          textAlign: 'center',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '7px',
        }}>
        <Avatar src={profilePic} /> Profile
      </Link>
    </MenuItem>,
    <Divider key={'divider'} />,
    ,
    <MenuItem key={'settings'}>
      <Link
        to={'/settings'}
        style={{ textAlign: 'center', textDecoration: 'none' }}>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Settings
      </Link>
    </MenuItem>,
    ,
    <MenuItem onClick={logoutHandler} key={'logout'}>
      <ListItemIcon>
        <Logout fontSize='small' />
      </ListItemIcon>
      Logout
    </MenuItem>,
  ];

  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#595959' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <GamesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Chess battle
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                page
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Chess battle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page
            ))}
          </Box>
          {loginStatus ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='User' src={profilePic} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => setting)}
              </Menu>
            </Box>
          ) : (
            <Button
              sx={{ color: 'white', display: 'block' }}
              onClick={loginHandler}>
              Login
            </Button>
          )}

          <Box>
            <DarkSwitch onChange={themeChangeHandler} defaultChecked />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
