// components
import { AuthLayout, Login } from '@components';
// hooks
import { useAuthentication } from '@hooks';

const LoginPage = () => {
  useAuthentication();

  return (
    <>
      <Login />
    </>
  );
};

LoginPage.Layout = AuthLayout;

export default LoginPage;
