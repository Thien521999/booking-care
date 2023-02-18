// libs
import { Box } from "@mui/material";
// hooks
import { useAuthentication } from "@hooks";
// components
import { HealthFacilities, MainLayout, PopularSpecialties, OutstandingDoctor, Handbook, Media } from "@components";
import {Banner} from "@components";
// others
import imgSlider from '@public/images/img-slider.jpeg';

export const images2 = [
  {
    id: 1,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name1: 'Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng',
    name2: 'Cơ xương khớp',
  },
  {
    id: 2,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name1: 'Cơ xương khớp',
    name2: 'Cơ xương khớp',
  },
  {
    id: 3,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name1: 'Cơ xương khớp',
    name2: 'Cơ xương khớp',
  },
  {
    id: 4,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name1: 'Cơ xương khớp',
    name2: 'Cơ xương khớp',
  },
  {
    id: 5,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name1: 'Cơ xương khớp',
    name2: 'Cơ xương khớp',
  },
];
export const images3 = [
  {
    id: 1,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: '6 Địa chỉ Niềng răng uy tín có chính sách trả góp hấp dẫn tại TPHCM'
  },
  {
    id: 2,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: '6 Địa chỉ Niềng răng uy tín có chính sách trả góp hấp dẫn tại TPHCM'
  },
  {
    id: 3,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: '6 Địa chỉ Niềng răng uy tín có chính sách trả góp hấp dẫn tại TPHCM'
  },
  {
    id: 4,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: '6 Địa chỉ Niềng răng uy tín có chính sách trả góp hấp dẫn tại TPHCM'
  },
  {
    id: 5,
    url: 'https://banggia.vndirect.com.vn/chung-khoan/danh-muc',
    src: imgSlider,
    name: '6 Địa chỉ Niềng răng uy tín có chính sách trả góp hấp dẫn tại TPHCM'
  },
];
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
      <PopularSpecialties title='Chuyên khoa phổ biến' images={images} color='#f5f5f5' />
      <HealthFacilities title='Cơ sở y tế nổi bật' images={images} color='#fff' />
      <OutstandingDoctor title='Bác sĩ nổi bật tuần qua' images={images2} color='#f5f5f5' />
      <Handbook title='Cẩm nang' images={images3} color='#fff' />
      <Media title='Truyền thông nói về BookingCare' images={images3} color='#f5f5f5' />
    </>
  )
}

Home.Layout = MainLayout;

export default Home;
