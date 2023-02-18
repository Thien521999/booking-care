// libs
import Image from 'next/image';
// components
import { ContainerCommon } from '@components';
// other
import styles from './FooterMain.module.css';
import facebook from '@public/images/facebook.svg';
import youtube from '@public/images/youtube.svg';

export const FooterMain = () => {
  return (
    <div className={styles.footerMainWrapper}>
      <ContainerCommon>
        <div className={styles.content}>
          <div className={styles.text}>@ 2023 BookingCare</div>
          <div>
            <Image src={facebook} alt="" width="32" height="32" /> &nbsp;
            <Image src={youtube} alt="" width="32" height="32" />
          </div>
        </div>
      </ContainerCommon>
    </div>
  );
};
