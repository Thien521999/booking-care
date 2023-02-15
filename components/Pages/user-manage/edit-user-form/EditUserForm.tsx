// libs
import { useLang } from '@hooks';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { InputField } from '@components';
// models
import { user } from '@models';
// other
import styles from './EditUserForm.module.css';

interface IEditUserFormProps {
  onSubmit: (value: any) => void;
  handleClose: () => void;
  error: string;
  user: user;
}

export const EditUserForm = ({ onSubmit, handleClose, error, user }: IEditUserFormProps) => {
  const lang = useLang();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(() => <FormattedMessage id={'please_enter_your_email'} defaultMessage={'Please enter your email'} />)
      .email(() => (
        <FormattedMessage id={'invalid_email_address_format'} defaultMessage={'Invalid email address format'} />
      )),
    firstName: yup
      .string()
      .required(() => <FormattedMessage id={'please_enter_your_email'} defaultMessage={'Please enter your email'} />),
    lastName: yup
      .string()
      .required(() => <FormattedMessage id={'please_enter_your_email'} defaultMessage={'Please enter your email'} />),
    address: yup
      .string()
      .required(() => <FormattedMessage id={'please_enter_your_email'} defaultMessage={'Please enter your email'} />),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: user?.email,
      password: '',
      firstName: user?.firstName,
      lastName: user?.lastName,
      address: user?.address,
      id: user?.id,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin: any = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <div className={styles.title}>
        <FormattedMessage id="Create a new user" defaultMessage={'Create a new user'} />
      </div>
      <div className={styles.form}>
        <div className={styles.item}>
          <InputField
            name="email"
            errors={errors}
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Email' : '員工證'}
          />
          <InputField
            name="password"
            isDisable={true}
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Password' : '員工證'}
          />
        </div>
        <div className={styles.item}>
          <InputField
            name="firstName"
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'First Name' : '員工證'}
          />
          <InputField
            name="lastName"
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Last Name' : '員工證'}
          />
        </div>
        <Box>
          <InputField
            name="address"
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Address' : '員工證'}
          />
        </Box>

        {error && (
          <div className={styles.showError}>
            <FormattedMessage id={error} defaultMessage={error} />
          </div>
        )}

        <div className={styles.groupButton}>
          <div className={styles.btn}>
            <Button variant="outlined" size="small" color="success" disabled={!isValid} type='submit'>
              Save
            </Button>
            <Button variant="outlined" size="small" color="warning" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
