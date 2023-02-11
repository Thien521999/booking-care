// libs
import { Avatar, Box, Stack } from '@mui/material';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
// components
import { ButtonCommon, CheckBoxField, InputField, PasswordField } from '@components';
// hooks
import { useLang } from '@hooks';
// models
// import { formValueLogin } from '@models';
// others
import InchcapeLogo from '@public/images/InchcapeLogo.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (value: any) => void;
  error: string;
}

export const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const router = useRouter();
  const lang = useLang();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(() => <FormattedMessage id={'This field is required.'} defaultMessage={'This field is required.'} />),
  });

  const {
    reset,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin: any = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    reset({ ...values, password: '', rememberMe: false });
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
          bgColor="#EB342E"
          color="#ffffff"
          fontSize="18px"
          lineHeight="21px"
          fontWeight="700"
          styleBorder="none"
          isDisabled={isDisabled}
          type="submit"
        />
      </Box>
    </form>
  );
};
