// libs
import { yupResolver } from '@hookform/resolvers/yup';
import { useLang } from '@hooks';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Lightbox from 'react-image-lightbox';
import { FormattedMessage } from 'react-intl';
import * as yup from 'yup';
// components
import { InputField, SelectField } from '@components';
// models
import { gender, user } from '@models';
// other
import 'react-image-lightbox/style.css';
import styles from './ContentUserReduxForm.module.css';

interface IContentUserReduxFormProps {
  onSubmit: (value: user) => void;
  error: string;
  optionGender: gender[];
  optionRole: gender[];
  optionPosition: gender[];
  userEdit: user;
  isEdit: boolean;
}

export const ContentUserReduxForm = ({
  onSubmit,
  error,
  optionGender,
  optionRole,
  optionPosition,
  userEdit,
  isEdit,
}: IContentUserReduxFormProps) => {
  const lang = useLang();

  const [previewImage, setPreviewImage] = useState('');
  const [fileImage, setFileImage] = useState<any>('');
  const [open, setOpen] = useState(false);

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
    setValue,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: userEdit?.id || 0,
      email: userEdit?.email || '',
      password: '',
      firstName: userEdit?.firstName || '',
      lastName: userEdit?.lastName || '',
      address: userEdit?.address || '',
      gender: userEdit?.gender || '',
      roleId: userEdit?.roleId || '',
      positionId: userEdit?.positionId || '',
      phonenumber: userEdit?.phonenumber || '',
      // image: fileImage,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue('id', userEdit?.id);
    setValue('email', userEdit?.email);
    setValue('firstName', userEdit?.firstName);
    setValue('lastName', userEdit?.lastName);
    setValue('address', userEdit?.address);
    setValue('email', userEdit?.email);
    setValue('address', userEdit?.address);
    setValue('roleId', userEdit?.roleId);
    setValue('gender', userEdit?.gender);
    setValue('positionId', userEdit?.positionId);
    setValue('phonenumber', userEdit?.phonenumber);
  }, [setValue, userEdit]);

  const handleSubmitUserRedux: any = async (values: any) => {
    if (onSubmit) {
      await onSubmit(values);
      reset({});
    }
  };

  const handleOnChangeImage = (event: any) => {
    const data = event.target.files;
    const file = data[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);
      setFileImage(file);
      // setValue('image', file)
    }
  };

  const handlePreviewImage = () => {
    if (!previewImage) {
      return;
    }
    setOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitUserRedux)}>
      <div className={styles.title}>
        <FormattedMessage id="USER REDUX HOI DAN IT" defaultMessage={'USER REDUX HOI DAN IT'} />
      </div>
      <Box my={2}>Thêm mới người dùng</Box>
      <div className={styles.form}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Email" defaultMessage={'Email'} />
                </div>
                <InputField name="email" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Password" defaultMessage={'Password'} />
                </div>
                <InputField name="password" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Name" defaultMessage={'Name'} />
                </div>
                <InputField name="firstName" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Surname" defaultMessage={'Surname'} />
                </div>
                <InputField name="lastName" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Phone" defaultMessage={'Phone'} />
                </div>
                <InputField name="phonenumber" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={9}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Address" defaultMessage={'Address'} />
                </div>
                <InputField name="address" errors={errors} control={control} width="100%" />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Gender" defaultMessage={'Gender'} />
                </div>
                <SelectField
                  name="gender"
                  control={control}
                  width="100%"
                  options={optionGender}
                  placeholder={lang === 'en' ? 'Choose...' : 'Chọn...'}
                />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Position" defaultMessage={'Position'} />
                </div>
                <SelectField
                  name="positionId"
                  control={control}
                  width="100%"
                  options={optionPosition}
                  placeholder={lang === 'en' ? 'Choose...' : 'Chọn...'}
                />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Role" defaultMessage={'Role'} />
                </div>
                <SelectField
                  name="roleId"
                  control={control}
                  width="100%"
                  options={optionRole}
                  placeholder={lang === 'en' ? 'Choose...' : 'Chọn...'}
                />
              </div>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column">
              <div className={styles.item}>
                <div>
                  <FormattedMessage id="Avatar" defaultMessage={'Avatar'} />
                </div>
                <div>
                  <input id="previewImg" type="file" hidden onChange={(event) => handleOnChangeImage(event)} />
                  <label htmlFor="previewImg" className={styles.uploadFile}>
                    Tải ảnh <FileUploadIcon />
                  </label>
                  <div
                    className={styles.previewImage}
                    onClick={handlePreviewImage}
                    style={{ backgroundImage: `url(${previewImage})` }}
                  ></div>
                </div>

                {open && <Lightbox mainSrc={previewImage} onCloseRequest={() => setOpen(false)} />}
              </div>
            </Stack>
          </Grid>
        </Grid>

        {error && (
          <div className={styles.showError}>
            <FormattedMessage id={error} defaultMessage={error} />
          </div>
        )}
        <div className={styles.groupButton}>
          <div className={styles.btn}>
            {isEdit ? (
              <Button variant="outlined" size="small" color="success" disabled={!isValid} type="submit">
                Edit
              </Button>
            ) : (
              <Button variant="outlined" size="small" color="success" disabled={!isValid} type="submit">
                Save
              </Button>
            )}

            <Button
              variant="outlined"
              size="small"
              color="warning"
              // onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
