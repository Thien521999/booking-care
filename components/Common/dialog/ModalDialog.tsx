// libs
import { Dialog } from '@mui/material';
import React from 'react';
import Image from 'next/image';
// others
import styles from './ModalDialog.module.css';
import iconClose from '@public/images/iconClose.png';

interface Props {
  open: boolean;
  handleClose: () => void;
  children: any;
  width?: string;
}

export const ModalDialog = ({ open, handleClose, children, width }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: width,
        },
      }}
    >
      <span className={styles.iconClose} onClick={handleClose}>
        <Image src={iconClose} alt="lohoHeader" width="26" height="26" />
      </span>
      {children}
    </Dialog>
  );
};
