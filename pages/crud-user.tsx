// libs
import { Box } from "@mui/material";
// hooks
import { useUnAuthentication } from "@hooks";
// components
import { Header, Content } from "@components";

const CrudUserPage = () => {
  useUnAuthentication();
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default CrudUserPage;
