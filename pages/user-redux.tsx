// libs
// hooks
import { useUnAuthentication } from '@hooks';
// components
import { ContentUserRedux, Header, TableUserRedux } from '@components';
import { useState } from 'react';
import { user } from '@models';

const UserReduxPage = () => {
  useUnAuthentication();

  return (
    <>
      <Header />
      <ContentUserRedux/>
    </>
  );
};

export default UserReduxPage;
