// libs
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// components
import { ContainerCommon, TableUserRedux } from '@components';
import { ContentUserReduxForm } from '../content-user-redux-form/ContentUserReduxForm';
// others
import { gender, user } from '@models';
// api
import { controllApi } from '@api';
// hooks
import { useAppDispatch } from 'app/hooks';
// slice
import { addGenders, addListUser, addPosition, addRoledId } from 'redux/slice/authSlice';

export const ContentUserRedux = () => {
  const [error, setError] = useState('');
  const [optionGender, setOptionGender] = useState<gender[]>([]);
  const [optionRole, setOptionRole] = useState<gender[]>([]);
  const [optionPosition, setOptionPosition] = useState<gender[]>([]);
  const [userEdit, setUserEdit] = useState<any>();
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    try {
      if (isEdit) {
        await controllApi.postEditUser(values);
        toast.success('EDIT USER SUCCESS');
        setIsEdit(false);
      } else {
        delete values.id;
        await controllApi.postCreateNewlUser(values);

        toast.success('CREATE USER SUCCESS');
      }

      const id = 'ALL';
      const data: any = await controllApi.getAllUser(id);

      if (data && data.errCode === 0) {
        const action = addListUser(data.users);
        dispatch(action);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const [resGenders, resRoleId, resPosition]: any = await Promise.all([
          controllApi.getAllCodeUser('gender'),
          controllApi.getAllCodeUser('ROLE'),
          controllApi.getAllCodeUser('POSITION'),
        ]);

        setOptionGender(resGenders.data);
        setOptionRole(resRoleId.data);
        setOptionPosition(resPosition.data);

        const action1 = addGenders(resGenders.data);
        const action2 = addRoledId(resRoleId.data);
        const action3 = addPosition(resPosition.data);
        dispatch(action1);
        dispatch(action2);
        dispatch(action3);
      } catch (error: any) {
        console.log('Error', error);
        setError(error.message);
      }
    })();
  }, [dispatch]);

  const handleGetInFoNeedEdit = async (values: user) => {
    setUserEdit(values);
    setIsEdit(true);
  };

  return (
    <ContainerCommon>
      <ContentUserReduxForm
        optionGender={optionGender}
        optionRole={optionRole}
        optionPosition={optionPosition}
        onSubmit={handleSubmit}
        error={error}
        userEdit={userEdit}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />

      <TableUserRedux handleGetInFoNeedEdit={handleGetInFoNeedEdit} />
    </ContainerCommon>
  );
};
