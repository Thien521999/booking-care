// libs
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { toast } from 'react-toastify';
// components
import { ContainerCommon, StyledTableCell, StyledTableRow } from '@components';
// models
import { user } from '@models';
// api
import { controllApi } from '@api';
// hooks
import { useAppDispatch, useAppSelector } from 'app/hooks';
// slice
import { addListUser } from 'redux/slice/authSlice';

interface ITableUserReduxProps {
  handleGetInFoNeedEdit: (value: user) => void;
}

export const TableUserRedux = ({ handleGetInFoNeedEdit }: ITableUserReduxProps) => {
  const dispatch = useAppDispatch();
  const getUsers = useAppSelector((state) => state.auth.listUser);

  const handleDeleteUser = async (id: number) => {
    try {
      await controllApi.postDeleteUser(id);
      toast.success('DELETE USER SUCCESS!');

      const inputType = 'ALL';
      const data: any = await controllApi.getAllUser(inputType);

      if (data && data.errCode === 0) {
        const action = addListUser(data.users);
        dispatch(action);
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  const handleEditUser = (user: user) => {
    if (handleGetInFoNeedEdit) {
      handleGetInFoNeedEdit(user);
    }
  };

  return (
    <Box my={3}>
      <ContainerCommon>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getUsers &&
                getUsers.map((user: user) => (
                  <StyledTableRow key={user?.id}>
                    <StyledTableCell>{user?.email}</StyledTableCell>
                    <StyledTableCell align="right">{user.firstName}</StyledTableCell>
                    <StyledTableCell align="right">{user?.lastName}</StyledTableCell>
                    <StyledTableCell align="right">{user?.address}</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleEditUser(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="large"
                        edge="start"
                        color="warning"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleDeleteUser(user?.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContainerCommon>
    </Box>
  );
};
