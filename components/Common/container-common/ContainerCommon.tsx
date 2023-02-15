// libs
import React from 'react';
// others
import { LayoutProps } from 'models';
import styles from './ContainerCommon.module.css';

export const ContainerCommon = ({ children }: LayoutProps) => {
  return <div className={styles.containerWrapper}>{children}</div>;
};
