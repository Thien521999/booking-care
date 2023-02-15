// libs
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Box } from '@mui/material';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
// components
import { ButtonCommon, InputField, PasswordField } from '@components';
// hooks
import { useLang } from '@hooks';
// others
import { payloadLogin } from '@models';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (value: payloadLogin) => void;
  error: string;
}

export const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const lang = useLang();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(() => <FormattedMessage id={'This field is required.'} defaultMessage={'This field is required.'} />),
  });

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin: any = async (values: payloadLogin) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const watchStaff = watch('email');
  const watchPassword = watch('password');
  const isDisabled = useMemo(() => {
    if (watchStaff === '' || watchPassword === '') {
      return false;
    }
    return true;
  }, [watchStaff, watchPassword]);

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit(handleSubmitLogin)}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <div className={styles.textLogin}>
        <FormattedMessage id={'Login'} defaultMessage={'Login'} />
      </div>

      <Box
        sx={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridGap: '24px', width: '100%' }}
      >
        <InputField name="email" control={control} width="100%" placeholder={lang === 'en' ? 'Email' : '員工證'} />
        <PasswordField
          name="password"
          errors={errors}
          control={control}
          width="100%"
          placeholder={lang === 'en' ? 'Password' : '密碼'}
        />
        {error && <div className={styles.showError}>{error}</div>}
        <ButtonCommon
          label={<FormattedMessage id={'Login'} defaultMessage={'Login'} />}
          width="100%"
          height="48px"
          bgColor="#eb342e"
          color="#ffffff"
          fontSize="18px"
          lineHeight="21px"
          fontWeight="700"
          styleBorder="none"
          isDisabled={isDisabled}
          type="submit"
        />
      </Box>
      <div className={styles.textForget}>
        <FormattedMessage id={'Forgot password?'} defaultMessage={'Forgot password?'} />
      </div>
      <div>Or Login With</div>
      <div className={styles.icons}>
        <GoogleIcon />
        <FacebookIcon />
      </div>
    </form>
  );
};
