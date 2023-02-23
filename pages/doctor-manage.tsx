// libs
// hooks
import { useUnAuthentication } from "@hooks";
// components
import { Header, Content } from "@components";

const DoctorManagePage = () => {
  useUnAuthentication();
  return (
    <>
      <Header />
      A
      {/* <Content /> */}
    </>
  )
}

export default DoctorManagePage;
