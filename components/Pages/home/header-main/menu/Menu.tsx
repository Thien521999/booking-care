// libs
import React from 'react';
import { FormattedMessage } from 'react-intl';
// others
import styles from './Menu.module.css';

export const Menu = () => {
  const listCateggory = [
    {
      id: 1,
      title: <FormattedMessage id={'Specialist'} defaultMessage={'Specialist'} />,
      content: 'Tìm bác sĩ theo chuyên khoa',
    },
    {
      id: 2,
      title: <FormattedMessage id={'Health facilities'} defaultMessage={'Health facilities'} />,
      content: 'Chọn bệnh viện phòng khám',
    },
    {
      id: 3,
      title: <FormattedMessage id={'Doctor'} defaultMessage={'Doctor'} />,
      content: 'Chọn bác sĩ giỏi',
    },
    {
      id: 4,
      title: <FormattedMessage id={'Checkup package'} defaultMessage={'Checkup package'} />,
      content: 'Khám sức khoẻ tổng quát',
    },
  ];

  return (
    <div className={styles.menuWrapper}>
      {listCateggory.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.title}>{item?.title}</div>
          <div className={styles.content}>{item?.content}</div>
        </div>
      ))}
    </div>
  );
};
