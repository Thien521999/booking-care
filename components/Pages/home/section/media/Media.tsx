// libs
import React from 'react';
// components
import { ContainerCommon } from '@components';
// others
import styles from './Media.module.css';

interface IMediaProps {
  title: string;
  images: any;
  color: string;
}

export const Media = ({ title, images, color }: IMediaProps) => {
  return (
    <div className={styles.mediaWrapper} style={{ background: color }}>
      <ContainerCommon>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.contents}>
          <div className={styles.contentLeft}>
            <iframe
              width="100%"
              height="321"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.contentRight}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quas nostrum ipsa exercitationem aut. Illo, natus quibusdam explicabo autem earum suscipit dignissimos debitis corporis quae ipsa exercitationem quis consequuntur officiis.
          </div>
        </div>
      </ContainerCommon>
    </div>
  );
};
