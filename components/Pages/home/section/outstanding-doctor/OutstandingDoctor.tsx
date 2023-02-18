// libs
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import Slider from 'react-slick';
// components
import { ContainerCommon } from '@components';
// models
import { images2 } from '@models';
// other
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './OutstandingDoctor.module.css';

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

interface IOutstandingDoctorProps {
  title: string;
  images: images2[];
  color: string;
}

export const OutstandingDoctor = ({ title, images, color }: IOutstandingDoctorProps) => {
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
    <div className={styles.sliderCommonWrapper} style={{ background: color }}>
      <ContainerCommon>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.btn}>Tìm kiếm</div>
        </div>
        <Slider {...settings}>
          {images?.map((img: images2) => (
            <div key={img.id} className={styles.item}>
              <Link href={img?.url}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 120, height: 120 }} />
              </Link>
              <div className={styles.name1}>{img.name1}</div>
              <div className={styles.name2}>{img.name2}</div>
            </div>
          ))}
        </Slider>
      </ContainerCommon>
    </div>
  );
};
