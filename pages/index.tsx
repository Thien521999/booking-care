// libs
import { Box } from "@mui/material";
// hooks
import { useUnAuthentication } from "@hooks";

export default function Home() {
  useUnAuthentication();
  return (
    <>
      <Box sx={{color: 'red'}}>Tran</Box>
    </>
  )
}
