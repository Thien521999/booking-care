import { controllApi } from '@api';
import { CreateNewUser, EditUser, ModalDialog } from '@components';
import { user } from '@models';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch } from 'app/hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { addListUser } from 'redux/slice/authSlice';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const Content = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [userEdit, setUserEdit] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const id = 'ALL';
        const data: any = await controllApi.getAllUser(id);

        if (data && data.errCode === 0) {
          setUsers(data.users);

          const action = addListUser(data.users);
          dispatch(action);
        }
      } catch (error: any) {
        console.log('error', error.message);
      }
    })();
  }, [dispatch, router]);

  const handleClickOpen = () => {
    setOpen(true);

    router.push(
      {
        pathname: '/crud-user',
        query: {
          mode: 'create',
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClickOpenDialogSave = (user: user) => {
    setOpenEdit(true);
    setUserEdit(user);

    router.push(
      {
        pathname: '/crud-user',
        query: {
          mode: 'edit',
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDialogEdit = () => {
    setOpenEdit(false);
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await controllApi.postDeleteUser(id);
      router.push('/crud-user');
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  return (
    <>
      <Typography my={2} variant="h1" component="h1" textAlign="center">
        Manage User
      </Typography>
      <Box mb={1} ml={1}>
        <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleClickOpen}>
          Add new user
        </Button>
      </Box>
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
            {users &&
              users.map((user: user) => (
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
                      onClick={() => handleClickOpenDialogSave(user)}
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

      {/* create */}
      <ModalDialog open={open} handleClose={handleClose}>
        <CreateNewUser handleClose={handleClose} />
      </ModalDialog>

      {/* edit */}
      <ModalDialog open={openEdit} handleClose={handleCloseDialogEdit}>
        <EditUser handleClose={handleCloseDialogEdit} user={userEdit} />
      </ModalDialog>
    </>
  );
};
