// libs
import React from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Stack } from '@mui/material';
// components
import { Menu } from './menu/Menu';
import { ContainerCommon } from '@components';
import { ChangeLanguage } from './change-language/ChangeLanguage';
// others
import styles from './HeaderMain.module.css';
import bookingcare from '@public/images/bookingcare.svg';

export interface IHeaderMainProps {}

export const HeaderMain = (props: IHeaderMainProps) => {
  return (
    <div className={styles.headerMainWrapper}>
      <ContainerCommon>
        <div className={styles.headerMainContainer}>
          <Stack direction="row" justifyContent="center">
            <Box
              display={{
                xs: 'block',
                lg: 'none',
              }}
            >
              <MenuIcon />
            </Box>
            <Image src={bookingcare} alt="bookingcare" width="200" height="33" />
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
    </div>
  );
};
