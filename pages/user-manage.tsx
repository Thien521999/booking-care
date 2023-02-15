// libs
import { Box } from "@mui/material";
// hooks
import { useUnAuthentication } from "@hooks";
// components
import { Header, Content } from "@components";

const UserManagerPage = () => {
  useUnAuthentication();
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default UserManagerPage;
