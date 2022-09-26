import React, { useEffect } from 'react';

// component
import Input from '@/components/Input';
import Button from '@/components/Button';

// Package
import * as yup from 'yup';
import Cookies from 'universal-cookie';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

// global
import {
  emailValidation,
  fullNameValidation,
  userNameValidation,
  phoneNumberValidation,
  oldPasswordValidation,
  passwordValidation,
} from '@/global/validation';

// constants
import { profile } from '@/constants/en';

// Schema
const emailSchema = yup.object().shape({
  email: emailValidation,
});

const fullNameSchema = yup.object().shape({
  fullName: fullNameValidation,
});

const phoneNumberSchema = yup.object().shape({
  phoneNumber: phoneNumberValidation,
});

const passwordChangeShema = yup.object().shape({
  // oldPassword: oldPasswordValidation,
  newPassword: passwordValidation,
});

// graphql generated types
import {
  CHANGE_PASSWORD,
  UPDATE_USER_INFORMATION,
  UPDATE_USER_PERMISSION,
} from '@/graphql/mutation.graphql';
import {
  UpdateUserPermission,
  UpdateUserPermissionVariables,
} from '@/graphql/__generated__/UpdateUserPermission';
import { whatToUpdateProps } from './types';
import { showToast } from '@/utils/Toast/toast';
import {
  UpdateUserInfo,
  UpdateUserInfoVariables,
} from '@/graphql/__generated__/UpdateUserInfo';
import {
  ChangePassword,
  ChangePasswordVariables,
} from '@/graphql/__generated__/ChangePassword';

export const EditProfile = ({
  whatToUpdate,
  setOpenModal,
}: {
  whatToUpdate: whatToUpdateProps;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cookies = new Cookies();
  const {
    emailUpdateFailed,
    nameUpdateFailed,
    passwordUpdateFailed,
    phoneNumberUpdateFailed,
    unableToUpdate,
  } = profile.errorMessage;
  const {
    emailUpdateSuccess,
    nameUpdateSuccess,
    passwordUpdateSuccess,
    phoneNumberUpdateSuccess,
  } = profile.successMessage;
  const schema =
    whatToUpdate === 'EMAIL'
      ? emailSchema
      : whatToUpdate === 'NAME'
      ? fullNameSchema
      : whatToUpdate === 'PHONE'
      ? phoneNumberSchema
      : passwordChangeShema;

  const { inputFields } = profile.form;
  const navigate = useNavigate();
  const email = cookies.get('email');
  const userId = cookies.get('userId');
  const name = cookies.get('fullName');
  const userInfoId = cookies.get('userInfoId');
  const phoneNumber = cookies.get('phoneNumber');
  const token = cookies.get('token');
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [updateUserPermissionQuery] = useMutation<
    UpdateUserPermission,
    UpdateUserPermissionVariables
  >(UPDATE_USER_PERMISSION, {
    onCompleted: data => {
      console.log(data);
    },
  }); // update query for updating user

  const [updateUserInfoQuery] = useMutation<
    UpdateUserInfo,
    UpdateUserInfoVariables
  >(UPDATE_USER_INFORMATION, {
    onError: err => {
      showToast({
        title: unableToUpdate,
        subTitle: err?.message,
        type: 'error',
      });
    },
  }); // update query for updating user information

  const [changePasswordQuery] = useMutation<
    ChangePassword,
    ChangePasswordVariables
  >(CHANGE_PASSWORD, {
    onError: err => {
      showToast({
        title: unableToUpdate,
        subTitle: err?.message,
        type: 'error',
      });
    },
  });

  const handleChangeProfileInfo = (data: FieldValues) => {
    if (whatToUpdate === 'EMAIL') {
      updateUserPermissionQuery({
        variables: {
          data: {
            email: data.email,
          },
          updateUsersPermissionsUserId: userId,
        },
      }).then(res => {
        showToast({
          title: emailUpdateSuccess,
          type: 'success',
        });
        cookies.set(
          'email',
          res.data?.updateUsersPermissionsUser.data?.attributes?.email,
        );
        setOpenModal(false);
      });
      return;
    }
    if (whatToUpdate === 'NAME') {
      updateUserInfoQuery({
        variables: {
          data: {
            fullName: data.fullName,
          },
          updateUserInformationId: userInfoId,
        },
      }).then(res => {
        showToast({
          title: nameUpdateSuccess,
          type: 'success',
        });
        cookies.set(
          'fullName',
          res.data?.updateUserInformation?.data?.attributes?.fullName,
        );
        setOpenModal(false);
      });
      return;
    }
    if (whatToUpdate === 'PHONE') {
      updateUserInfoQuery({
        variables: {
          data: {
            phoneNumber: data.phoneNumber,
          },
          updateUserInformationId: userInfoId,
        },
      }).then(res => {
        if (res.data?.updateUserInformation?.data?.id) {
          showToast({
            title: phoneNumberUpdateSuccess,
            type: 'success',
          });
        }
        cookies.set(
          'phoneNumber',
          res.data?.updateUserInformation?.data?.attributes?.phoneNumber,
        );
        setOpenModal(false);
      });
      return;
    }
    if (whatToUpdate === 'PASSWORD') {
      changePasswordQuery({
        variables: {
          currentPassword: data.oldPassword,
          password: data.newPassword,
          passwordConfirmation: data.newPassword,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }).then(res => {
        if (res.data?.changePassword?.jwt) {
          showToast({
            title: 'Password updated successfully',
            type: 'success',
          });
          cookies.set('token', res.data?.changePassword?.jwt);
        }
        setOpenModal(false);
      });
      return;
    }
  };

  const getInput = () => {
    switch (whatToUpdate) {
      case 'NAME':
        return (
          <Input
            label={inputFields.fullName.label}
            name={inputFields.fullName.name}
            type={inputFields.fullName.type}
            error={Boolean(errors.fullName)}
            errorMessage={errors.fullName?.message?.toString()}
            control={control}
          />
        );
      case 'EMAIL':
        return (
          <Input
            label={inputFields.email.label}
            name={inputFields.email.name}
            type={inputFields.email.type}
            error={Boolean(errors.email)}
            errorMessage={errors.email?.message?.toString()}
            control={control}
          />
        );
      case 'PHONE':
        return (
          <Input
            label={inputFields.phoneNumber.label}
            name={inputFields.phoneNumber.name}
            type={inputFields.phoneNumber.type}
            error={Boolean(errors.phoneNumber)}
            errorMessage={errors.phoneNumber?.message?.toString()}
            control={control}
          />
        );
      case 'PASSWORD':
        return (
          <>
            <Input
              label={inputFields.oldPassword.label}
              name={inputFields.oldPassword.name}
              type={inputFields.oldPassword.type}
              error={Boolean(errors.oldPassword)}
              errorMessage={errors.oldPassword?.message?.toString()}
              control={control}
            />
            <Input
              label={inputFields.newPassword.label}
              name={inputFields.newPassword.name}
              type={inputFields.newPassword.type}
              error={Boolean(errors.newPassword)}
              errorMessage={errors.newPassword?.message?.toString()}
              control={control}
            />
          </>
        );
      default:
        return <div>Something went wrong</div>;
    }
  };

  useEffect(() => {
    if (whatToUpdate === 'NAME') {
      setValue('fullName', name);
    }
    if (whatToUpdate === 'EMAIL') {
      setValue('email', email);
    }
    if (whatToUpdate === 'PHONE') {
      setValue('phoneNumber', phoneNumber);
    }
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit(data => handleChangeProfileInfo(data))}>
        {getInput()}
        <Button
          variant='contained'
          type='submit'
          buttonSize='large'
          containerStyle={{
            width: '100%',
            maxWidth: '100%',
            marginTop: '1rem',
          }}
          title={'Update'}
        />
      </form>
    </div>
  );
};

export default EditProfile;
