// libs
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
// slice
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { logout } from 'redux/slice/authSlice';
// components
import { ChangeLanguage } from '../../home/header-main/change-language/ChangeLanguage';
// others
import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getCurrentUser = useAppSelector((state) => state.auth.currentUser);

  const [openUser, setOpenUser] = useState<null | HTMLElement>(null);
  const [openClinic, setOpenClinic] = useState<null | HTMLElement>(null);
  const [openSpecialist, setOpenSpecialist] = useState<null | HTMLElement>(null);
  const [openHandbook, setOpenHandbook] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick: any = (event: React.MouseEvent<HTMLButtonElement>, setFunc: any) => {
    setFunc(event.currentTarget);
  };

  const handleClickClinic: any = () => {
    console.log('a');
  };

  const handleClose = (setFunc: any) => {
    setFunc(null);
  };

  const handleRedirect = (url: string, setFunc: any, index?: number) => {
    setFunc(null);
    if(index) {
      setSelectedIndex(index);
    }
    router.push(url);
  };

  const handleLogout = () => {
    const action = logout();
    dispatch(action);

    router.push('/auth');
  };

  const listManage = [
    {
      id: 1,
      url: '/doctor-manage',
      name: 'Doctor Management',
    },
    {
      id: 2,
      url: '/admin-manage',
      name: 'Admin Management',
    },
    {
      id: 3,
      url: '/crud-user',
      name: 'CRUD User',
    },
    {
      id: 2,
      url: '/user-redux',
      name: 'CRUD Redux',
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.contentLeft}>
        <div className={styles.system} onClick={() => handleClick(event, setOpenUser)}>
          <FormattedMessage id="User" defaultMessage="User" />
        </div>

        <div onClick={() => handleClick(event, setOpenClinic)} className={styles.system}>
          <FormattedMessage id="Clinic" defaultMessage="Clinic" />
        </div>
        <div onClick={() => handleClick(event, setOpenSpecialist)} className={styles.system}>
          <FormattedMessage id="Specialist" defaultMessage="Specialist" />
        </div>
        <div onClick={() => handleClick(event, setOpenHandbook)} className={styles.system}>
          <FormattedMessage id="Handbook" defaultMessage="Handbook" />
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.intoUser}>
          <FormattedMessage id="Welcom" defaultMessage="Welcom" />, {getCurrentUser && getCurrentUser.lastName}
        </div>

        <div className={styles.locale}>
          <ChangeLanguage />
        </div>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </div>

      {/* menu user */}
      <Menu
        id="basic-menu"
        anchorEl={openUser}
        open={Boolean(openUser)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={() => handleClose(setOpenUser)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {listManage &&
          listManage.map((manage: any, index) => (
            <MenuItem
              key={manage.id}
              selected={index === selectedIndex}
              onClick={() => handleRedirect(manage.url, setOpenUser, index)}
            >
              <FormattedMessage id={`${manage.url}`} defaultMessage={manage.name} />
            </MenuItem>
          ))}
      </Menu>

      {/* menu clinic */}
      <Menu
        id="basic-menu"
        anchorEl={openClinic}
        open={Boolean(openClinic)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={() => handleClose(setOpenClinic)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleRedirect('/doctor-manage', setOpenClinic)}>
          <FormattedMessage id="Clinic Management" defaultMessage="Clinic Management" />
        </MenuItem>
      </Menu>

      {/* menu Specialist */}
      <Menu
        id="basic-menu"
        anchorEl={openSpecialist}
        open={Boolean(openSpecialist)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={() => handleClose(setOpenSpecialist)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleRedirect('/doctor-manage', setOpenSpecialist)}>
          <FormattedMessage id="Specialist Management" defaultMessage="Specialist Management" />
        </MenuItem>
      </Menu>

      {/* menu Handbook */}
      <Menu
        id="basic-menu"
        anchorEl={openHandbook}
        open={Boolean(openHandbook)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={() => handleClose(setOpenHandbook)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleRedirect('/doctor-manage', setOpenHandbook)}>
          <FormattedMessage id="Handbook Management" defaultMessage="Handbook Management" />
        </MenuItem>
      </Menu>
    </div>
  );
};
