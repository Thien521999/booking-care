// libs
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
// components
import { ContainerCommon } from '@components';
// models
import { images } from '@models';
// other
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './SliderCommon.module.css';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', zIndex: '2' }} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', zIndex: '2' }} onClick={onClick} />;
}

interface ISliderCommonProps {
  title: string;
  images: images[];
}

export const SliderCommon = ({title, images}: ISliderCommonProps) => {
  
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 4,
    speed: 200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.sliderCommonWrapper}>
        <ContainerCommon>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.btn}>XEM THÊM</div>
        </div>
        <Slider {...settings}>
          {images?.map((img: any) => (
            <div key={img.id}>
            <Link href={img?.url} >
              <Box>
                <Image src={img.src} width="276" height="156" alt={`image${img.id}`} />
              </Box>
            </Link>
            <div className={styles.name}>{img.name}</div>
            </div>
          ))}
        </Slider>
    </ContainerCommon>
      </div>
  );
};
