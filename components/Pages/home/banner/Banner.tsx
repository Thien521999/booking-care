// libs
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
// components
import { Search } from './search/Search';
// other
import option1 from '@public/images/option1.png';
import option2 from '@public/images/option2.png';
import option3 from '@public/images/option3.png';
import option4 from '@public/images/option4.png';
import option5 from '@public/images/option5.png';
import option6 from '@public/images/option6.png';
import option7 from '@public/images/option7.jpeg';
import option8 from '@public/images/option8.png';
import option9 from '@public/images/option9.jpeg';
import styles from './Banner.module.css';

export const Banner = () => {
  const router = useRouter();

  const listOption = [
    {
      id: 1,
      name1: 'Khám',
      name2: 'Chuyên Khoa',
      src: option1,
    },
    {
      id: 2,
      name1: 'Khám',
      name2: 'từ xa',
      src: option2,
    },
    {
      id: 3,
      name1: 'Khám',
      name2: 'tổng quát',
      src: option3,
    },
    {
      id: 4,
      name1: 'Xét nghiệm',
      name2: 'y học',
      src: option4,
    },
    {
      id: 5,
      name1: 'Sức khoẻ tinh thần',
      name2: 'tinh thần',
      src: option5,
    },
    {
      id: 6,
      name1: 'Khám',
      name2: 'nha khoa',
      src: option6,
    },
    {
      id: 7,
      name1: 'Gói',
      name2: 'Gói Phẫu thuật',
      src: option7,
    },
    {
      id: 8,
      name1: 'Sản phẩm',
      name2: 'Y tế',
      src: option8,
    },
    {
      id: 9,
      name1: 'Sức khoẻ',
      name2: 'Doanh nghiệp',
      src: option9,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = async (newSearch: any) => {
    if (newSearch) {
      router.push(
        {
          pathname: `${router.pathname}`,
          query: {
            query: newSearch ? `${newSearch}` : '',
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      router.push(`${router.pathname}`);
    }
  };
  return (
    <div className={styles.homeBanner}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="60%"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25),rgba(255, 255, 255, 0.1))`,
        }}
      >
        <Box mb={2.5}>
        <div className={styles.titleBanner}>
          <FormattedMessage id={'NỀN TẢNG Y TẾ'} defaultMessage={'NỀN TẢNG Y TẾ'} />
        </div>
        <div className={styles.titleBanner}>
          <FormattedMessage id={'CHĂM SÓC SỨC KHOẺ TOÀN DIỆN'} defaultMessage={'CHĂM SÓC SỨC KHOẺ TOÀN DIỆN'} />
        </div>
        </Box>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchChange={handleSearchChange} />
      </Stack>
      <div className={styles.listOption}>
        <div className={styles.container}>
          {listOption.map((option) => (
            <div key={option.id} className={styles.option}>
              <Box>
                <Image src={option.src} alt="lohoHeader" width="40" height="40" />
              </Box>
              <div className={styles.nameOption}>{option.name1}</div>
              <div className={styles.nameOption}>{option.name2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
