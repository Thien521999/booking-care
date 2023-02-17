// libs
import { Box } from "@mui/material";
// hooks
import { useAuthentication } from "@hooks";
// components
import { MainLayout, SliderCommon } from "@components";
import {Banner} from "@components";
import imgSlider from '@public/images/img-slider.jpeg';

export const images = [
  {
    id: 1,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: 'Cơ xương khớp'
  },
  {
    id: 2,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: 'Thần kinh'
  },
  {
    id: 3,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: 'Tiêu hoá'
  },
  {
    id: 4,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: 'Tim mạch'
  },
  {
    id: 5,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: 'Cơ xương khớp'
  },
];

 const Home = () => {
  useAuthentication();
  return (
    <>
      <Banner />
      <SliderCommon title='Chuyên khoa phổ biến' images={images} />
    </>
  )
}

Home.Layout = MainLayout;

export default Home;
