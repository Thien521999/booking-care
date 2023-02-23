// libs
import { InputField } from '@components';
import { useLang } from '@hooks';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
// other
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './CreateNewUserForm.module.css';

interface ICreateNewUserFormProps {
  onSubmit: (value: any) => void;
  handleClose: () => void;
  error: string;
}

export const CreateNewUserForm = ({ onSubmit, handleClose, error }: ICreateNewUserFormProps) => {
  const lang = useLang();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required('')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, ' ')
      .min(8, '')
      .max(16, ''),
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
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
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
            errors={errors}
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Password' : '員工證'}
          />
        </div>
        <div className={styles.item}>
          <InputField
            name="firstName"
            errors={errors}
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'First Name' : '員工證'}
          />
          <InputField
            name="lastName"
            errors={errors}
            control={control}
            width="100%"
            placeholder={lang === 'en' ? 'Last Name' : '員工證'}
          />
        </div>
        <Box>
          <InputField
            name="address"
            errors={errors}
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
            <Button variant="outlined" size="small" color="success" disabled={!isValid} type="submit">
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
