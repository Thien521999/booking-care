// libs
// hooks
import { useUnAuthentication } from "@hooks";
// components
import { Header } from "@components";

const AdminManagePage = () => {
  useUnAuthentication();
  return (
    <>
      <Header />
      {/* <Content /> */}
    </>
  )
}

export default AdminManagePage;
