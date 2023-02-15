// libs
import { Box } from "@mui/material";
// hooks
import { useAuthentication } from "@hooks";
// components
import { MainLayout } from "@components";

 const Home = () => {
  useAuthentication();
  return (
    <>
      <Box sx={{color: 'red'}}>Tran</Box>
    </>
  )
}

Home.Layout = MainLayout;

export default Home;
