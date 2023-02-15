// libs
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// slice
import { logout } from 'redux/slice/authSlice';
import { useAppDispatch } from 'app/hooks';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const action = logout();
    dispatch(action);

    router.push('/auth');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
