// libs
import React from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
// components
import logo from '@public/images/Logo.png';
import { ContainerCommon } from '@components';
import { Menu } from './menu/Menu';
import { Box, Stack } from '@mui/material';
import styles from './HeaderMain.module.css';
import { ChangeLanguage } from './change-language/ChangeLanguage';

export interface IHeaderMainProps {}

export const HeaderMain = (props: IHeaderMainProps) => {
  return (
    <Box sx={{ background: '#fff', boxShadow: '0px 1px 1px rgb(0 0 0 / 18%)' }}>
      <ContainerCommon>
        <div className={styles.headerMainWrapper}>
          <Stack direction="row" justifyContent="center">
            <MenuIcon />
            <Image src={logo} alt="logo" width="200" height="33" />
          </Stack>
          <Box
            display={{
              xs: 'none',
              lg: 'block',
            }}
          >
            <Menu />
          </Box>
          <ChangeLanguage />
        </div>
      </ContainerCommon>
    </Box>
  );
};
