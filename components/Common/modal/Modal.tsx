// libs
import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
// others
import styles from './Modal.module.css';

interface IModalProps {
  titleTxt: string;
  open: boolean;
  handleClose: () => void;
  children: any;
}

export const Modal = ({ titleTxt, open, handleClose, children }: IModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <span className={styles.close} onClick={handleClose}>
        <DisabledByDefaultIcon />
      </span>
      <div className={styles.titleTxt}>{titleTxt}</div>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
