// libs
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
// components
import { ContainerCommon } from '@components';
// models
import { images } from '@models';
// other
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './Handbook.module.css';

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

interface IHandbookProps {
  title: string;
  images: images[];
  color: string;
}

export const Handbook = ({ title, images, color }: IHandbookProps) => {
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 2,
    speed: 200,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
        //   centerPadding: '200'
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
          <div className={styles.btn}>TẤT CẢ BÀI VIẾT</div>
        </div>
        <Slider {...settings}>
          {images?.map((img: any) => (
            <Link href={img?.url} key={img.id}>
              <div className={styles.item}>
                <Image src={img.src} width="232.5" height="150" alt={`image${img.id}`} />
                <div className={styles.name}>{img.name}</div>
              </div>
            </Link>
          ))}
        </Slider>
      </ContainerCommon>
    </div>
  );
};
